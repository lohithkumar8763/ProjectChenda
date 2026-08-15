import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const move = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, move, onClose]);

  if (index === null) return null;
  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
      className="fixed inset-0 z-100 grid place-items-center bg-background/95 p-4 backdrop-blur-md"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-gold/40 text-gold"
      >
        <X className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          move(-1);
        }}
        className="absolute left-3 grid size-11 place-items-center rounded-full border border-gold/40 text-gold sm:left-8"
      >
        <ChevronLeft className="size-5" />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-5xl">
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[78vh] w-full rounded-sm object-contain shadow-[var(--shadow-deep)]"
        />
        <figcaption className="mt-4 text-center text-xs tracking-[0.24em] uppercase text-muted-foreground">
          {current.alt} · {index + 1} / {images.length}
        </figcaption>
      </figure>
      <button
        type="button"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          move(1);
        }}
        className="absolute right-3 grid size-11 place-items-center rounded-full border border-gold/40 text-gold sm:right-8"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
