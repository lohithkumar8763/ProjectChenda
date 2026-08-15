import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { performances } from "@/lib/content";
import heroImg from "@/assets/hero-chenda.jpg";
import aboutImg from "@/assets/performace-chenda.jpg";
import { site } from "@/lib/site";

const title = "Gallery — Chenda Melam Photos & Videos";
const description =
  "Photographs and videos from our Kerala Chenda Melam performances at weddings, temple festivals, processions and cultural stages.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `${title} | ${site.shortName}` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: heroImg, alt: "Night temple melam" },
  ...performances.map((p) => ({ src: p.image as string, alt: p.title })),
  { src: aboutImg, alt: "Chenda close-up" },
];

const videos = [
  { id: "dJfpNfJEzxU", label: "Temple Utsavam Highlights" },
  { id: "dJfpNfJEzxU", label: "Wedding Welcome Melam" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the melam"
          intro="Tap any photograph to view it full screen."
        />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, i) => (
            <Reveal key={`${img.alt}-${i}`} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden border border-border"
                aria-label={`Open ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-107"
                />
                <span className="absolute inset-0 bg-background/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-[0.68rem] tracking-[0.24em] uppercase text-gold-soft opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Videos" title="Watch the ensemble live" />
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {videos.map((v, i) => (
              <Reveal key={`${v.id}-${i}`} delay={i * 90} className="surface-card overflow-hidden">
                <div className="relative aspect-video bg-background">
                  {playing === `${v.id}-${i}` ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                      title={v.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                      allowFullScreen
                      className="size-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(`${v.id}-${i}`)}
                      className="group grid size-full place-items-center"
                      aria-label={`Play ${v.label}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover opacity-60"
                      />
                      <span className="relative grid size-16 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:scale-110">
                        <Play className="size-6 translate-x-0.5 fill-current" />
                      </span>
                    </button>
                  )}
                </div>
                <p className="p-6 font-display text-base text-gold-soft">{v.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={images} index={open} onClose={() => setOpen(null)} onNavigate={setOpen} />
    </div>
  );
}
