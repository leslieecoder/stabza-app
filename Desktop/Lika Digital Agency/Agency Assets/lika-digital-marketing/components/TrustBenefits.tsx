"use client";

import type { IconType } from "react-icons";
import { FiCalendar, FiClock, FiCrosshair, FiEdit3, FiHeadphones, FiMessageCircle, FiPhoneCall, FiShield, FiTruck } from "react-icons/fi";
import { FadeIn } from "@/components/FadeIn";
import type { PlaceholderAccent, TrustIconName, TrustSection } from "@/config/client";

type TrustBenefitsProps = {
  section: TrustSection;
};

const iconMap: Record<TrustIconName, IconType> = {
  clock: FiClock,
  shield: FiShield,
  message: FiMessageCircle,
  phone: FiPhoneCall,
  headset: FiHeadphones,
  truck: FiTruck,
  target: FiCrosshair,
  calendar: FiCalendar,
  pen: FiEdit3,
};

const accentStyles: Record<PlaceholderAccent, string> = {
  cyan: "bg-cyan-400/18",
  emerald: "bg-emerald-400/18",
  violet: "bg-violet-400/18",
  amber: "bg-[#ffd232]",
  rose: "bg-rose-400/18",
};

export function TrustBenefits({ section }: TrustBenefitsProps) {
  return (
    <section id="benefits" className="section-spacing scroll-mt-32 bg-[#f7f3ff] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">{section.eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-[2rem] font-semibold tracking-tight text-(--heading-color) sm:text-[2.6rem]">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--text-muted)">
            A clear three-step process keeps your project moving fast and makes the whole experience easier from start to launch.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = iconMap[item.icon.name];
            const accentClass = accentStyles[item.icon.accent ?? "amber"];

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.07}
                hover
                className="rounded-4xl border border-[#eadfff] bg-white p-6 text-left shadow-[0_16px_40px_rgba(121,87,213,0.08)] md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a57d5]">0{index + 1}</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative inline-flex h-18 w-18 items-center justify-center">
                    <div className={`absolute inset-0 rounded-[1.4rem] ${accentClass}`} />
                    <div aria-label={item.icon.label} className="relative flex h-18 w-18 items-center justify-center" role="img">
                      <Icon className="h-8 w-8 text-slate-950" strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="text-[1.35rem] font-semibold leading-tight text-(--heading-color)">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-[0.98rem] leading-7 text-(--text-muted)">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
