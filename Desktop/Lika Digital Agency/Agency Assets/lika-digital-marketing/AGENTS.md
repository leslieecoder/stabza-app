# Lika Landing Page Template (v3)

## Project Purpose
This project is a reusable, high-converting landing page system for local service businesses.

It is designed to:
- Generate leads from Google Ads traffic
- Convert visitors into calls, WhatsApp messages, or form submissions
- Deliver a premium, modern, visual-first experience
- Be easily duplicated and customized for multiple clients

This is NOT a SaaS, CMS product, or dashboard system.

---

## Core Philosophy

This is a **conversion-first + visual-first + interaction-rich system**.

Every decision must prioritize:
1. Conversion (leads)
2. Simplicity (clarity)
3. Visual appeal (images + layout)
4. Mobile experience (ease of use)

---

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (animations + interactivity)
- Git-based configuration system (no CMS for MVP)
- Deployed on Vercel

---

## Architecture Rules

### 1. Config-driven system (CRITICAL)

All client-specific data MUST live in:

/config/client.ts

This includes:
- text content
- phone numbers
- WhatsApp number
- ALL images
- styles (colors, typography, layout preferences, icons)

No business-specific data should be hardcoded in components.

---

### 2. CONFIG MUST CONTROL STYLE (NEW IMPORTANT RULE)

The config must allow customization of:

#### Visual styles:
- background colors
- primary / secondary colors
- button styles
- typography (font family, headings style)
- border radius style
- section spacing

#### Media:
- hero images
- service images
- testimonials avatars
- gallery images
- background images

#### UI elements:
- icon styles
- CTA button styles
- layout variations (light / dark / modern clean)

---

### 3. INTERACTIVITY REQUIREMENTS (FRAMER MOTION)

The system MUST include modern interactive behavior using Framer Motion:

- Smooth fade-in on scroll
- Section reveal animations
- Hover effects on cards and buttons
- Micro-interactions (scale, lift, glow)
- Staggered animations for lists and grids

Animations must:
- be subtle and professional
- improve UX (not distract)
- feel like modern SaaS/Framer websites

---

### 4. MOBILE UX IS CRITICAL

Mobile experience is a priority.

All pages MUST:
- Be fully responsive (mobile-first)
- Use large tap-friendly buttons
- Stack sections vertically
- Avoid clutter
- Keep forms simple and fast
- Ensure WhatsApp CTA is always visible

Mobile UX must feel:
👉 fast
👉 simple
👉 frictionless

---

### 5. STICKY WHATSAPP CTA (NEW IMPORTANT FEATURE)

Every page MUST include a persistent sticky CTA button:

- Fixed position (bottom-right on desktop, bottom bar or floating on mobile)
- Always visible
- Links to WhatsApp via wa.me

Example behavior:
- “Contact on WhatsApp”
- Always accessible while scrolling

This is a REQUIRED conversion feature.

---

### 6. COMPONENT STRUCTURE

All UI must be modular:

/components
  - Hero.tsx
  - Trust.tsx
  - Services.tsx
  - WhyChooseUs.tsx
  - Testimonials.tsx
  - Gallery.tsx
  - CTA.tsx
  - StickyWhatsAppButton.tsx
  - ContactForm.tsx

Each component must:
- be reusable
- be driven by config
- include responsive design
- support images and animations

---

### 7. REQUIRED PAGE SECTIONS

Every landing page MUST include:

1. Hero (headline + CTA + image + animation)
2. Trust / benefits section
3. Services (image-based cards)
4. Why Choose Us (split layout + visuals)
5. Testimonials (avatars + motion effects)
6. CTA section (high conversion block)
7. Gallery / portfolio images
8. Contact form + WhatsApp CTA

---

### 8. LEAD HANDLING

All leads must go through:

/app/api/lead/route.ts

Must support:
- form submissions
- WhatsApp redirect fallback
- optional email notification

---

### 9. WHATSAPP INTEGRATION

Use:
https://wa.me/

No external APIs required for MVP.

Sticky WhatsApp button must ALWAYS be present.

---

### 10. GOOGLE INTEGRATION READY

Must support:

- Google Analytics
- Google Ads conversion tracking

Environment variables:

NEXT_PUBLIC_GA_ID  
NEXT_PUBLIC_GOOGLE_ADS_ID  

Track:
- form submissions
- CTA clicks
- WhatsApp clicks

---

### 11. DESIGN PRINCIPLES

- Clean, modern SaaS-inspired UI
- Strong typography hierarchy
- Generous white space
- High-contrast CTA buttons
- Visual-first layout (images everywhere)
- Consistent spacing system

---

### 12. WHAT NOT TO DO

- Do NOT build a CMS
- Do NOT add authentication
- Do NOT build dashboards
- Do NOT over-engineer backend
- Do NOT complicate animations
- Do NOT break mobile UX simplicity

---

## CORE USER FLOW

Google Ads → Landing Page → CTA (Sticky or Section) → Form / WhatsApp → Lead → Client closes sale

---

## DEVELOPER MINDSET

This is a **repeatable conversion system**, not a one-off website.

Everything should be:
- reusable
- configurable
- fast to duplicate
- optimized for leads