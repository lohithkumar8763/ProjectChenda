import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { eventTypes } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  location: string;
  performers: string;
  message: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  location: "",
  performers: "",
  message: "",
};

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{7,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Enter a valid email address.";
  if (!v.eventType) e.eventType = "Choose an event type.";
  if (!v.date) e.date = "Select the event date.";
  if (v.location.trim().length < 2) e.location = "Where is the event?";
  return e;
}

const field =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-ring";

export function BookingForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    const text = [
      `Booking enquiry for ${site.name}`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Event: ${values.eventType}`,
      `Date: ${values.date}`,
      `Location: ${values.location}`,
      values.performers ? `Performers needed: ${values.performers}` : "",
      values.message ? `Message: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input className={field} value={values.name} onChange={set("name")} placeholder="Your name" />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input
            className={field}
            value={values.phone}
            onChange={set("phone")}
            inputMode="tel"
            placeholder="+91 98470 00000"
          />
        </Field>
        <Field label="Email (optional)" error={errors.email}>
          <input className={field} value={values.email} onChange={set("email")} placeholder="you@email.com" />
        </Field>
        <Field label="Event type" error={errors.eventType}>
          <select className={field} value={values.eventType} onChange={set("eventType")}>
            <option value="">Select an event</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Event date" error={errors.date}>
          <input type="date" className={field} value={values.date} onChange={set("date")} />
        </Field>
        <Field label="Location / venue" error={errors.location}>
          <input
            className={field}
            value={values.location}
            onChange={set("location")}
            placeholder="Town, district"
          />
        </Field>
        <Field label="Performers required (optional)">
          <input
            className={field}
            value={values.performers}
            onChange={set("performers")}
            inputMode="numeric"
            placeholder="e.g. 12"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message (optional)">
            <textarea
              rows={4}
              className={field}
              value={values.message}
              onChange={set("message")}
              placeholder="Timing, programme details, special requests…"
            />
          </Field>
        </div>
      </div>

      <button type="submit" className="btn-gold mt-8 w-full">
        <Send className="size-4" aria-hidden />
        Send booking enquiry
      </button>
      <p aria-live="polite" className="mt-4 text-center text-xs tracking-wide text-muted-foreground">
        {sent
          ? "Enquiry opened in WhatsApp — press send there and we'll reply shortly."
          : "We reply to every enquiry within a few hours."}
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.66rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
