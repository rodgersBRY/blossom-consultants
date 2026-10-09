"use server";

import { Resend } from "resend";
import { contact, enquiryInterests } from "@/lib/content";
import { EnquiryAutoReplyEmail } from "@/emails/enquiry-auto-reply";
import { EnquiryNotificationEmail } from "@/emails/enquiry-notification";

export type EnquiryValues = { name: string; email: string; interest: string; message: string };
export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Echoed back on error so the form can refill what the visitor typed. */
  values?: EnquiryValues;
};

const limits = { name: 120, email: 254, message: 5000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

/** Sends the enquiry to the company inbox, then an auto-reply to the visitor. */
export async function sendEnquiry(_prev: EnquiryState, data: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (field(data, "company")) return { status: "success" };

  const name = field(data, "name");
  const email = field(data, "email");
  const message = field(data, "message");
  const interest = enquiryInterests.includes(field(data, "interest")) ? field(data, "interest") : "General enquiry";
  const values = { name, email, interest, message };

  if (!name || !message || !emailPattern.test(email)) {
    return { status: "error", message: "Please fill in your name, a valid email address and a message.", values };
  }
  
  if (name.length > limits.name || email.length > limits.email || message.length > limits.message) {
    return { status: "error", message: "Your message is too long. Please shorten it and try again.", values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Enquiry form is missing RESEND_API_KEY or ENQUIRY_FROM_EMAIL");
    return { status: "error", message: `We couldn't send your message. Please email us at ${contact.email}.`, values };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: process.env.ENQUIRY_TO_EMAIL || contact.email,
    replyTo: email,
    subject: `Website enquiry: ${interest}`,
    react: EnquiryNotificationEmail(values),
    text: [`Name: ${name}`, `Email: ${email}`, `Interest: ${interest}`, "", "Message:", message].join("\n"),
  });
  if (error) {
    console.error("Failed to send enquiry", error);
    return { status: "error", message: `We couldn't send your message. Please email us at ${contact.email}.`, values };
  }

  // The enquiry already reached the company, so a failed auto-reply is logged rather than shown.
  const { error: replyError } = await resend.emails.send({
    from,
    to: email,
    replyTo: contact.email,
    subject: "We've received your enquiry",
    react: EnquiryAutoReplyEmail({ name, interest }),
    text: [
      `Hi ${name},`,
      "",
      `Thank you for contacting Blossom Consultants about ${interest.toLowerCase()}. We have your message and a member of our team will get back to you soon.`,
      "",
      `If you need to add anything, reply to this email or call us on ${contact.phones.map((p) => p.label).join(" or ")}.`,
      "",
      "If you are in crisis or need urgent help, please contact your nearest hospital or emergency services instead of waiting for our reply.",
      "",
      "Kind regards,",
      "Blossom Consultants",
      contact.address,
    ].join("\n"),
  });
  if (replyError) console.error("Failed to send enquiry auto-reply", replyError);

  return { status: "success", message: "Thank you. Your enquiry has been sent and we've emailed you a confirmation." };
}
