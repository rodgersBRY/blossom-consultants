import { Button, Section, Text } from "@react-email/components";
import { EmailLayout, colors, heading, text } from "./email-layout";

type Props = { name: string; email: string; interest: string; message: string };

const label = {
  margin: "0 0 2px",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "1.6px",
  textTransform: "uppercase" as const,
  color: colors.magenta,
};

/** Sent to the company inbox for each website enquiry. */
export function EnquiryNotificationEmail({ name, email, interest, message }: Props) {
  return (
    <EmailLayout preview={`${name} sent an enquiry about ${interest.toLowerCase()}`}>
      <Text style={heading}>New website enquiry</Text>

      <Text style={label}>Name</Text>
      <Text style={text}>{name}</Text>

      <Text style={label}>Email</Text>
      <Text style={text}>
        <a href={`mailto:${email}`} style={{ color: colors.magenta }}>
          {email}
        </a>
      </Text>

      <Text style={label}>Interested in</Text>
      <Text style={text}>{interest}</Text>

      <Text style={label}>Message</Text>
      <Section
        style={{ margin: "0 0 24px", padding: "16px 18px", backgroundColor: colors.blush100, borderRadius: "8px" }}
      >
        <Text style={{ ...text, margin: 0, whiteSpace: "pre-wrap" }}>{message}</Text>
      </Section>

      <Button
        href={`mailto:${email}?subject=${encodeURIComponent(`Re: Your enquiry about ${interest.toLowerCase()}`)}`}
        style={{
          padding: "13px 24px",
          backgroundColor: colors.magenta,
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        Reply to {name}
      </Button>
    </EmailLayout>
  );
}

EnquiryNotificationEmail.PreviewProps = {
  name: "Wanjiku Kamau",
  email: "wanjiku@example.com",
  interest: "Corporate training",
  message: "Hello,\n\nWe're looking for a wellbeing workshop for a team of 40 staff next month. Could you share options?",
} satisfies Props;

export default EnquiryNotificationEmail;
