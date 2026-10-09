"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

// Active link: an edge bar in the mobile panel, an underline on desktop.
const navLinkClass = [
  "relative transition-colors hover:text-magenta-300",
  "after:absolute after:inset-y-0 after:-left-6 after:w-1 after:scale-y-0 after:rounded-r-full after:bg-magenta-300 after:transition-transform after:duration-300",
  "aria-[current]:font-semibold aria-[current]:text-white aria-[current]:after:scale-y-100",
  "md:text-ink md:hover:text-magenta-600",
  "md:after:inset-x-0 md:after:top-auto md:after:-bottom-1.5 md:after:h-0.5 md:after:w-auto md:after:origin-left md:after:scale-x-0 md:after:scale-y-100 md:after:rounded-full md:after:bg-magenta-600",
  "md:aria-[current]:text-magenta-700 md:aria-[current]:after:scale-x-100",
].join(" ");

// Highlights the nav link whose section crosses the middle of the viewport.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-20 border-b border-[#f1e1eb] bg-[#fffafd] shadow-[0_4px_22px_#42133608]">
      <nav className="container-page relative flex min-h-19.5 items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={close}>
          <Image
            src="/blossom-logo.png"
            alt="Blossom logo"
            width={420}
            height={280}
            preload
            className="h-12 w-18.75 object-contain sm:h-14 sm:w-23.5"
          />
          <span className="max-w-24 text-[9px] leading-normal font-bold tracking-[1.3px] text-[#82217f] uppercase sm:max-w-29 sm:text-[10px]">
            Psychotherapy Services
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-blush-300 bg-white px-3 py-2 text-sm md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          Menu
        </button>

        <div
          id="site-nav"
          className={`${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"} absolute inset-x-0 top-19.5 flex flex-col items-stretch gap-6 bg-plum-950 p-6 text-sm text-blush-100 shadow-[0_14px_24px_#42133630] transition-[opacity,translate,visibility] duration-300 ease-out md:visible md:static md:translate-y-0 md:flex-row md:items-center md:bg-transparent md:p-0 md:opacity-100 md:shadow-none md:transition-none`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={active === link.href ? "location" : undefined}
              className={navLinkClass}
            >
              {link.label}
            </a>
          ))}
          <a className="btn" href="#contact" onClick={close}>
            Get in Touch <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </nav>
    </header>
  );
}
