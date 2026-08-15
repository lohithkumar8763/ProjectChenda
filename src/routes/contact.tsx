import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { bookingWhatsApp, site, telLink } from "@/lib/site";

const title = "Booking & Contact — Reserve Your Chenda Melam Date";
const description =
  "Send a booking enquiry for weddings, temple festivals, processions and cultural events. Call, WhatsApp or fill the form for a same-day reply.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `${title} | ${site.shortName}` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Booking"
          title="Reserve your date"
          intro="Tell us about your event and we'll confirm availability, artist count and package the same day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <BookingForm />

          <div className="space-y-5">
            <Reveal className="surface-card p-8">
              <h3 className="font-display text-lg text-gold-soft">Talk to us directly</h3>
              <div className="mt-6 flex flex-col gap-3">
                <a href={telLink} className="btn-gold">
                  <Phone className="size-4" aria-hidden />
                  {site.phoneDisplay}
                </a>
                <a
                  href={bookingWhatsApp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost-gold"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost-gold"
                >
                  <Instagram className="size-4" aria-hidden />
                  Instagram
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} className="surface-card p-8">
              <ul className="space-y-5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer noopener" className="hover:text-gold-soft">
                    {site.address}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  {site.hours}
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mt-24 border-t border-border">
        <iframe
          src={site.mapsEmbed}
          title={`Map to ${site.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full grayscale-[0.4]"
        />
      </section>
    </div>
  );
}
