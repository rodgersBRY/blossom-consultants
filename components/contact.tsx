import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/content";
import { EnquiryForm } from "./enquiry-form";
import { SocialLinks } from "./social-links";

const link = "hover:text-magenta-500";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page grid gap-8.75 md:grid-cols-2 md:gap-15">
        <div>
          <div className="eyebrow" data-reveal>
            Let&apos;s connect
          </div>
          <h2 className="heading-2" data-reveal>
            Take the next step with Blossom.
          </h2>
          <p className="mb-6">
            Whether you&apos;re reaching out for yourself, your family, or your
            organization, we&apos;d love to hear from you.
          </p>

          <dl className="grid gap-4">
            <Detail icon={MapPin} label="Visit us">
              {contact.address}
            </Detail>
            <Detail icon={Phone} label="Call">
              {contact.phones.map((phone, i) => (
                <span key={phone.href}>
                  {i > 0 && " / "}
                  <a href={phone.href} className={link}>
                    {phone.label}
                  </a>
                </span>
              ))}
            </Detail>
            {contact.teletherapy && (
              <Detail icon={Phone} label="Teletherapy">
                <a href={contact.teletherapy.href} className={link}>
                  {contact.teletherapy.label}
                </a>
              </Detail>
            )}
            <Detail icon={Mail} label="Email">
              <a href={`mailto:${contact.email}`} className={link}>
                {contact.email}
              </a>
            </Detail>
          </dl>

          <div className="mt-8">
            <p className="mb-3 font-bold">Follow us</p>
            <SocialLinks className="text-magenta-700" />
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon aria-hidden size={20} className="mt-1 shrink-0 text-magenta-600" />
      <div>
        <dt className="font-bold">{label}</dt>
        <dd>{children}</dd>
      </div>
    </div>
  );
}
