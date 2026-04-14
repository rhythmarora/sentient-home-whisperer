import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, MessageCircle, Phone, Mail, Video, Send } from "lucide-react";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

type Step = { id: string; botMessage: string; options?: string[]; input?: string; special?: string };

const conversationFlow: Step[] = [
  { id: "property", botMessage: "What kind of property are we designing for?", options: ["Apartment", "Villa / Independent Home", "Penthouse", "Farmhouse / Weekend Home"] },
  { id: "rooms", botMessage: "How many key rooms would you like to enhance?", options: ["2–3 rooms", "4–6 rooms", "Entire home"] },
  { id: "lifestyle", botMessage: "What defines your lifestyle at home?", options: ["Cinema & music", "Hosting & entertaining", "Wellness & relaxation", "All of the above"] },
  { id: "killer", botMessage: "Do you want your home to just look good… or actually respond to you — lights, sound, climate, all in one touch?", special: "killer" },
  { id: "recommendation", botMessage: "", special: "recommendation" },
  { id: "capture-prompt", botMessage: "This recommendation was crafted just for you.", special: "capture" },
  { id: "name", botMessage: "What should I call you?", input: "Your first name" },
  { id: "email", botMessage: "", input: "Your email address" },
  { id: "phone", botMessage: "", input: "Your WhatsApp number" },
  { id: "privacy", botMessage: "", special: "privacy" },
  { id: "connect-pref", botMessage: "How would you like our design consultant to connect?", options: ["WhatsApp", "Email", "Zoom / Teams", "Visit the Experience Center"] },
  { id: "thankyou", botMessage: "", special: "thankyou" },
];

export default function AIConsultant() {
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Welcome to Qubix. Let's design something extraordinary — starting with how you want your home to feel." },
  ]);
  const [typing, setTyping] = useState(false);
  const [userData, setUserData] = useState<Record<string, string>>({});
  const [inputVal, setInputVal] = useState("");
  const [responded, setResponded] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentStep = conversationFlow[stepIndex];

  const advanceStep = (userAnswer: string, nextStepOffset = 1) => {
    setMessages((prev) => [...prev, { from: "user", text: userAnswer }]);
    setResponded(false);
    setTyping(true);

    const nextIndex = stepIndex + nextStepOffset;
    const nextStep = conversationFlow[nextIndex];

    setTimeout(() => {
      setTyping(false);
      if (nextStep) {
        const botMsg = nextStep.id === "email"
          ? `Where should I send your recommendation, ${userData.name || userAnswer}?`
          : nextStep.id === "phone"
          ? "In case our design team has a quick question, what's the best WhatsApp number?"
          : nextStep.botMessage;
        if (botMsg) {
          setMessages((prev) => [...prev, { from: "bot", text: botMsg }]);
        }
        setStepIndex(nextIndex);
      }
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 800);
  };

  const handleOption = (opt: string) => {
    if (responded) return;
    setResponded(true);
    setUserData((prev) => ({ ...prev, [currentStep.id]: opt }));
    advanceStep(opt);
  };

  const handleInput = () => {
    if (!inputVal.trim()) return;
    const val = inputVal.trim();
    setUserData((prev) => ({ ...prev, [currentStep.id]: val }));
    setInputVal("");
    advanceStep(val);
  };

  const handleKiller = (respond: boolean) => {
    setResponded(true);
    setUserData((prev) => ({ ...prev, responds: respond ? "yes" : "no" }));
    advanceStep(respond ? "I want it to respond to me." : "Just looking good is fine.");
  };

  const handleCapture = (save: boolean) => {
    if (!save) {
      setSkipped(true);
      advanceStep("I'll keep exploring", 6); // skip to thankyou
      return;
    }
    advanceStep("Save & send me the details");
  };

  const handleThankYou = () => {
    pushLeadToZoho({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      budgetRange: userData.responds === "yes" ? "₹50L+" : "₹15L+",
      projectType: userData.property,
      aiJourneyData: userData,
      source: "AI Consultant",
    });
  };

  // Auto-trigger thank you data push
  if (currentStep?.id === "thankyou" && !skipped && userData.email) {
    handleThankYou();
  }

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Design Your <span className="italic text-gradient-vibrant">Experience</span>
          </h2>
        </motion.div>

        {/* iPad mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-graphite bg-carbon shadow-2xl overflow-hidden"
        >
          {/* iPad top bar */}
          <div className="h-8 bg-graphite flex items-center justify-center gap-1">
            <div className="w-16 h-1 bg-steel rounded-full" />
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] px-4 py-3 rounded-lg font-body text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-[#FFFFFF] text-[#0A0A0A]"
                    : "bg-carbon border-l-2 border-l-cinema text-platinum/90"
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-1 px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-cinema" : i === 1 ? "bg-music" : "bg-relax"}`}
                  />
                ))}
              </div>
            )}

            {/* Interactive elements */}
            {!typing && currentStep && (
              <AnimatePresence>
                {/* Options */}
                {currentStep.options && !responded && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-2">
                    {currentStep.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOption(opt)}
                        className="px-4 py-2 font-body text-sm rounded-full border border-graphite bg-carbon text-platinum/80 hover:border-cinema/50 hover:text-foreground transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Killer question */}
                {currentStep.special === "killer" && !responded && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-2 pt-2">
                    <button onClick={() => handleKiller(false)} className="px-4 py-3 font-body text-sm rounded-lg border border-graphite bg-carbon text-silver hover:text-foreground transition-all text-left">
                      Just looking good is enough
                    </button>
                    <button onClick={() => handleKiller(true)} className="px-4 py-3 font-body text-sm rounded-lg bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F0F0F0] transition-all text-left">
                      I want my home to respond to me
                    </button>
                  </motion.div>
                )}

                {/* Recommendation */}
                {currentStep.special === "recommendation" && !responded && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-5 rounded-lg bg-carbon border border-graphite">
                    <p className="font-display text-lg font-semibold text-gradient-vibrant mb-2">
                      {userData.responds === "yes" ? "Signature Experience" : "Premium Experience"}
                    </p>
                    <p className="font-body text-sm text-silver mb-2">
                      Investment range: {userData.responds === "yes" ? "₹2Cr – ₹5Cr+" : "₹50L – ₹2Cr"}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mb-1">
                      {userData.responds === "yes"
                        ? "Full Crestron automation, PMC reference cinema, Constellation acoustics, Lutron circadian lighting."
                        : "Dedicated Dolby Atmos cinema, multi-room audio, Crestron control, and smart lighting."}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      Based on: {userData.property}, {userData.rooms}, {userData.lifestyle?.toLowerCase()}
                    </p>
                    <button onClick={() => { setResponded(true); advanceStep("Show me more"); }} className="mt-4 px-4 py-2 font-body text-xs bg-[#FFFFFF] text-[#0A0A0A] rounded-full hover:bg-[#F0F0F0] transition-colors">
                      Continue →
                    </button>
                  </motion.div>
                )}

                {/* Capture prompt */}
                {currentStep.special === "capture" && !responded && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-2 pt-2">
                    <button onClick={() => handleCapture(true)} className="px-4 py-3 font-body text-sm rounded-lg bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F0F0F0] transition-all">
                      Save & send me the details
                    </button>
                    <button onClick={() => handleCapture(false)} className="px-4 py-3 font-body text-sm rounded-lg border border-graphite bg-carbon text-silver hover:text-foreground transition-all">
                      I'll keep exploring
                    </button>
                  </motion.div>
                )}

                {/* Text input */}
                {currentStep.input && !responded && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 pt-2">
                    <input
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleInput()}
                      placeholder={currentStep.input}
                      className="flex-1 px-4 py-2 font-body text-sm rounded-lg border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
                    />
                    <button onClick={handleInput} className="p-2 rounded-lg bg-[#FFFFFF] text-[#0A0A0A]">
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* Privacy card */}
                {currentStep.special === "privacy" && !responded && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-5 rounded-lg bg-carbon border border-relax/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-4 h-4 text-relax" />
                      <span className="font-body text-xs font-semibold text-relax uppercase tracking-wider">Your privacy</span>
                    </div>
                    <p className="font-body text-sm text-silver leading-relaxed">
                      We never cold-call. A Qubix design consultant will message you first — personally, over WhatsApp. You can also visit our 12-zone Experience Center to see everything in person before deciding.
                    </p>
                    <button onClick={() => { setResponded(true); advanceStep("I appreciate that"); }} className="mt-4 px-4 py-2 font-body text-xs bg-relax/20 text-relax rounded-full border border-relax/30">
                      Continue →
                    </button>
                  </motion.div>
                )}

                {/* Thank you */}
                {currentStep.special === "thankyou" && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-lg bg-carbon border border-graphite text-center">
                    <div className="w-12 h-12 rounded-full bg-relax/20 flex items-center justify-center mx-auto mb-4">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                        ✓
                      </motion.div>
                    </div>
                    <p className="font-display text-xl font-semibold mb-2">
                      Thank you{userData.name ? `, ${userData.name}` : ""}.
                    </p>
                    <p className="font-body text-sm text-silver mb-4">Your personalized recommendation is on its way. A Qubix consultant will connect within 24 hours.</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <a href="/experience-center" className="inline-block px-6 py-2 font-body text-sm bg-[#FFFFFF] text-[#0A0A0A] rounded-full hover:bg-[#F0F0F0] transition-colors">
                        Explore the Experience Center
                      </a>
                      <a href="/contact" className="inline-block px-6 py-2 font-body text-sm border border-graphite text-silver rounded-full hover:text-foreground transition-colors">
                        Book a Consultation
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>

          {/* iPad bottom bar */}
          <div className="h-4 bg-graphite" />
        </motion.div>
      </div>
    </section>
  );
}
