import { Section, Text } from "@react-email/components";
import { contact } from "@/lib/content";
import { EmailLayout, colors, heading, text } from "./email-layout";

type Props = { name: string; interest: string };

/** Confirmation sent to the visitor after they submit the enquiry form. */
export function EnquiryAutoReplyEmail({ name, interest }: Props) {
  return (
    <EmailLayout preview="Thank you for getting in touch. We'll get back to you soon.">
      <Text style={heading}>We&apos;ve received your enquiry</Text>

      <Text style={text}>Hi {name},</Text>
      <Text style={text}>
        Thank you for contacting Blossom Consultants about {interest.toLowerCase()}. We have your message and a member
        of our team will get back to you soon.
      </Text>
      <Text style={text}>
        If you need to add anything, reply to this email or call us on{" "}
        {contact.phones.map((p, i) => (
          <span key={p.href}>
            {i > 0 && " or "}
            <a href={p.href} style={{ color: colors.magenta, fontWeight: 700 }}>
              {p.label}
            </a>
          </span>
        ))}
        .
      </Text>

      <Section
        style={{
          margin: "8px 0 24px",
          padding: "14px 18px",
          backgroundColor: colors.blush100,
          borderLeft: `3px solid ${colors.magenta}`,
          borderRadius: "6px",
        }}
      >
        <Text style={{ ...text, margin: 0, fontSize: "14px" }}>
          If you are in crisis or need urgent help, please contact your nearest hospital or emergency services instead
          of waiting for our reply.
        </Text>
      </Section>

      <Text style={{ ...text, margin: 0 }}>
        Kind regards,
        <br />
        <span style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: colors.plum }}>Blossom Consultants</span>
      </Text>
    </EmailLayout>
  );
}

EnquiryAutoReplyEmail.PreviewProps = { name: "Wanjiku", interest: "Personal psychotherapy" } satisfies Props;

export default EnquiryAutoReplyEmail;
