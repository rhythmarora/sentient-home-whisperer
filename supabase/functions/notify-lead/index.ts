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

    // 2. Cliq notifications are now handled downstream by MDash's ingest-lead
    //    (single source of truth). Direct Cliq post from this site removed
    //    to avoid duplicate messages.

    // 3. Forward to MDash ingest endpoint — non-blocking failure
    if (MDASH_INGEST_TOKEN) {
      try {
        const res = await fetch(MDASH_INGEST_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-webhook-token': MDASH_INGEST_TOKEN,
          },
          body: JSON.stringify({
            name: body.name,
            email: body.email,
            phone: body.phone,
            source: body.source,
            brand: 'Qubix',
            assigned_to: 'Residential Team',
            message: body.message,
            project_type: body.project_type,
            budget_range: body.budget_range,
            metadata: body.metadata ?? {},
          }),
        });
        if (!res.ok) {
          console.error('MDash ingest non-200:', res.status, await res.text());
        }
      } catch (e) {
        console.error('MDash ingest error:', e);
      }
    } else {
      console.warn('MDASH_INGEST_TOKEN not configured');
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
