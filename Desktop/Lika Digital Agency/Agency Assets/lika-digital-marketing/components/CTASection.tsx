"use client";

import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import type { CtaSection } from "@/config/client";

type CTASectionProps = {
  section: CtaSection;
};

export function CTASection({ section }: CTASectionProps) {
  return (
    <section className="section-spacing bg-white px-4 sm:px-6 lg:px-8">
      <FadeIn className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#8eb5ff_0%,#b88ef5_45%,#f0a0cf_100%)] px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(155,109,243,0.22)] md:px-8 md:py-14 lg:px-10">
        <h2 className="mx-auto  max-w-2xl text-[2rem] font-semibold tracking-tight sm:text-[2.5rem]">
          {section.title}
        </h2>
        {section.description ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/88">{section.description}</p> : null}
        <div className="mt-8 flex justify-center">
          <ActionLink
            href={section.buttonHref}
            trackingAction="cta_click"
            trackingLabel="cta_section"
            className="bg-[#5f48b4] px-8 text-white shadow-[0_12px_28px_rgba(95,72,180,0.28)] hover:bg-[#533da5]"
          >
            {section.buttonLabel}
          </ActionLink>
        </div>
      </FadeIn>
    </section>
  );
}
