"use client";

import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { ServicesSection } from "@/config/client";

type ServicesProps = {
  section: ServicesSection;
};

export function Services({ section }: ServicesProps) {
  return (
    <section
      id="services"
      className="scroll-mt-32 bg-[#f4efff] px-4 py-[clamp(5.5rem,10vw,10rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-(--heading-color) sm:text-[3rem]">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-800/85">
                {section.description}
              </p>
            ) : null}
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {section.items.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.07}
              hover
              className="w-full max-w-full min-w-0 rounded-4xl border border-[#dfd2ff] bg-white p-6 shadow-[0_12px_30px_rgba(155,109,243,0.08)] md:p-8"
            >
              <PlaceholderImage image={item.image} variant="service" className="bg-transparent" />
              <h3 className="mt-5 text-center text-[1.15rem] font-semibold leading-tight text-(--heading-color) sm:text-[1.25rem]">
                {item.title}
              </h3>
            </FadeIn>
          ))}
        </div>

        {section.ctaLabel && section.ctaHref ? (
          <FadeIn className="mt-12 flex justify-center">
            <ActionLink
              href={section.ctaHref}
              trackingAction="cta_click"
              trackingLabel="services_section"
              className="min-h-14 rounded-full px-8 py-4 text-base font-semibold shadow-[0_14px_30px_rgba(99,73,176,0.18)]"
            >
              {section.ctaLabel}
            </ActionLink>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
