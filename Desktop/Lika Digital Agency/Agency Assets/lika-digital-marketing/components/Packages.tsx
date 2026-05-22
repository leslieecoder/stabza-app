"use client";

import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import type { PackagesSection } from "@/config/client";

type PackagesProps = {
  section: PackagesSection;
};

export function Packages({ section }: PackagesProps) {
  return (
    <section id="packages" className="section-spacing scroll-mt-32 bg-[#f6f1ff] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-(--heading-color) sm:text-[2.8rem]">
            {section.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-(--text-muted) sm:text-lg">{section.description}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {section.items.map((item, index) => (
            <FadeIn
              key={item.name}
              delay={index * 0.08}
              hover
              className={`flex h-full flex-col rounded-4xl border bg-white p-6 shadow-[0_18px_50px_rgba(121,87,213,0.08)] md:p-8 ${
                item.highlighted ? "border-[#c5b2ff] ring-1 ring-[#d8cbff]" : "border-[#eadfff]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-(--heading-color)">{item.name}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-(--text-muted)">{item.subtitle}</p>
                </div>
                {item.highlighted ? (
                  <span className="rounded-full bg-[#f3ecff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a57d5]">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-tight text-(--heading-color)">{item.price}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-(--text-primary)">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#7a57d5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ActionLink
                href={item.ctaHref}
                trackingAction="cta_click"
                trackingLabel={`package_${item.name.toLowerCase().replace(/\s+/g, "_")}`}
                className="mt-8 w-full justify-center bg-(--color-primary) text-white shadow-[0_14px_30px_rgba(121,87,213,0.24)] hover:bg-(--color-primary-hover)"
              >
                {item.ctaLabel}
              </ActionLink>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}