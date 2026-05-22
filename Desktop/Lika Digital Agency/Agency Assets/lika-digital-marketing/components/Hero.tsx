"use client";

import { useEffect, useState } from "react";
import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import { FormStatusToast } from "@/components/FormStatusToast";
import { getWhatsAppLink, type HeroContent, type WhatsAppConfig } from "@/config/client";
import { trackEvent } from "@/lib/analytics";

type HeroProps = {
  hero: HeroContent;
  whatsapp: WhatsAppConfig;
};

type HeroLeadState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  utmSource: string;
  utmCampaign: string;
  gclid: string;
};

const initialLeadState: HeroLeadState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  utmSource: "",
  utmCampaign: "",
  gclid: "",
};

const SUCCESS_REDIRECT_DELAY_MS = 1400;
const STATUS_DISMISS_DELAY_MS = 4500;

function getInitialLeadState(): HeroLeadState {
  if (typeof window === "undefined") {
    return initialLeadState;
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    ...initialLeadState,
    utmSource: searchParams.get("utm_source") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    gclid: searchParams.get("gclid") ?? "",
  };
}

export function Hero({ hero, whatsapp }: HeroProps) {
  const [heroForm, setHeroForm] = useState<HeroLeadState>(getInitialLeadState);
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

  function updateHeroField<Key extends keyof HeroLeadState>(key: Key, value: HeroLeadState[Key]) {
    setHeroForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleHeroSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hero.formCard) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...heroForm,
          message: `Requested a free appointment from the hero form. Area or service selected: ${heroForm.service}.`,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? hero.formCard.genericErrorMessage);
      }

      setStatus("success");
      trackEvent({ action: "form_submit", category: "lead", label: "hero_form" });
      setHeroForm((current) => ({
        ...initialLeadState,
        utmSource: current.utmSource,
        utmCampaign: current.utmCampaign,
        gclid: current.gclid,
      }));
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : hero.formCard.genericErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!hero.formCard) {
    return null;
  }

  const heroInputClassName =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-950 outline-none transition-[border-color,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20";
  const successMessage = `${hero.formCard.successMessage} Opening WhatsApp in a moment…`;

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 md:pb-24 sm:pt-12 lg:px-8 lg:pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_20px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px] opacity-5 sm:bg-size-[68px_68px]" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_25rem]">
        <div className="relative z-10 max-w-2xl text-white">
          <FadeIn delay={0.05}>
            <h1 className="max-w-[15ch] text-[2.8rem] font-extrabold leading-[0.94] tracking-[-0.06em] text-white! drop-shadow-[0_8px_24px_rgba(54,39,94,0.24)] sm:text-[3rem] lg:text-[4.1rem]">
              {hero.title}
            </h1>
          </FadeIn>
          <FadeIn className="mt-8 flex flex-wrap items-center gap-4" delay={0.1}>
            <ActionLink
              href={getWhatsAppLink(whatsapp)}
              target="_blank"
              rel="noreferrer"
              trackingAction="whatsapp_click"
              trackingLabel="hero_background_primary"
              variant="whatsapp"
              className="min-h-14 gap-2 px-7 py-4 text-sm font-semibold shadow-[0_18px_34px_rgba(37,211,102,0.28)]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.15 1.59 5.96L0 24l6.33-1.66a11.87 11.87 0 0 0 5.74 1.47h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.46-8.43Zm-8.45 18.32h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.87 9.87 0 0 1-1.52-5.25c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.83 9.9Zm5.42-7.4c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.45-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.03-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              {whatsapp.heroButtonLabel}
            </ActionLink>
            {hero.secondaryLink ? (
              <ActionLink
                href={hero.secondaryLink.href}
                variant="secondary"
                trackingAction="cta_click"
                trackingLabel="hero_live_chat_secondary"
                className="min-h-14 gap-2 border-[#d9cfff] bg-[#efe6ff] px-7 py-4 text-sm font-semibold text-[#4d2d92] shadow-[0_16px_32px_rgba(124,95,201,0.22)] hover:bg-[#e5d7ff] hover:text-[#43287f]"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#d8c6ff] text-[0.7rem] text-[#4d2d92]">✦</span>
                {hero.secondaryLink.label}
              </ActionLink>
            ) : null}
          </FadeIn>
          <FadeIn className="mt-8 flex items-center gap-4" delay={0.2}>
            <div className="flex -space-x-2.5">
              {["LM", "JG", "AR"].map((initials, index) => (
                <div
                  key={initials}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/70 text-[0.7rem] font-semibold text-slate-950 shadow-sm ${index === 0 ? "bg-white" : index === 1 ? "bg-violet-100" : "bg-slate-100"}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-sm tracking-[0.12em]">★★★★★</span>
              </div>
               <span className="text-sm font-semibold text-white">Helping Businesses Grow Online</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="relative z-10 rounded-4xl border border-[rgba(157,109,243,0.36)] bg-white/96 p-6 shadow-[0_30px_80px_rgba(76,45,146,0.18)] md:p-8" delay={0.12}>
          <div className="rounded-[1.6rem] p-1">
            <h2 className="px-3 pb-5 pt-3 text-center text-[1.75rem] font-semibold tracking-[-0.04em] text-(--heading-color) sm:text-[2.5rem]">
              {hero.formCard.title}
            </h2>
            <form className="space-y-3" onSubmit={handleHeroSubmit}>
              <input
                required
                value={heroForm.name}
                onChange={(event) => updateHeroField("name", event.target.value)}
                className={heroInputClassName}
                placeholder={hero.formCard.namePlaceholder}
                autoComplete="name"
              />
              <input
                required
                type="email"
                value={heroForm.email}
                onChange={(event) => updateHeroField("email", event.target.value)}
                className={heroInputClassName}
                placeholder={hero.formCard.emailPlaceholder}
                autoComplete="email"
              />
              <input
                required
                value={heroForm.phone}
                onChange={(event) => updateHeroField("phone", event.target.value)}
                className={heroInputClassName}
                placeholder={hero.formCard.phonePlaceholder}
                autoComplete="tel"
              />
              <select
                required
                value={heroForm.service}
                onChange={(event) => updateHeroField("service", event.target.value)}
                className={`${heroInputClassName} text-slate-700`}
              >
                <option value="">{hero.formCard.selectPlaceholder}</option>
                {hero.formCard.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <input type="hidden" value={heroForm.utmSource} name="utm_source" readOnly />
              <input type="hidden" value={heroForm.utmCampaign} name="utm_campaign" readOnly />
              <input type="hidden" value={heroForm.gclid} name="gclid" readOnly />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-13 w-full items-center justify-center rounded-2xl bg-[#9b6df3] px-6 py-3.5 text-base font-semibold text-white transition-[background-color,box-shadow,transform,opacity] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#8958ea] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? hero.formCard.submittingLabel : hero.formCard.submitLabel}
              </button>

              {isSubmitting ? (
                <FormStatusToast status="loading" message={hero.formCard.submittingLabel} />
              ) : null}

              {hero.formCard.helperText ? (
                <p className="px-1 text-center text-sm text-slate-500">{hero.formCard.helperText}</p>
              ) : null}

              {status === "success" ? (
                <FormStatusToast status="success" message={successMessage} />
              ) : null}

              {status === "error" ? (
                <FormStatusToast status="error" message={errorMessage} />
              ) : null}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
