"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { trackEvent } from "@/lib/analytics";

type ActionLinkProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
  target?: string;
  rel?: string;
  trackingAction?: string;
  trackingLabel?: string;
}>;

const variantClasses = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-lg shadow-[color:var(--color-primary-shadow)]",
  secondary:
    "border border-[var(--panel-border)] bg-[var(--color-secondary-background)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] backdrop-blur-xl",
  whatsapp:
    "bg-[var(--color-whatsapp)] text-[var(--color-whatsapp-foreground)] hover:bg-[var(--color-whatsapp-hover)] shadow-lg shadow-[color:var(--color-whatsapp-shadow)]",
} as const;

export function ActionLink({
  href,
  variant = "primary",
  className = "",
  target,
  rel,
  trackingAction,
  trackingLabel,
  children,
}: ActionLinkProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => {
        if (trackingAction) {
          trackEvent({
            action: trackingAction,
            category: "cta",
            label: trackingLabel,
          });
        }
      }}
      className={`inline-flex min-h-12 transform-gpu will-change-transform items-center justify-center rounded-(--radius-button) px-6 py-3 text-base font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
