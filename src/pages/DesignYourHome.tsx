import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Home, Maximize, Heart, Wallet, Target } from "lucide-react";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

type Step = "home-type" | "size" | "lifestyle" | "budget" | "priority" | "complete";

const homeTypes = [
  { value: "apartment", label: "Apartment", icon: "🏢" },
  { value: "villa", label: "Villa", icon: "🏡" },
  { value: "penthouse", label: "Penthouse", icon: "🌆" },
  { value: "farmhouse", label: "Farmhouse", icon: "🌾" },
];

const lifestyles = [
  { value: "cinema-lover", label: "Cinema Lover", description: "Movies and immersive entertainment" },
  { value: "music-first", label: "Music First", description: "Audiophile listening and whole-home audio" },
  { value: "entertainer", label: "The Entertainer", description: "Hosting, parties, and social spaces" },
  { value: "minimalist", label: "Minimalist", description: "Clean, invisible, essential" },
  { value: "tech-forward", label: "Tech Forward", description: "Full automation, cutting-edge systems" },
];

const budgetRanges = [
  { value: "10-25L", label: "₹10–25 Lakhs", tier: "Essential" },
  { value: "25-50L", label: "₹25–50 Lakhs", tier: "Premium" },
  { value: "50L-1Cr", label: "₹50 Lakhs – 1 Crore", tier: "Luxury" },
  { value: "1Cr+", label: "₹1 Crore+", tier: "Bespoke" },
];

const priorities = [
  { value: "cinema", label: "Private Cinema" },
  { value: "music", label: "Music & Audio" },
  { value: "social", label: "Social Spaces" },
  { value: "automation", label: "Full Automation" },
  { value: "minimal", label: "Minimal & Invisible" },
];

export default function DesignYourHome() {
  const [step, setStep] = useState<Step>("home-type");
  const [answers, setAnswers] = useState({
    homeType: "",
    size: "",
    lifestyle: "",
    budget: "",
    priority: "",
  });

  const stepConfig = {
    "home-type": { icon: Home, title: "What type of home are you designing?", subtitle: "This helps us understand your space" },
    size: { icon: Maximize, title: "How large is your home?", subtitle: "Approximate area in square feet" },
    lifestyle: { icon: Heart, title: "How would you describe your lifestyle?", subtitle: "Choose what resonates most" },
    budget: { icon: Wallet, title: "What's your investment range?", subtitle: "This helps us recommend the right tier" },
    priority: { icon: Target, title: "What matters most to you?", subtitle: "Your primary focus area" },
    complete: { icon: Sparkles, title: "Your home, imagined.", subtitle: "" },
  };

  const current = stepConfig[step];

  const nextStep = (key: string, value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    const steps: Step[] = ["home-type", "size", "lifestyle", "budget", "priority", "complete"];
    const currentIndex = steps.indexOf(step);
    const nextStepValue = steps[currentIndex + 1];
    setStep(nextStepValue);

    if (nextStepValue === "complete") {
      pushLeadToZoho({
        source: "AI Journey",
        projectType: updated.homeType,
        budgetRange: updated.budget,
        aiJourneyData: {
          homeType: updated.homeType,
          size: updated.size,
          lifestyle: updated.lifestyle,
          budget: updated.budget,
          priority: updated.priority,
        },
      });
      window.$zoho?.salesiq?.tracking?.custom?.("trigger", "ai-journey-complete");
    }
  };

  return (
    <Layout>
      <SEO title="Design Your Home" description="Tell us about your home and lifestyle — Qubix will craft a personalised luxury technology recommendation." path="/design" />
      <section className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="flex justify-center gap-2 mb-16">
            {["home-type", "size", "lifestyle", "budget", "priority"].map((s, i) => (
              <div
                key={s}
                className={`h-1 w-12 rounded-full transition-colors ${
                  ["home-type", "size", "lifestyle", "budget", "priority"].indexOf(step) >= i || step === "complete"
                    ? "bg-primary"
                    : "bg-border"
                }`}
              />
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <current.icon className="w-10 h-10 text-primary mx-auto mb-6" />
            <h1 className="font-display text-3xl md:text-4xl font-medium mb-3">
              {current.title}
            </h1>
            {current.subtitle && (
              <p className="font-body text-muted-foreground mb-12">{current.subtitle}</p>
            )}

            {/* Step: Home Type */}
            {step === "home-type" && (
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {homeTypes.map((ht) => (
                  <button
                    key={ht.value}
                    onClick={() => nextStep("homeType", ht.value)}
                    className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-all text-center group"
                  >
                    <span className="text-3xl mb-3 block">{ht.icon}</span>
                    <span className="font-body text-sm group-hover:text-primary transition-colors">{ht.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step: Size */}
            {step === "size" && (
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {["Under 2,000", "2,000–4,000", "4,000–8,000", "8,000+"].map((size) => (
                  <button
                    key={size}
                    onClick={() => nextStep("size", size)}
                    className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-all group"
                  >
                    <span className="font-display text-lg group-hover:text-primary transition-colors">{size}</span>
                    <span className="font-body text-xs text-muted-foreground block mt-1">sq ft</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step: Lifestyle */}
            {step === "lifestyle" && (
              <div className="space-y-3 max-w-md mx-auto">
                {lifestyles.map((ls) => (
                  <button
                    key={ls.value}
                    onClick={() => nextStep("lifestyle", ls.value)}
                    className="w-full p-5 rounded-sm border border-border bg-card hover:border-primary/30 transition-all text-left group"
                  >
                    <span className="font-display text-lg group-hover:text-primary transition-colors block">
                      {ls.label}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">{ls.description}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step: Budget */}
            {step === "budget" && (
              <div className="space-y-3 max-w-md mx-auto">
                {budgetRanges.map((br) => (
                  <button
                    key={br.value}
                    onClick={() => nextStep("budget", br.value)}
                    className="w-full p-5 rounded-sm border border-border bg-card hover:border-primary/30 transition-all text-left group flex items-center justify-between"
                  >
                    <span className="font-display text-lg group-hover:text-primary transition-colors">
                      {br.label}
                    </span>
                    <span className="font-body text-xs text-muted-foreground px-2 py-1 border border-border rounded-sm">
                      {br.tier}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Step: Priority */}
            {step === "priority" && (
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {priorities.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => nextStep("priority", p.value)}
                    className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-all group"
                  >
                    <span className="font-body text-sm group-hover:text-primary transition-colors">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Complete */}
            {step === "complete" && (
              <div className="max-w-lg mx-auto">
                <div className="p-8 rounded-sm border border-primary/20 bg-card glow-gold mb-8">
                  <p className="font-body text-sm text-primary mb-4 tracking-wider uppercase">Your Vision</p>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-body text-sm text-muted-foreground">Home</span>
                      <span className="font-body text-sm text-foreground capitalize">{answers.homeType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-body text-sm text-muted-foreground">Size</span>
                      <span className="font-body text-sm text-foreground">{answers.size} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-body text-sm text-muted-foreground">Lifestyle</span>
                      <span className="font-body text-sm text-foreground capitalize">{answers.lifestyle.replace("-", " ")}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-body text-sm text-muted-foreground">Investment</span>
                      <span className="font-body text-sm text-foreground">{answers.budget}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-body text-sm text-muted-foreground">Priority</span>
                      <span className="font-body text-sm text-foreground capitalize">{answers.priority}</span>
                    </div>
                  </div>
                </div>

                <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                  Based on your preferences, our team will prepare a personalized 
                  technology blueprint for your home. Let's connect.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={`/contact?homeType=${encodeURIComponent(answers.homeType)}&size=${encodeURIComponent(answers.size)}&lifestyle=${encodeURIComponent(answers.lifestyle)}&budget=${encodeURIComponent(answers.budget)}&priority=${encodeURIComponent(answers.priority)}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/experience-center"
                    className="inline-flex items-center justify-center px-8 py-4 font-body text-sm tracking-wider text-foreground border border-border rounded-sm hover:border-primary/50 transition-colors"
                  >
                    Visit Experience Center
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
