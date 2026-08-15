import { createFileRoute, Link } from "@tanstack/react-router";
import { PerformanceCard } from "@/components/PerformanceCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { performances } from "@/lib/content";
import { bookingWhatsApp, site } from "@/lib/site";
import { MessageCircle } from "lucide-react";

const title = `Performances — Wedding, Temple & Festival Chenda Melam`;
const description =
  "Wedding melam, temple utsavam, pooram ensembles, processions, cultural stage sets and inauguration welcomes performed by our Kerala percussion troupe.";

export const Route = createFileRoute("/performances")({
  head: () => ({
    meta: [
      { title: `${title} | ${site.shortName}` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Performances,
});

const packages = [
  { name: "Welcome Set", size: "4–8 artists", time: "30–45 minutes" },
  { name: "Classic Melam", size: "10–20 artists", time: "60–90 minutes" },
  { name: "Grand Ensemble", size: "25–60 artists", time: "2–3 hours" },
];

function Performances() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Performances"
          title="Six formats, one uncompromising standard"
          intro="Each format is arranged around the ritual, the venue and the crowd it is written for."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {performances.map((p, i) => (
            <PerformanceCard key={p.slug} {...p} delay={i * 70} />
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Choose a troupe size"
            intro="Indicative configurations — every package is tailored after we hear your programme."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="surface-card p-9 text-center">
                <h3 className="font-display text-xl text-gilded">{p.name}</h3>
                <p className="mt-5 text-sm text-muted-foreground">{p.size}</p>
                <div className="rule-gold my-5" />
                <p className="text-sm text-muted-foreground">{p.time}</p>
                <Link to="/contact" className="btn-ghost-gold mt-8 w-full">
                  Get a quote
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <a href={bookingWhatsApp} target="_blank" rel="noreferrer noopener" className="btn-gold">
              <MessageCircle className="size-4" aria-hidden />
              Check date availability
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
