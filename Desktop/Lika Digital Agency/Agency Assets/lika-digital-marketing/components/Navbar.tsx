"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionLink } from "@/components/ActionLink";
import type { HeaderContent } from "@/config/client";

type NavbarProps = {
  header: HeaderContent;
};

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M6 6L18 18M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M4 7H20M4 12H20M4 17H20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M5 4.9C5 4.4 5.4 4 5.9 4H8.6C9 4 9.4 4.3 9.5 4.7L10.7 9C10.8 9.4 10.7 9.8 10.4 10.1L8.9 11.6C9.9 13.7 11.6 15.4 13.7 16.4L15.2 14.9C15.5 14.6 15.9 14.5 16.3 14.6L20.6 15.8C21 15.9 21.3 16.3 21.3 16.7V19.4C21.3 19.9 20.9 20.3 20.4 20.3H19.5C11.5 20.3 5 13.8 5 5.8V4.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Navbar({ header }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextClass = isScrolled ? "text-white/88 hover:text-white" : "text-white/82 hover:text-white";
  const logoTextClass = "text-white";
  const phoneButtonClass = isScrolled
    ? "bg-white/12 text-white ring-1 ring-[#cbb8ff]/30 hover:bg-white/18"
    : "bg-white/10 text-white ring-1 ring-[#d9cfff]/30 hover:bg-white/16";
  const mobileButtonClass = isScrolled
    ? "border-[#d9cfff]/25 bg-white/10 text-white hover:bg-white/16"
    : "border-[#d9cfff]/25 bg-white/8 text-white hover:bg-white/14";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full px-4 py-4 text-3xl transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 lg:px-8 ${
          isScrolled
            ? "border-b border-white/10 bg-slate-950/55 shadow-lg shadow-slate-950/20 backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          <a href="#home" className="flex min-w-0 shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:gap-5" onClick={() => setIsOpen(false)}>
            <div className="flex h-12 items-center justify-center overflow-hidden text-sm font-semibold sm:h-14 lg:h-16">
              {header.logo.imageSrc ? (
                <Image
                  src={header.logo.imageSrc}
                  alt={header.logo.imageAlt ?? `${header.logo.text} logo`}
                  width={header.logo.width ?? 80}
                  height={header.logo.height ?? 80}
                  className="h-full w-auto object-contain"
                />
              ) : (
                <span>{header.logo.text.slice(0, 2).toUpperCase()}</span>
              )}
            </div>
            <div className="min-w-0">
              <p className={`truncate text-2xl font-bold leading-none sm:text-3xl lg:text-5xl ${logoTextClass}`}>{header.logo.text}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {header.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-2 py-2 text-sm font-medium transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${navTextClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            {header.phoneDisplay && header.phoneHref ? (
              <a
                href={header.phoneHref}
                className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,border-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${phoneButtonClass}`}
              >
                <PhoneIcon />
                <span>{header.phoneDisplay}</span>
              </a>
            ) : null}

            <ActionLink
              href={header.ctaHref}
              trackingAction="cta_click"
              trackingLabel="navbar_primary"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-(--color-primary) px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(155,109,243,0.28)] hover:bg-(--color-primary-hover)"
            >
              <span>{header.ctaLabel}</span>
              <ArrowIcon />
            </ActionLink>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-[background-color,border-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-11 sm:w-11 lg:hidden ${mobileButtonClass}`}
            onClick={() => setIsOpen((current) => !current)}
          >
            <MenuIcon open={isOpen} />
          </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-2xl lg:hidden"
              >
                <nav className="flex flex-col gap-2 pt-1">
                  {header.navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-3 text-sm font-medium text-white/82 transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  {header.phoneDisplay && header.phoneHref ? (
                    <a
                      href={header.phoneHref}
                      className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-[#d9cfff]/25 transition-[background-color,border-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      onClick={() => setIsOpen(false)}
                    >
                      <PhoneIcon />
                      <span>{header.phoneDisplay}</span>
                    </a>
                  ) : null}
                  <ActionLink
                    href={header.ctaHref}
                    trackingAction="cta_click"
                    trackingLabel="navbar_mobile_primary"
                    className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-(--color-primary) px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(155,109,243,0.28)] hover:bg-(--color-primary-hover)"
                  >
                    <span>{header.ctaLabel}</span>
                    <ArrowIcon />
                  </ActionLink>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
