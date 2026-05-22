"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { FormStatusToast } from "@/components/FormStatusToast";
import {
  type ContactDetails,
  type ContactSection,
  type FormContent,
  type ServiceItem,
  type WhatsAppConfig,
  getWhatsAppLink,
} from "@/config/client";
import { trackEvent } from "@/lib/analytics";

type ContactFormProps = {
  contact: ContactDetails;
  section: ContactSection;
  form: FormContent;
  services: ServiceItem[];
  whatsapp: WhatsAppConfig;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  utmSource: string;
  utmCampaign: string;
  gclid: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  utmSource: "",
  utmCampaign: "",
  gclid: "",
};

const SUCCESS_REDIRECT_DELAY_MS = 1400;
const STATUS_DISMISS_DELAY_MS = 4500;

function getInitialState(): FormState {
  if (typeof window === "undefined") {
    return initialState;
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    ...initialState,
    utmSource: searchParams.get("utm_source") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    gclid: searchParams.get("gclid") ?? "",
  };
}

export function ContactForm({ contact, section, form, services, whatsapp }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(getInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "idle") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, STATUS_DISMISS_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  useEffect(() => {
    if (status !== "success") {
      return undefined;
    }

    const redirectId = window.setTimeout(() => {
      window.location.assign(getWhatsAppLink(whatsapp));
    }, SUCCESS_REDIRECT_DELAY_MS);

    return () => window.clearTimeout(redirectId);
  }, [status, whatsapp]);

  const formFieldClassName =
    "w-full rounded-full border border-[#ebe7f6] bg-white px-5 py-4 pr-12 text-[0.98rem] text-slate-950 shadow-[0_8px_18px_rgba(76,45,146,0.06)] outline-none transition-[border-color,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-slate-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20";

  const messageFieldClassName =
    "w-full rounded-[1.6rem] border border-[#ebe7f6] bg-white px-5 py-4 text-[0.98rem] text-slate-950 shadow-[0_8px_18px_rgba(76,45,146,0.06)] outline-none transition-[border-color,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-slate-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20";
  const successMessage = `${form.successMessage} Opening WhatsApp in a moment…`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? form.genericErrorMessage);
      }

      setStatus("success");
      trackEvent({ action: "form_submit", category: "lead", label: "contact_form" });
      setFormState((current) => ({
        ...initialState,
        utmSource: current.utmSource,
        utmCampaign: current.utmCampaign,
        gclid: current.gclid,
      }));
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : form.genericErrorMessage,
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function FieldIcon({ type }: { type: "user" | "email" | "phone" | "building" | "service" | "budget" }) {
    const commonClassName = "h-4.5 w-4.5 text-[#8d87a8]";

    switch (type) {
      case "user":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
      case "email":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5Zm0 .4 8 5.6 8-5.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
      case "phone":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M8 3.75h8A1.25 1.25 0 0 1 17.25 5v14A1.25 1.25 0 0 1 16 20.25H8A1.25 1.25 0 0 1 6.75 19V5A1.25 1.25 0 0 1 8 3.75Zm3 13.5h2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
      case "building":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M7 20V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V20M4 20h16M10 8h1m3 0h1m-5 4h1m3 0h1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
      case "service":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M5 7h14M5 12h14M5 17h9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
      case "budget":
        return (
          <svg aria-hidden="true" viewBox="0 0 24 24" className={commonClassName} fill="none">
            <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5Zm11 3.5h2.5m-7-3.5h2m-2 7h4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        );
    }
  }

  function ContactInfoIcon({ type }: { type: "email" | "phone" }) {
    const wrapperClassName =
      type === "email"
        ? "bg-[linear-gradient(135deg,#ff7aa2,#ff5d7a)]"
        : "bg-[linear-gradient(135deg,#8eb5ff,#7da3ff)]";

    return (
      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_10px_24px_rgba(76,45,146,0.12)] ${wrapperClassName}`}>
        {type === "email" ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
            <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5Zm0 .4 8 5.6 8-5.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
            <path d="M5 4.9C5 4.4 5.4 4 5.9 4H8.6C9 4 9.4 4.3 9.5 4.7L10.7 9C10.8 9.4 10.7 9.8 10.4 10.1L8.9 11.6C9.9 13.7 11.6 15.4 13.7 16.4L15.2 14.9C15.5 14.6 15.9 14.5 16.3 14.6L20.6 15.8C21 15.9 21.3 16.3 21.3 16.7V19.4C21.3 19.9 20.9 20.3 20.4 20.3H19.5C11.5 20.3 5 13.8 5 5.8V4.9Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
        )}
      </span>
    );
  }

  return (
    <section id="contact-form" className="section-spacing scroll-mt-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <FadeIn className="px-2 lg:px-0">
          {section.eyebrow ? <p className="text-sm font-semibold text-[#ff5f86]">— {section.eyebrow}</p> : null}
          <h2 className="mt-4 max-w-lg text-[2.3rem] font-semibold tracking-tight text-slate-900 sm:text-[3.2rem]">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mt-4 max-w-md text-[1.02rem] leading-8 text-slate-600">
              {section.description}
            </p>
          ) : null}

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <ContactInfoIcon type="email" />
              <div>
                <a href={`mailto:${contact.email}`} className="text-base font-semibold text-slate-800 transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-(--color-primary)">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ContactInfoIcon type="phone" />
              <div>
                <a href={contact.phoneHref} className="text-base font-semibold text-slate-800 transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-(--color-primary)">
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">{contact.responseTime}</p>
        </FadeIn>

        <FadeIn className="relative rounded-[2.25rem] border border-white/80 bg-white/96 p-8 shadow-[0_24px_70px_rgba(76,45,146,0.12)] ring-1 ring-[#f4efff] md:p-9" delay={0.08}>
          <div className="absolute -bottom-6 right-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(125,163,255,0.22),transparent_68%)] blur-2xl" />
          <div className="absolute -right-5 top-12 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,160,207,0.18),transparent_70%)] blur-2xl" />

          <form className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="relative block">
              <input
                required
                value={formState.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={formFieldClassName}
                placeholder={form.namePlaceholder}
                autoComplete="name"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="user" />
              </span>
            </label>

            <label className="relative block">
              <input
                required
                type="email"
                value={formState.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={formFieldClassName}
                placeholder={form.emailPlaceholder}
                autoComplete="email"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="email" />
              </span>
            </label>

            <label className="relative block">
              <input
                required
                value={formState.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={formFieldClassName}
                placeholder={form.phonePlaceholder}
                autoComplete="tel"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="phone" />
              </span>
            </label>

            <label className="relative block">
              <input
                value={formState.company}
                onChange={(event) => updateField("company", event.target.value)}
                className={formFieldClassName}
                placeholder={form.companyPlaceholder}
                autoComplete="organization"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="building" />
              </span>
            </label>

            <label className="relative block">
              <select
                required
                value={formState.service}
                onChange={(event) => updateField("service", event.target.value)}
                className={formFieldClassName}
              >
                <option value="">{form.servicePlaceholder}</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="service" />
              </span>
            </label>

            <label className="relative block">
              <input
                value={formState.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                className={formFieldClassName}
                placeholder={form.budgetPlaceholder}
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <FieldIcon type="budget" />
              </span>
            </label>

            <label className="block md:col-span-2">
              <textarea
                required
                value={formState.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={`${messageFieldClassName} min-h-32 resize-y rounded-[1.7rem]`}
                placeholder={form.messagePlaceholder}
              />
            </label>

            <input type="hidden" value={formState.utmSource} name="utm_source" readOnly />
            <input type="hidden" value={formState.utmCampaign} name="utm_campaign" readOnly />
            <input type="hidden" value={formState.gclid} name="gclid" readOnly />

            <div className="grid gap-4 md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#9b6df3,#8958ea)] px-7 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(155,109,243,0.24)] transition-[background-color,box-shadow,transform,opacity] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_35px_rgba(155,109,243,0.28)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
              >
                <span>{isSubmitting ? form.submittingLabel : form.submitLabel}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>

              {isSubmitting ? (
                <FormStatusToast status="loading" message={form.submittingLabel} className="max-w-xl" />
              ) : null}

              {status === "success" ? (
                <FormStatusToast status="success" message={successMessage} className="max-w-xl" />
              ) : null}

              {status === "error" ? (
                <FormStatusToast status="error" message={errorMessage} className="max-w-xl" />
              ) : null}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
