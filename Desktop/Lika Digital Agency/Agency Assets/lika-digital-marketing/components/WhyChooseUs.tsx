"use client";

import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { WhyChooseUsSection } from "@/config/client";

type WhyChooseUsProps = {
  section: WhyChooseUsSection;
};

export function WhyChooseUs({ section }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="section-spacing scroll-mt-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <FadeIn delay={0.08} className="order-1 min-w-0">
          <PlaceholderImage image={section.image} variant="split" className="h-full w-full min-h-72 border-[#f0e6ff] bg-[#fcf9ff] sm:min-h-80" />
        </FadeIn>

        <FadeIn className="order-2 flex min-w-0 flex-col justify-center rounded-[2rem] bg-[#fffafc] p-6 shadow-[0_18px_50px_rgba(239,71,111,0.06)] md:p-8 lg:p-10">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">{section.eyebrow}</p>
          ) : null}
          <h2 className="mt-2 w-full max-w-full [word-wrap:break-word] [hyphens:auto] text-[1.95rem] font-semibold tracking-tight text-(--heading-color) sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-(--text-muted)">
            We combine strategy, design, and conversion-focused structure so your website feels polished, helpful, and ready to bring in the right people.
          </p>
          <ul className="mt-7 w-full max-w-full space-y-3 text-sm text-(--text-muted)">
            {section.points.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm shadow-[#e9dbff]/60">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7a57d5]" />
                <span className="min-w-0 [word-wrap:break-word] [hyphens:auto]">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <ActionLink
              href="#contact-form"
              trackingAction="cta_click"
              trackingLabel="why_choose_us"
              className="inline-flex self-start bg-(--color-primary) px-7 text-white shadow-[0_14px_28px_rgba(121,87,213,0.2)] hover:bg-(--color-primary-hover)"
            >
              {section.primaryCta}
            </ActionLink>
            <p className="text-sm font-semibold text-(--text-muted)">{section.statValue}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
