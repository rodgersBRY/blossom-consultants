"use client";

import { useActionState } from "react";
import { ArrowUpRight, CircleCheck, CircleAlert } from "lucide-react";
import { enquiryInterests } from "@/lib/content";
import { sendEnquiry, type EnquiryState } from "@/app/actions/send-enquiry";

const field =
  "w-full rounded-lg border border-[#e7cfde] bg-white p-3.5 font-[inherit] focus:border-magenta-600 focus:outline-none";

const initialState: EnquiryState = { status: "idle" };

/** Sends the enquiry through Resend via a Server Action. */
export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  return (
    <form
      action={formAction}
      data-reveal
      className="grid gap-3.5 rounded-xl border border-line bg-white p-[30px]"
    >
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="text-[13px] font-bold">
          Your name
        </label>
        <input id="name" name="name" autoComplete="name" required defaultValue={state.values?.name} className={field} />
      </div>
      <div>
        <label htmlFor="email" className="text-[13px] font-bold">
          Email address
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={state.values?.email} className={field} />
      </div>
      <div>
        <label htmlFor="interest" className="text-[13px] font-bold">
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" defaultValue={state.values?.interest} className={field}>
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
          defaultValue={state.values?.message}
          placeholder="Please share a brief, non-sensitive description of your enquiry."
          className={`${field} min-h-[110px] resize-y`}
        />
      </div>
      <small className="text-muted">
        For privacy, please avoid sharing sensitive medical or personal information in this form.
      </small>
      {state.message && (
        <p
          role="status"
          className={`flex items-start gap-2 text-sm ${state.status === "error" ? "text-red-700" : "text-green-700"}`}
        >
          {state.status === "error" ? (
            <CircleAlert size={16} aria-hidden className="mt-0.5 shrink-0" />
          ) : (
            <CircleCheck size={16} aria-hidden className="mt-0.5 shrink-0" />
          )}
          {state.message}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn cursor-pointer disabled:cursor-wait disabled:opacity-70">
        {pending ? "Sending..." : "Send Enquiry"} <ArrowUpRight size={16} aria-hidden />
      </button>
    </form>
  );
}
