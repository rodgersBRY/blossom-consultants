import { SiFacebook, SiInstagram } from "react-icons/si";
import { socials } from "@/lib/content";

const icons = {
  instagram: SiInstagram,
  facebook: SiFacebook,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {socials.map(({ network, label, href }) => {
        const Icon = icons[network];
        return (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Blossom on ${label}`}
              className="flex size-10 items-center justify-center rounded-full border border-current transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Icon aria-hidden size={17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
