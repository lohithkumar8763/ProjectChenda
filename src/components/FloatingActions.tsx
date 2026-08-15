import { MessageCircle, Phone } from "lucide-react";
import { bookingWhatsApp, telLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={telLink}
        aria-label="Call us"
        className="grid size-12 place-items-center rounded-full border border-gold/45 bg-surface-raised/90 text-gold shadow-[var(--shadow-deep)] backdrop-blur transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={bookingWhatsApp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Book on WhatsApp"
        className="animate-pulse-ring grid size-14 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
