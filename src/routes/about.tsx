import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/team-chenda.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

const title = `About Us — ${site.name} Chenda Melam Troupe`;
const description =
  "Meet the artists behind our Kerala Chenda Melam ensemble: decades of temple and stage experience, gurukula training and a professional approach to every booking.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const stats = [
  { value: "25+", label: "Years of tradition" },
  { value: "1200+", label: "Performances" },
  { value: "60", label: "Artists at full strength" },
  { value: site.rating, label: "Client rating" },
];

function About() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Us"
          align="left"
          title="Keepers of a rhythm older than memory"
          intro={`${site.name} is a traditional percussion ensemble rooted in ${site.place}, Enmakaje. What began as a village temple troupe now performs across Kerala and the Karnataka border for weddings, poorams, processions and cultural stages.`}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Our artists learn the way the art has always been taught — by ear, by hand and by
              years of standing beside a master. Panchari, Pandi, Thayambaka and Panchavadyam are
              performed in strict thaalam, with the kombu, kuzhal and elathalam sections balanced
              exactly as the tradition demands.
            </p>
            <p>
              That devotion sits alongside a very modern professionalism. Every booking is confirmed
              in writing, the troupe arrives early in matched attire with its own transport and
              instruments, and a single coordinator stays with your event manager from arrival to
              the final beat.
            </p>
            <p>
              Whether it is a bride's welcome at a family mandapam or a sixty-artist ensemble at a
              temple utsavam, the standard does not change: disciplined, dignified and unmistakably
              Kerala.
            </p>
            <Link to="/performances" className="btn-ghost-gold mt-2">
              Explore performances
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-3 border border-gold/25" aria-hidden />
            <img
              src={aboutImg}
              alt="Close-up of a traditional Kerala chenda drum"
              loading="lazy"
              width={1200}
              height={1400}
              className="relative w-full object-cover shadow-[var(--shadow-deep)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-24 border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="bg-background px-8 py-14 text-center">
              <p className="font-display text-4xl text-gilded">{s.value}</p>
              <p className="mt-3 text-[0.68rem] tracking-[0.26em] uppercase text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Our Values"
          title="Art first, always"
          intro="Three commitments that shape how we play and how we work."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {[
            {
              t: "Cultural Fidelity",
              d: "We perform the ritual repertoire as it was handed to us — no shortcuts, no fusion unless you ask for it.",
            },
            {
              t: "Respect for the Occasion",
              d: "Temple protocol, family customs and programme timings are studied before we play a single beat.",
            },
            {
              t: "Craft & Care",
              d: "Instruments are hand-made, seasoned and tuned before every event by the artists who play them.",
            },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 90} className="surface-card p-8">
              <h3 className="font-display text-lg text-gold-soft">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
