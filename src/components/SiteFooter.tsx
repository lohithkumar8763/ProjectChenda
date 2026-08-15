import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import { bookingWhatsApp, site, telLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="font-display text-xl tracking-[0.12em] uppercase text-gilded">
            {site.name}
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A traditional Kerala percussion ensemble from {site.place}, performing chenda melam,
            panchavadyam and thayambaka across Kerala and Karnataka border regions.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={bookingWhatsApp}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href={telLink}
              aria-label="Call"
              className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h4 className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-gold">
            Navigate
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/performances", label: "Performances" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Booking Enquiry" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-gold">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={site.mapsUrl} target="_blank" rel="noreferrer noopener" className="hover:text-gold-soft">
                {site.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={telLink} className="hover:text-gold-soft">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-5 py-6 text-center text-xs tracking-[0.16em] uppercase text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
