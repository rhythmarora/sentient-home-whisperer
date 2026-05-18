import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  project_type?: string;
  budget_range?: string;
  source: string;
  message?: string;
  metadata?: Record<string, unknown>;
}

const CLIQ_WEBHOOK = Deno.env.get('ZOHO_CLIQ_RESI_SALES_WEBHOOK');
const MDASH_INGEST_URL = 'https://qcmmycttkcdvounokbca.supabase.co/functions/v1/ingest-lead';
const MDASH_INGEST_TOKEN = Deno.env.get('MDASH_INGEST_TOKEN');

function buildCliqMessage(lead: LeadPayload): Record<string, unknown> {
  const lines: string[] = [];
  lines.push(`*New Website Lead — ${lead.source}*`);
  if (lead.name) lines.push(`*Name:* ${lead.name}`);
  if (lead.email) lines.push(`*Email:* ${lead.email}`);
  if (lead.phone) lines.push(`*Phone:* ${lead.phone}`);
  if (lead.project_type) lines.push(`*Property:* ${lead.project_type}`);
  if (lead.budget_range) lines.push(`*Budget:* ${lead.budget_range}`);
  if (lead.message) lines.push(`*Notes:* ${lead.message}`);
  if (lead.metadata && Object.keys(lead.metadata).length) {
    const meta = Object.entries(lead.metadata)
      .map(([k, v]) => `  • ${k}: ${v}`)
      .join('\n');
    lines.push(`*Details:*\n${meta}`);
  }
  return { text: lines.join('\n') };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as LeadPayload;
    if (!body?.source) {
      return new Response(JSON.stringify({ error: 'source is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // 1. Insert into shared leads table (Mdash reads from this)
    const { data: inserted, error: dbError } = await supabase
      .from('leads')
      .insert({
        name: body.name ?? null,
        email: body.email ?? null,
        phone: body.phone ?? null,
        project_type: body.project_type ?? null,
        budget_range: body.budget_range ?? null,
        source: body.source,
        message: body.message ?? null,
        metadata: body.metadata ?? {},
      })
      .select()
      .single();

    if (dbError) console.error('leads insert error:', dbError);

    // 2. Post to Zoho Cliq (Resi Sales) — non-blocking failure
    if (CLIQ_WEBHOOK) {
      try {
        const res = await fetch(CLIQ_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(buildCliqMessage(body)),
        });
        if (!res.ok) {
          console.error('Cliq webhook non-200:', res.status, await res.text());
        }
      } catch (e) {
        console.error('Cliq webhook error:', e);
      }
    } else {
      console.warn('ZOHO_CLIQ_RESI_SALES_WEBHOOK not configured');
    }

    return new Response(JSON.stringify({ ok: true, lead_id: inserted?.id ?? null }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('notify-lead error:', err);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
