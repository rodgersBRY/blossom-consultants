import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { RevealObserver } from "@/components/reveal-observer";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Blossom | Mental Wellness & Professional Growth",
  description:
    "Blossom Psychotherapy Services specialises in child and family therapy, and offers psychotherapy, psychological assessments, corporate training, coaching and research in Nairobi and virtually.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
