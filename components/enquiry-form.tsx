"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact, enquiryInterests } from "@/lib/content";

const field =
  "w-full rounded-lg border border-[#e7cfde] bg-white p-3.5 font-[inherit] focus:border-magenta-600 focus:outline-none";

/** Builds a mailto: link from the form. Nothing is sent to a server. */
export function EnquiryForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const interest = String(data.get("interest"));
    const subject = `Website enquiry: ${interest}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-reveal
      className="grid gap-3.5 rounded-xl border border-line bg-white p-[30px]"
    >
      <div>
        <label htmlFor="name" className="text-[13px] font-bold">
          Your name
        </label>
        <input id="name" name="name" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="text-[13px] font-bold">
          Email address
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div>
        <label htmlFor="interest" className="text-[13px] font-bold">
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" className={field}>
          {enquiryInterests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-[13px] font-bold">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Please share a brief, non-sensitive description of your enquiry."
          className={`${field} min-h-[110px] resize-y`}
        />
      </div>
      <small className="text-muted">
        For privacy, please avoid sharing sensitive medical or personal information in this form. This form opens
        your email app and does not send information directly to a server.
      </small>
      <button type="submit" className="btn cursor-pointer">
        Prepare Email Enquiry <ArrowUpRight size={16} aria-hidden />
      </button>
    </form>
  );
}
