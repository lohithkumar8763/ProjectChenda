import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Quote, Star } from "lucide-react";
import heroImg from "@/assets/hero-chenda.jpg";
import { PerformanceCard } from "@/components/PerformanceCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { performances, testimonials } from "@/lib/content";
import { bookingWhatsApp, site } from "@/lib/site";

const title = `${site.name} — Chenda Melam Team in ${site.place}, Kerala`;
const description =
  "Book an experienced Kerala Chenda Melam troupe for weddings, temple festivals, processions, inaugurations and cultural programmes. Call or WhatsApp for instant booking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const strengths = [
  {
    title: "Experienced Performers",
    body: "Artists trained under traditional gurukula discipline, with decades of stage and temple experience between them.",
  },
  {
    title: "Authentic Kerala Tradition",
    body: "Panchari, Pandi, Thayambaka and Panchavadyam are performed in strict thaalam, never diluted for show.",
  },
  {
    title: "Professional Team",
    body: "Uniform attire, punctual arrival, own transport and clear coordination with your event manager.",
  },
  {
    title: "Energetic Performances",
    body: "Builds that lift a crowd — carefully paced from the first beat to the roaring climax.",
  },
  {
    title: "Custom Packages",
    body: "From a four-artist welcome set to a sixty-artist pooram ensemble, priced to your programme.",
  },
  {
    title: "Reliable Booking",
    body: "Confirmed dates, written details over WhatsApp and a single point of contact until showtime.",
  },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Chenda Melam artists performing at a Kerala temple festival at night"
          width={1920}
          height={1280}
          className="animate-slow-zoom absolute inset-0 size-full object-cover object-center"
        />
        <div className="veil-night absolute inset-0" />
        <div className="absolute inset-0 bg-background/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow animate-rise">
              <span className="inline-block h-px w-8 bg-gold" />
              {site.place}, Kerala · Est. traditional ensemble
            </p>
            <h1
              className="animate-rise mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              <span className="text-gilded">{site.name}</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-foreground/85"
              style={{ animationDelay: "240ms" }}
            >
              {site.tagline}
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <a href={bookingWhatsApp} target="_blank" rel="noreferrer noopener" className="btn-gold">
                <MessageCircle className="size-4" aria-hidden />
                Book Now
              </a>
              <Link to="/gallery" className="btn-ghost-gold">
                View Performances
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div
              className="animate-rise mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs tracking-[0.2em] uppercase text-muted-foreground"
              style={{ animationDelay: "480ms" }}
            >
              <span className="flex items-center gap-2 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
                {site.rating} rating
              </span>
              <span>Available {site.hours.toLowerCase()}</span>
              <span>Kerala & Karnataka border</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Our Repertoire"
          title="Melam for every occasion"
          intro="Six signature formats, each shaped to the rhythm and ritual of the event it serves."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {performances.map((p, i) => (
            <PerformanceCard key={p.slug} {...p} delay={i * 70} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Tradition delivered with professional discipline"
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="group bg-background p-8 transition-colors hover:bg-surface-raised"
              >
                <span className="font-display text-sm text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg text-gold-soft">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our patrons say"
          intro={`Rated ${site.rating} by families, temple committees and event organisers.`}
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="surface-card flex flex-col p-8">
              <Quote className="size-7 text-gold/60" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-display text-sm text-gold-soft">{t.name}</p>
                <p className="mt-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                  {t.event}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow justify-center">Ready when you are</span>
            <h2 className="mt-6 text-3xl font-semibold text-balance sm:text-5xl">
              Reserve your date with{" "}
              <span className="text-gilded">{site.shortName}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Share your event date and venue — we'll confirm availability, artist count and package
              on the same day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Booking Enquiry
              </Link>
              <a href={bookingWhatsApp} target="_blank" rel="noreferrer noopener" className="btn-ghost-gold">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
