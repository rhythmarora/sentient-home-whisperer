import { useEffect, useRef } from "react";

declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        ready?: () => void;
        values?: {
          set: (key: string, value: string) => void;
        };
        visitor?: {
          name: (name: string) => void;
          email: (email: string) => void;
          phone: (phone: string) => void;
          info: (info: Record<string, string>) => void;
        };
        chat?: {
          start: () => void;
        };
        tracking?: {
          custom: (key: string, value: string) => void;
        };
      };
    };
  }
}

export function useZohoSalesIQ() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Initialize $zoho object
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    // Load script
    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src =
      "https://salesiq.zohopublic.in/widget?wc=siq003475df156de10623a22bc1dd5c45b5599b1e20ff13f45d6b084391abf9b779";
    script.defer = true;
    document.body.appendChild(script);

    // Time-based trigger (30s)
    const timeTimer = setTimeout(() => {
      window.$zoho?.salesiq?.tracking?.custom?.("trigger", "time-30s");
    }, 30000);

    // Scroll depth trigger (50%)
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50) {
        window.$zoho?.salesiq?.tracking?.custom?.("trigger", "scroll-50");
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

/** Pass lead data to Zoho SalesIQ, save to leads table, and notify Zoho Cliq */
export function pushLeadToZoho(data: {
  name?: string;
  email?: string;
  phone?: string;
  budgetRange?: string;
  projectType?: string;
  aiJourneyData?: Record<string, string>;
  source?: string;
}) {
  const siq = window.$zoho?.salesiq;

  if (siq) {
    if (data.name) siq.visitor?.name(data.name);
    if (data.email) siq.visitor?.email(data.email);
    if (data.phone) siq.visitor?.phone(data.phone);

    siq.visitor?.info({
      ...(data.budgetRange && { "Budget Range": data.budgetRange }),
      ...(data.projectType && { "Project Type": data.projectType }),
      ...(data.source && { Source: data.source }),
      Tag: "Website Lead – HiFi",
    });

    if (data.aiJourneyData) {
      Object.entries(data.aiJourneyData).forEach(([key, value]) => {
        siq.tracking?.custom?.(key, value);
      });
    }
  }

  // Fire-and-forget: persist to leads table + notify Zoho Cliq (Resi Sales)
  // Imported lazily to avoid circular imports
  import("@/integrations/supabase/client").then(({ supabase }) => {
    supabase.functions
      .invoke("notify-lead", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          project_type: data.projectType,
          budget_range: data.budgetRange,
          source: data.source ?? "Website",
          metadata: data.aiJourneyData ?? {},
        },
      })
      .catch((err) => console.error("notify-lead failed:", err));
  });
}
