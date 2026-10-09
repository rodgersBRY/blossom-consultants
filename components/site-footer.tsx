import { cacheLife } from "next/cache";
import { developer } from "@/lib/content";
import { SocialLinks } from "./social-links";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await currentYear();

  return (
    <footer className="border-t-4 border-magenta-600 bg-plum-950 py-8.5 text-[13px] text-[#f3e6ef]">
      <div className="container-page flex flex-wrap items-center justify-between gap-6">
        <div>
          <p>© {year} Blossom Psychotherapy Services. All rights reserved.</p>
          <p>Supporting mental wellness and professional growth.</p>
        </div>
        <SocialLinks className="text-[#f3e6ef]" />
      </div>
      <div className="container-page mt-5 border-t border-white/10 pt-4 text-xs text-[#cdb3c6]">
        Developed and maintained by{" "}
        <a
          href={developer.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white underline-offset-4 hover:text-magenta-300 hover:underline"
        >
          {developer.name}
        </a>
      </div>
    </footer>
  );
}
