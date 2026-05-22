"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  hover?: boolean;
}>;

export function FadeIn({ children, className, delay = 0, hover = false }: FadeInProps) {
  return (
    <motion.div
      className={`${hover ? "transform-gpu will-change-transform" : ""} ${className ?? ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, scale: 1.01, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } } : undefined}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
