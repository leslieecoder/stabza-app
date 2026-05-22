"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackEventOptions = {
  action: string;
  category: string;
  label?: string;
};

export function trackEvent({ action, category, label }: TrackEventOptions) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];

  window.dataLayer.push({
    event: "lika_template_event",
    action,
    category,
    label,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}
