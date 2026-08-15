import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site, telLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/performances", label: "Performances" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Booking" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500 data-[scrolled=true]:bg-background/88 data-[scrolled=true]:shadow-[0_1px_0_0_var(--border)] data-[scrolled=true]:backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-full border border-gold/45 font-display text-sm text-gold transition-colors group-hover:bg-gold/10">
            മ
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-[0.18em] uppercase text-gilded">
              {site.shortName}
            </span>
            <span className="block text-[0.62rem] tracking-[0.34em] uppercase text-muted-foreground">
              {site.place} · Chenda Melam
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="relative text-[0.72rem] font-medium tracking-[0.22em] uppercase text-muted-foreground transition-colors hover:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={telLink} className="btn-gold hidden !px-5 !py-3 sm:inline-flex">
            <Phone className="size-4" aria-hidden />
            Call Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-md border border-border text-gold-soft lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        data-open={open}
        className="grid grid-rows-[0fr] overflow-hidden border-border bg-background/97 backdrop-blur-xl transition-[grid-template-rows] duration-500 data-[open=true]:grid-rows-[1fr] data-[open=true]:border-t lg:hidden"
      >
        <div className="min-h-0">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="border-b border-border/60 py-4 text-xs font-medium tracking-[0.24em] uppercase text-muted-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a href={telLink} className="btn-gold mt-5">
              <Phone className="size-4" aria-hidden />
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
