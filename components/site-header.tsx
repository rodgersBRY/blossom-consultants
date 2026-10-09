"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-19.5 flex-col items-stretch gap-6 bg-white p-6 text-sm md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="hover:text-magenta-600"
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
