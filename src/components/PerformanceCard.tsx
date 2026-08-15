import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PerformanceCard({
  title,
  image,
  blurb,
  points,
  delay = 0,
}: {
  title: string;
  image: string;
  blurb: string;
  points: readonly string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="group surface-card overflow-hidden">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
        />
        <div className="veil-night absolute inset-0" />
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl text-gold-soft">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
        <ul className="mt-5 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-xs tracking-wide text-foreground/80">
              <span className="size-1.5 rotate-45 bg-gold" />
              {p}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-gold transition-colors hover:text-gold-soft"
        >
          Enquire
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </Reveal>
  );
}
