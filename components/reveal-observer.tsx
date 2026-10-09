"use client";

import { useEffect } from "react";

/** Fades in every [data-reveal] element as it scrolls into view. */
export function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -35px 0px" },
    );

    items.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${(i % 3) * 90}ms`);
      observer.observe(el);
    });
    document.documentElement.classList.add("motion-enabled");

    return () => observer.disconnect();
  }, []);

  return null;
}
