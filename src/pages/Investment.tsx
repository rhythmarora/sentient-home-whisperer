import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import BudgetEngine from "@/components/home/BudgetEngine";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Investment() {
  return (
    <Layout>
      <SEO
        title="Investment — Qubix"
        description="How Qubix projects typically scale — from essential systems to bespoke commissions. Indicative ranges only; every home is shaped individually."
        path="/investment"
      />
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6"
          >
            Investment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            How projects <span className="italic">typically scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-base text-silver leading-relaxed"
          >
            We don't sell from a catalogue. The ranges below are indicative — meant to help
            you orient, not to price a home. Every commission is shaped around the residence,
            the family, and the way you intend to live in it.
          </motion.p>
        </div>
      </section>

      <BudgetEngine />

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-xl text-platinum/80 mb-8">
            The most interesting projects rarely begin with a number.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-body text-sm tracking-wider bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity"
          >
            Begin a private conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
