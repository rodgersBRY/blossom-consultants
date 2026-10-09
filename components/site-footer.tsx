import { cacheLife } from "next/cache";
import { developer } from "@/lib/content";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await currentYear();

  return (
    <footer className="border-t-4 border-magenta-600 bg-plum-950 py-[34px] text-[13px] text-[#f3e6ef]">
      <div className="container-page flex flex-wrap justify-between gap-6">
        <span>© {year} Blossom Psychotherapy Services. All rights reserved.</span>
        <span>Supporting mental wellness and professional growth.</span>
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
