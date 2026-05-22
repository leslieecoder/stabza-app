"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { GallerySection } from "@/config/client";

type GalleryProps = {
  section: GallerySection;
};

export function Gallery({ section }: GalleryProps) {
  const filters = useMemo(() => ["All", ...new Set(section.items.map((item) => item.category))], [section.items]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visibleItems = useMemo(
    () => section.items.filter((item) => activeFilter === "All" || item.category === activeFilter),
    [activeFilter, section.items],
  );

  return (
    <section id="gallery" className="section-spacing scroll-mt-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">{section.eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-(--heading-color) sm:text-[2.7rem]">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--text-muted) sm:text-lg">{section.description}</p>
        </FadeIn>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 ${
                  isActive
                    ? "border-[#7a57d5] bg-[#7a57d5] text-white shadow-[0_10px_24px_rgba(122,87,213,0.2)]"
                    : "border-[#e6dafd] bg-[#faf7ff] text-(--heading-color) hover:border-[#d1bfff] hover:bg-[#f3ecff]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {visibleItems.map((item, index) => (
            <FadeIn key={`${item.category}-${item.title}`} delay={index * 0.05} hover className="w-full max-w-full min-w-0 space-y-4 rounded-4xl bg-[#faf7ff] p-6 shadow-[0_14px_38px_rgba(121,87,213,0.06)] md:p-8">
              <PlaceholderImage image={item.image} variant="gallery" className="border-[#efe5ff] bg-white" />
              <div className="space-y-2 px-1 pb-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a57d5]">{item.category}</p>
                <p className="w-full max-w-full [word-wrap:break-word] [hyphens:auto] text-sm font-semibold uppercase tracking-[0.08em] text-(--heading-color) sm:text-[0.95rem]">
                  {item.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {visibleItems.length === 0 ? (
          <FadeIn className="mt-8 rounded-3xl border border-[#eee5ff] bg-[#faf7ff] px-5 py-6 text-center text-sm text-(--text-muted)">
            No projects in this category yet.
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
