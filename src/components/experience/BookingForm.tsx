import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CalendarDays, Clock } from "lucide-react";
import { format, addDays, isSunday, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";
import { zones } from "@/data/experienceZones";

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM",
];

// Derive interests from zone names
const interests = zones.map((z) => z.name);

const propertyTypes = [
  "Apartment / Penthouse",
  "Villa / Bungalow / Independent Home",
  "Farmhouse / Weekend Home",
  "Commercial Space",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", propertyType: "",
    interests: [] as string[],
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleInterest = (i: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(i)
        ? prev.interests.filter((x) => x !== i)
        : [...prev.interests, i],
    }));
  };

  const disabledDays = (date: Date) => {
    return isSunday(date) || date < startOfDay(new Date());
  };

  const minDate = new Date();
  const maxDate = addDays(new Date(), 60);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setError("Please select a date and time slot.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const { error: dbError } = await supabase.from("bookings").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        property_type: form.propertyType || null,
        interests: form.interests.length > 0 ? form.interests : null,
        booking_date: format(selectedDate, "yyyy-MM-dd"),
        time_slot: selectedSlot,
      });

      if (dbError) throw dbError;

      pushLeadToZoho({
        name: form.name,
        email: form.email,
        phone: form.phone,
        projectType: form.propertyType,
        aiJourneyData: {
          propertyType: form.propertyType,
          interests: form.interests.join(", "),
          bookingDate: format(selectedDate, "PPP"),
          timeSlot: selectedSlot,
        },
        source: "Experience Center Booking",
      });

      setSubmitted(true);
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 rounded-sm bg-card border border-border"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6"
        >
          <Check className="w-8 h-8 text-accent-foreground" />
        </motion.div>
        <h3 className="font-display text-2xl font-semibold mb-2">Session Requested</h3>
        <p className="font-body text-sm text-muted-foreground mb-1">
          {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedSlot}
        </p>
        <p className="font-body text-sm text-muted-foreground">
          A Qubix consultant will confirm your session within 24 hours{form.name ? ` — thank you, ${form.name}` : ""}.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-sm bg-card border border-border"
    >
      {/* Date & Time */}
      <div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Select Date & Time
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 font-body text-sm rounded-sm border border-border bg-background text-left transition-colors hover:border-primary/40",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                {selectedDate ? format(selectedDate, "EEE, MMM d, yyyy") : "Choose a date"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disabledDays}
                fromDate={minDate}
                toDate={maxDate}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>

          <div className="relative">
            <div className="flex items-center gap-3 px-4 py-3 font-body text-sm rounded-sm border border-border bg-background">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="bg-transparent w-full focus:outline-none appearance-none text-foreground"
              >
                <option value="" disabled>Choose a time</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Your Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="px-4 py-3 font-body text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="px-4 py-3 font-body text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone / WhatsApp"
            className="px-4 py-3 font-body text-sm rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <select
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="px-4 py-3 font-body text-sm rounded-sm border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 appearance-none"
          >
            <option value="" disabled>Property type</option>
            {propertyTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Interest chips */}
      <div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
          I'd like to experience
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => {
            const active = form.interests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={cn(
                  "px-4 py-2 font-body text-xs rounded-full border transition-all",
                  active
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {interest}
              </button>
            );
          })}
        </div>
      </div>

      {error && (
        <p className="font-body text-sm text-destructive">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Request a Private Session"}
      </button>

      <p className="font-body text-xs text-muted-foreground/70 text-center">
        Sessions are confirmed within 24 hours. Select experiences — including the Constellation Room — are available by invitation.
      </p>
    </motion.form>
  );
}
