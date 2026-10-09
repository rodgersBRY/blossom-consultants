import type { CSSProperties, ReactNode } from "react";
import { Body, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import { contact, siteUrl } from "@/lib/content";

// Brand palette from app/globals.css. Email clients don't read CSS variables, so values are inlined.
export const colors = {
  plum: "#48163f",
  magenta: "#a22a87",
  logoPurple: "#82217f",
  blush50: "#fffafc",
  blush100: "#fdf0f7",
  line: "#efdce8",
  ink: "#39243a",
  muted: "#766474",
};

export const fonts = {
  sans: "'DM Sans', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
};

export const text: CSSProperties = { margin: "0 0 16px", fontSize: "15px", lineHeight: "1.65", color: colors.ink };

export const heading: CSSProperties = {
  margin: "0 0 20px",
  fontFamily: fonts.serif,
  fontSize: "26px",
  fontWeight: 500,
  lineHeight: "1.2",
  color: colors.plum,
};

/** Shared shell for every Blossom email: logo header, white card, contact footer. */
export function EmailLayout({ preview, children }: { preview: string; children: ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ margin: 0, padding: "32px 12px", backgroundColor: colors.blush50, fontFamily: fonts.sans }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto" }}>
          <Section style={{ padding: "0 8px 20px" }}>
            <Img src={`${siteUrl}/blossom-logo.png`} alt="Blossom" width="84" height="56" />
            <Text
              style={{
                margin: "6px 0 0",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1.3px",
                textTransform: "uppercase",
                color: colors.logoPurple,
              }}
            >
              Psychotherapy Services
            </Text>
          </Section>

          <Section
            style={{
              padding: "32px 30px",
              backgroundColor: "#ffffff",
              border: `1px solid ${colors.line}`,
              borderTop: `4px solid ${colors.magenta}`,
              borderRadius: "12px",
            }}
          >
            {children}
          </Section>

          <Section style={{ padding: "20px 8px 0" }}>
            <Hr style={{ margin: "0 0 16px", borderColor: colors.line }} />
            <Text style={{ margin: 0, fontSize: "12px", lineHeight: "1.6", color: colors.muted }}>
              Blossom Consultants · {contact.address}
              <br />
              {contact.phones.map((p) => p.label).join(" · ")} · {contact.email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
