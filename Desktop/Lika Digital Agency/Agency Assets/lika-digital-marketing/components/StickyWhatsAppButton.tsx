"use client";

import { motion } from "framer-motion";
import { ActionLink } from "@/components/ActionLink";
import { getWhatsAppLink, type WhatsAppConfig } from "@/config/client";

type StickyWhatsAppButtonProps = {
  whatsapp: WhatsAppConfig;
};

export function StickyWhatsAppButton({ whatsapp }: StickyWhatsAppButtonProps) {
  const whatsappHref = getWhatsAppLink(whatsapp);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-(--panel-border) bg-(--page-background)/92 p-4 backdrop-blur-xl md:hidden">
        <ActionLink
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          variant="whatsapp"
          trackingAction="whatsapp_click"
          trackingLabel="sticky_mobile"
          className="w-full justify-center"
        >
          <span className="flex flex-col items-center leading-tight">
            <span>{whatsapp.mobileLabel}</span>
            <span className="text-xs font-medium opacity-80">{whatsapp.subLabel}</span>
          </span>
        </ActionLink>
      </div>

      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
      >
        <ActionLink
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          variant="whatsapp"
          trackingAction="whatsapp_click"
          trackingLabel="sticky_desktop"
          className="gap-3 px-5 py-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18 text-lg">💬</span>
          <span className="flex flex-col leading-tight">
            <span>{whatsapp.desktopLabel}</span>
            <span className="text-xs font-medium opacity-80">{whatsapp.subLabel}</span>
          </span>
        </ActionLink>
      </motion.div>
    </>
  );
}
