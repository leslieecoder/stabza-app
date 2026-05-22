export type PlaceholderAccent = "cyan" | "emerald" | "violet" | "amber" | "rose";

export type PlaceholderImage = {
  src?: string;
  label: string;
  alt: string;
  accent?: PlaceholderAccent;
};

export type ThemeStyles = {
  mode: "light" | "dark";
  quickColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  palettes: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    bodyFont: string;
    headingWeight: string;
    displayTracking: string;
  };
  radii: {
    section: string;
    card: string;
    button: string;
  };
  spacing: {
    sectionY: string;
  };
  buttons: {
    primary: "solid" | "soft";
    secondary: "outline" | "soft";
  };
  icons: {
    style: "soft-gradient" | "minimal";
  };
  layout: "modern-clean" | "dark-premium";
};

export type ThemePalette = {
  colors: {
    pageBackground: string;
    sectionBackground: string;
    darkBackground: string;
    heroBackground: string;
    heroOverlay: string;
    cardBackground: string;
    cardBorder: string;
    panelBackground: string;
    panelBorder: string;
    textPrimary: string;
    textMuted: string;
    textInverse: string;
    heading: string;
    primary: string;
    primaryHover: string;
    primaryForeground: string;
    primaryShadow: string;
    secondaryBackground: string;
    secondaryHover: string;
    secondaryForeground: string;
    accent: string;
    accentSoft: string;
    accentGlow: string;
    whatsapp: string;
    whatsappHover: string;
    whatsappForeground: string;
    whatsappShadow: string;
    successBackground: string;
    successForeground: string;
    errorBackground: string;
    errorForeground: string;
  };
};

export type WhatsAppConfig = {
  number: string;
  message: string;
  heroButtonLabel: string;
  sectionButtonLabel: string;
  desktopLabel: string;
  mobileLabel: string;
  subLabel: string;
};

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderContent = {
  logo: {
    text: string;
    imageSrc?: string;
    imageAlt?: string;
    width?: number;
    height?: number;
  };
  navItems: HeaderNavItem[];
  phoneDisplay?: string;
  phoneHref?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type TrustIconName = "clock" | "shield" | "message" | "phone" | "headset" | "truck" | "target" | "calendar" | "pen";

export type TrustIcon = {
  name: TrustIconName;
  label: string;
  accent?: PlaceholderAccent;
};

export type HeroContent = {
  layout?: "background-form";
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
  backgroundImage?: PlaceholderImage;
  formCard?: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    selectPlaceholder: string;
    options: string[];
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    genericErrorMessage: string;
    helperText?: string;
  };
};

export type TrustBenefit = {
  title: string;
  description: string;
  icon: TrustIcon;
};

export type TrustSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: TrustBenefit[];
  cardsEyebrow: string;
  cardsTitle: string;
  cardsDescription: string;
  cards: TrustBenefit[];
};

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  image: PlaceholderImage;
};

export type ServicesSection = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: ServiceItem[];
};

export type PackageItem = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export type PackagesSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: PackageItem[];
};

export type WhyChooseUsSection = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  statLabel: string;
  statValue: string;
  primaryCta: string;
  image: PlaceholderImage;
};

export type TestimonialItem = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: PlaceholderImage;
};

export type TestimonialsSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
};

export type CtaSection = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  supportingText: string;
  image: PlaceholderImage;
};

export type GalleryItem = {
  category: string;
  title: string;
  image: PlaceholderImage;
};

export type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

export type ContactDetails = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  serviceArea: string;
  responseTime: string;
};

export type ContactSection = {
  eyebrow: string;
  title: string;
  description: string;
  callLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  serviceAreaLabel: string;
  responseTimeLabel: string;
  image: PlaceholderImage;
};

export type FormContent = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  genericErrorMessage: string;
};

export type FooterContent = {
  tagline: string;
  copyrightLabel: string;
  secondaryText: string;
  socialLinks: Array<{
    platform: "facebook" | "youtube" | "instagram" | "linkedin";
    label: string;
    href: string;
  }>;
};

export type ClientConfig = {
  businessName: string;
  industry: string;
  location: string;
  domain: string;
  meta: {
    title: string;
    description: string;
  };
  styles: ThemeStyles;
  hero: HeroContent;
  trust: TrustSection;
  services: ServicesSection;
  packages: PackagesSection;
  whyChooseUs: WhyChooseUsSection;
  testimonials: TestimonialsSection;
  cta: CtaSection;
  gallery: GallerySection;
  contact: ContactDetails;
  whatsapp: WhatsAppConfig;
  header: HeaderContent;
  contactSection: ContactSection;
  form: FormContent;
  footer: FooterContent;
};

export const clientConfig: ClientConfig = {
  businessName: "Lika Digital Marketing",
  industry: "Digital Marketing",
  location: "Utah",
  domain: "https://www.lika-digital.com",
  meta: {
    title: "Lika Digital Marketing | Websites Built To Grow Your Online Presence",
    description:
      "Lika Digital Marketing builds conversion-focused websites for businesses that want a stronger online presence, more trust, and more customer inquiries.",
  },
  header: {
    logo: {
      text: "Lika",
      imageSrc: "/images/branding/logo.png",
      imageAlt: "Lika Digital logo",
      width: 220,
      height: 88,
    },
    navItems: [
      {
        label: "Services",
        href: "#services",
      },
      {
        label: "Process",
        href: "#benefits",
      },
      {
        label: "Work",
        href: "#gallery",
      },
      {
        label: "Contact",
        href: "#contact-form",
      },
    ],
    phoneDisplay: "(208) 948-75-48",
    phoneHref: "tel:+12089487548",
    ctaLabel: "Book Free Call",
    ctaHref: "#contact-form",
  },
  styles: {
    mode: "light",
    quickColors: {
      primary: "#9b6df3",
      secondary: "#ffffff",
      accent: "#7da3ff",
    },
    palettes: {
      light: {
        colors: {
          pageBackground: "#f8f7ff",
          sectionBackground: "#ffffff",
          darkBackground: "#120f2f",
          heroBackground: "#0f1028",
          heroOverlay: "radial-gradient(circle_at_top_left,rgba(157,109,243,0.22),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(125,163,255,0.2),transparent_26%),linear-gradient(180deg,rgba(15,16,40,0.98),rgba(10,14,34,1))",
          cardBackground: "rgba(255,255,255,0.98)",
          cardBorder: "rgba(186,170,244,0.38)",
          panelBackground: "rgba(255,255,255,0.88)",
          panelBorder: "rgba(157,109,243,0.16)",
          textPrimary: "#2f3147",
          textMuted: "#70738f",
          textInverse: "#f8f7ff",
          heading: "#4d2d92",
          primary: "#9b6df3",
          primaryHover: "#8958ea",
          primaryForeground: "#ffffff",
          primaryShadow: "rgba(155,109,243,0.24)",
          secondaryBackground: "#f6f3ff",
          secondaryHover: "#eee7ff",
          secondaryForeground: "#4d2d92",
          accent: "#7da3ff",
          accentSoft: "rgba(125,163,255,0.12)",
          accentGlow: "rgba(125,163,255,0.24)",
          whatsapp: "#25d366",
          whatsappHover: "#1ebe5a",
          whatsappForeground: "#ffffff",
          whatsappShadow: "rgba(37,211,102,0.28)",
          successBackground: "#f5efff",
          successForeground: "#6d3ed6",
          errorBackground: "#fff1f6",
          errorForeground: "#c24186",
        },
      },
      dark: {
        colors: {
          pageBackground: "#060816",
          sectionBackground: "rgba(14,19,37,0.74)",
          darkBackground: "#050816",
          heroBackground: "#050816",
          heroOverlay: "radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.14),transparent_26%),linear-gradient(180deg,rgba(6,8,22,0.98),rgba(4,7,18,1))",
          cardBackground: "rgba(13,18,35,0.72)",
          cardBorder: "rgba(255,255,255,0.08)",
          panelBackground: "rgba(255,255,255,0.05)",
          panelBorder: "rgba(255,255,255,0.08)",
          textPrimary: "#f8fafc",
          textMuted: "#94a3b8",
          textInverse: "#f8fafc",
          heading: "#ffffff",
          primary: "#ffffff",
          primaryHover: "#e2e8f0",
          primaryForeground: "#050816",
          primaryShadow: "rgba(255,255,255,0.18)",
          secondaryBackground: "rgba(255,255,255,0.06)",
          secondaryHover: "rgba(255,255,255,0.1)",
          secondaryForeground: "#ffffff",
          accent: "#8b5cf6",
          accentSoft: "rgba(139,92,246,0.16)",
          accentGlow: "rgba(99,102,241,0.3)",
          whatsapp: "#25d366",
          whatsappHover: "#1ebe5a",
          whatsappForeground: "#ffffff",
          whatsappShadow: "rgba(37,211,102,0.28)",
          successBackground: "rgba(6,95,70,0.24)",
          successForeground: "#bbf7d0",
          errorBackground: "rgba(159,18,57,0.2)",
          errorForeground: "#fecdd3",
        },
      },
    },
    typography: {
      bodyFont: "var(--font-geist-sans)",
      headingWeight: "700",
      displayTracking: "-0.04em",
    },
    radii: {
      section: "2rem",
      card: "1.5rem",
      button: "9999px",
    },
    spacing: {
      sectionY: "14rem",
    },
    buttons: {
      primary: "solid",
      secondary: "outline",
    },
    icons: {
      style: "soft-gradient",
    },
    layout: "modern-clean",
  },
  hero: {
    layout: "background-form",
    eyebrow: "",
    title: "Build an online presence that brings in more customers.",
    description:
      "Lika Digital Marketing creates websites for businesses that want to look professional, earn trust fast, and turn more visitors into calls, bookings, and leads.",
    badge: "",
    secondaryLink: {
      label: "Free Demo Website",
      href: "#contact-form",
    },
    backgroundImage: {
      src: "/images/hero/images.webp",
      label: "Hero background image",
      alt: "Lika Digital Marketing hero background",
      accent: "cyan",
    },
    formCard: {
      title: "Get your free strategy call",
      subtitle: "",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone number",
      selectPlaceholder: "Select your city",
      options:[
  "Salt Lake City",
  "West Valley City",
  "Sandy",
  "Draper",
  "Murray",
  "South Jordan",
  "Lehi",
  "Provo",
  "Ogden",
  "Remote / Other",
],
      submitLabel: "Book My Call",
      submittingLabel: "Sending...",
      successMessage: "Thanks! I’ll reach out shortly to schedule your free strategy call.",
      genericErrorMessage: "Something went wrong. Please try again.",
      helperText: "Free call • No pressure • Fast response",
    },
  },
  trust: {
    eyebrow: "",
    title: "How it works",
    description:
      "",
    items: [
      {
        title: "Book your free strategy call",
        description:
          "We talk about your business, your goals, and what your website needs to do better.",
        icon: {
          name: "calendar",
          label: "Call icon",
          accent: "amber",
        },
      },
      {
        title: "We build your strategy",
        description:
          "You get a clear plan for a website that improves your online presence and helps bring in more leads.",
        icon: {
          name: "target",
          label: "Strategy icon",
          accent: "amber",
        },
      },
      {
        title: "We design, build & launch",
        description:
          "We handle the design, build, and launch so you get a website ready to attract and convert customers.",
        icon: {
          name: "pen",
          label: "Launch icon",
          accent: "amber",
        },
      },
    ],
    cardsEyebrow: "",
    cardsTitle: "Why businesses keep moving forward with us",
    cardsDescription:
      "",
    cards: [
      {
        title: "Fast response",
        description: "You get clear communication and quick replies from start to finish.",
        icon: {
          name: "clock",
          label: "Fast response icon",
          accent: "emerald",
        },
      },
      {
        title: "Professional presence",
        description: "Your business looks credible, modern, and ready for serious customers.",
        icon: {
          name: "shield",
          label: "Professional presentation icon",
          accent: "violet",
        },
      },
      {
        title: "Built for leads",
        description: "Every page is designed to help more visitors contact and book with you.",
        icon: {
          name: "target",
          label: "Results icon",
          accent: "amber",
        },
      },
      {
        title: "Done for you",
        description: "We take care of the website work so you can stay focused on running your business.",
        icon: {
          name: "message",
          label: "Done for you icon",
          accent: "amber",
        },
      },
    ],
  },
  services: {
    eyebrow: "",
    title: "Our Services",
    description:
      "From strategy to launch, Lika gives you the core digital services you need to build a stronger online presence and win more customers.",
    ctaLabel: "Book a Free Call",
    ctaHref: "#contact-form",
    items: [
      {
        title: "Web Development",
        description:
          "We build modern websites and landing pages that make your business look credible and help turn visitors into customers.",
        bullets: [
          "Stronger online presence",
          "More calls and inquiries",
        ],
        image: {
          src: "/images/assets/web-dev.png",
          label: "Service image 01",
          alt: "Web development service image",
          accent: "cyan",
        },
      },
      {
        title: "Logo Design",
        description:
          "We create logos that help your business look polished, memorable, and more trustworthy from the first impression.",
        bullets: [
          "More brand recognition",
          "A more professional image",
        ],
        image: {
          src: "/images/assets/logo-design.png",
          label: "Service image 02",
          alt: "Logo design service image",
          accent: "emerald",
        },
      },
      {
        title: "App Development",
        description:
          "We build apps and web-based tools that make it easier for customers to interact with your business and stay engaged.",
        bullets: [
          "Better customer experience",
          "More ways to grow online",
        ],
        image: {
          src: "/images/assets/app-dev.png",
          label: "Service image 03",
          alt: "App development service image",
          accent: "violet",
        },
      },
      {
        title: "Brand Identity",
        description:
          "We build a consistent visual identity so your business feels established, clear, and easy to trust across every touchpoint.",
        bullets: [
          "More trust from visitors",
          "A more consistent brand presence",
        ],
        image: {
          src: "/images/assets/branding.png",
          label: "Service image 04",
          alt: "Brand identity service image",
          accent: "amber",
        },
      },
      {
        title: "Digital Marketing",
        description:
          "We help your business get seen online with marketing that brings the right people to your website and turns attention into leads.",
        bullets: [
          "More qualified traffic",
          "More bookings and customers",
        ],
        image: {
          src: "/images/assets/digital-marketing.png",
          label: "Service image 05",
          alt: "Digital marketing service image",
          accent: "rose",
        },
      },
      {
        title: "Brand Strategy",
        description:
          "We help define the positioning, message, and visual direction that make your business feel more focused, credible, and memorable.",
        bullets: [
          "Clearer market positioning",
          "A stronger brand direction",
        ],
        image: {
          src: "/images/assets/branding.png",
          label: "Service image 06",
          alt: "Brand strategy service image",
          accent: "violet",
        },
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "",
    title: "Why working with us feels simple and strategic",
    description:
      "",
    points: [
      "You get strategy, design, and launch support in one place",
      "Every page is built to guide people toward messaging, calling, or booking",
      "We keep the process clear, collaborative, and easy to move through",
      "Your brand shows up with a cleaner, more credible online presence",
    ],
    statLabel: "",
    statValue: "",
    primaryCta: "Get in touch",
    image: {
      src: "/images/assets/why-choose-us.png",
      label: "Why choose us image",
      alt: "Lika Digital Marketing strategy and website visual",
      accent: "rose",
    },
  },
  testimonials: {
    eyebrow: "",
    title: "Results that a stronger online presence can create",
    description:
      "",
    items: [
      {
        name: "More calls",
        role: "Clearer conversion path",
        location: "",
        quote:
          "A stronger website makes it easier for visitors to take action instead of clicking away.",
        rating: 5,
        avatar: {
          src: "/images/assets/man-one.png",
          label: "MG",
          alt: "Client result avatar 01",
          accent: "cyan",
        },
      },
      {
        name: "More bookings",
        role: "More trust from visitors",
        location: "",
        quote:
          "When your business looks professional online, more people feel comfortable booking with you.",
        rating: 5,
        avatar: {
          src: "/images/assets/woman-one.png",
          label: "DR",
          alt: "Client result avatar 02",
          accent: "emerald",
        },
      },
      {
        name: "More customers",
        role: "Stronger online presence",
        location: "",
        quote:
          "A better online presence helps your business stand out, build trust, and win more work.",
        rating: 5,
        avatar: {
          src: "/images/assets/man-two.png",
          label: "TL",
          alt: "Client result avatar 03",
          accent: "violet",
        },
      },
    ],
  },
  cta: {
    eyebrow: "",
    title: "Ready to get more customers?",
    description:
      "Let’s build a website that makes your business look stronger online and turns more visitors into real inquiries.",
    buttonLabel: "Book a Free Call",
    buttonHref: "#contact-form",
    supportingText: "Fast replies • No pressure",
    image: {
      src: "/images/assets/cta.png",
      label: "CTA background image",
      alt: "Call to action image for Lika Digital Marketing",
      accent: "amber",
    },
  },
  gallery: {
    eyebrow: "",
    title: "Solution-based digital projects",
    description:
      "A look at the kinds of branding, websites, and launch assets we create to help businesses look polished and ready to convert.",
    items: [
      {
        category: "Branding",
        title: "Branding and product presentation",
        image: {
          src: "/images/gallery/web1.png",
          label: "Gallery 01",
          alt: "Branding and product presentation showcase image",
          accent: "cyan",
        },
      },
      {
        category: "Websites",
        title: "Landing page and conversion design",
        image: {
          src: "/images/gallery/web2.png",
          label: "Gallery 02",
          alt: "Landing page and conversion design showcase image",
          accent: "emerald",
        },
      },
      {
        category: "Apps",
        title: "Mobile-first app interface",
        image: {
          src: "/images/gallery/web3.png",
          label: "Gallery 03",
          alt: "Mobile-first app interface showcase image",
          accent: "violet",
        },
      },
      {
        category: "Branding",
        title: "Brand identity system",
        image: {
          src: "/images/gallery/web4.png",
          label: "Gallery 04",
          alt: "Brand identity showcase image",
          accent: "rose",
        },
      },
      {
        category: "Marketing",
        title: "Digital campaign visuals",
        image: {
          src: "/images/gallery/web5.png",
          label: "Gallery 05",
          alt: "Digital marketing showcase image",
          accent: "amber",
        },
      },
      {
        category: "Strategy",
        title: "Creative strategy and planning",
        image: {
          src: "/images/gallery/web6.png",
          label: "Gallery 06",
          alt: "Agency visual showcase image",
          accent: "cyan",
        },
      },
    ],
  },
  packages: {
    eyebrow: "",
    title: "Custom websites built to convert and scale",
    description:
      "Choose the package that fits your business now, then grow from there with strategy, content, and conversion upgrades when you’re ready.",
    items: [
      {
        name: "Starter Website Package",
        price: "$149",
        subtitle: "Ideal for getting your business online with a clean, credible foundation.",
        features: [
          "Simple one-page layout",
          "Mobile-friendly design",
          "Basic contact section",
          "WhatsApp or call CTA",
          "Fast launch setup",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
      },
      {
        name: "Growth Website Package",
        price: "$349",
        subtitle: "Built for businesses that want a stronger presence and more inquiries.",
        features: [
          "Multi-section conversion layout",
          "Custom design styling",
          "Lead-focused contact form",
          "Service highlights and portfolio",
          "On-page SEO foundation",
          "Launch support included",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
        highlighted: true,
      },
      {
        name: "Professional Website Package",
        price: "$649",
        subtitle: "Best for brands that need a polished, strategic, higher-converting website.",
        features: [
          "Advanced custom layout",
          "Brand identity alignment",
          "Stronger calls-to-action",
          "Expanded pages or funnels",
          "Analytics and tracking setup",
          "Priority design revisions",
        ],
        ctaLabel: "Start Project",
        ctaHref: "#contact-form",
      },
    ],
  },
  contact: {
    phoneDisplay: "(208) 948-7548",
    phoneHref: "tel:+12089487548",
    email: "likadigitalmarketing@gmail.com",
    serviceArea: "Utah and remote projects",
    responseTime: "Usually replies within 15 minutes",
  },
  whatsapp: {
    number: "12089487548",
    message: "Hi Lesliee, I want help improving my website and online presence.",
    heroButtonLabel: "Chat on WhatsApp",
    sectionButtonLabel: "Message on WhatsApp",
    desktopLabel: "Chat on WhatsApp",
    mobileLabel: "Chat on WhatsApp",
    subLabel: "Fast replies for new project inquiries",
  },
  contactSection: {
    eyebrow: "",
    title: "Get in touch today!",
    description:
      "Ready to transform your business vision? Contact us for a personalized consultation and unlock your project’s full potential.",
    callLabel: "Call",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    serviceAreaLabel: "Service area",
    responseTimeLabel: "Response time",
    image: {
      src: "/images/assets/why-choose-us%20(2).png",
      label: "Contact image placeholder",
      alt: "Contact section image for Lika Digital Marketing",
      accent: "emerald",
    },
  },
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Full Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Email Address",
    phoneLabel: "Phone Number",
    phonePlaceholder: "Phone Number",
    companyLabel: "Company Name",
    companyPlaceholder: "Company Name",
    serviceLabel: "Service",
    servicePlaceholder: "Service",
    budgetLabel: "Budget",
    budgetPlaceholder: "Budget",
    messageLabel: "Project Details",
    messagePlaceholder: "Describe your project...",
    submitLabel: "Get in Touch",
    submittingLabel: "Sending...",
    successMessage:
      "Thanks — we’ll reach out shortly.",
    genericErrorMessage: "Something went wrong. Please try again.",
  },
  footer: {
    tagline: "Websites, branding, and digital design support for businesses that want a stronger online presence.",
    copyrightLabel: "© 2026 Lika Digital Marketing. All rights reserved.",
    secondaryText: "Helping businesses look credible online and convert more visitors into inquiries.",
    socialLinks: [
      {
        platform: "facebook",
        label: "Facebook",
        href: "https://facebook.com/yourbusiness",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://youtube.com/@yourbusiness",
      },
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://instagram.com/yourbusiness",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com/company/yourbusiness",
      },
    ],
  },
};

export function getWhatsAppLink(whatsapp: Pick<WhatsAppConfig, "number" | "message">) {
  const params = new URLSearchParams({ text: whatsapp.message });
  return `https://wa.me/${whatsapp.number}?${params.toString()}`;
}

function normalizeHexColor(color: string) {
  const trimmed = color.trim();
  const shortHex = /^#([\da-fA-F]{3})$/;

  if (shortHex.test(trimmed)) {
    const [, value] = trimmed.match(shortHex) ?? [];

    if (value) {
      return `#${value
        .split("")
        .map((character) => `${character}${character}`)
        .join("")}`;
    }
  }

  return /^#([\da-fA-F]{6})$/.test(trimmed) ? trimmed : null;
}

function hexToRgb(color: string) {
  const normalized = normalizeHexColor(color);

  if (!normalized) {
    return null;
  }

  return {
    red: Number.parseInt(normalized.slice(1, 3), 16),
    green: Number.parseInt(normalized.slice(3, 5), 16),
    blue: Number.parseInt(normalized.slice(5, 7), 16),
  };
}

function rgbToHex(red: number, green: number, blue: number) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixHexColors(baseColor: string, mixColor: string, amount: number) {
  const baseRgb = hexToRgb(baseColor);
  const mixRgb = hexToRgb(mixColor);

  if (!baseRgb || !mixRgb) {
    return baseColor;
  }

  return rgbToHex(
    baseRgb.red + (mixRgb.red - baseRgb.red) * amount,
    baseRgb.green + (mixRgb.green - baseRgb.green) * amount,
    baseRgb.blue + (mixRgb.blue - baseRgb.blue) * amount,
  );
}

function withAlpha(color: string, alpha: number) {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return color;
  }

  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
}

function getContrastForeground(color: string) {
  const rgb = hexToRgb(color);

  if (!rgb) {
    return "#ffffff";
  }

  const luminance = (0.299 * rgb.red + 0.587 * rgb.green + 0.114 * rgb.blue) / 255;
  return luminance > 0.64 ? "#0f172a" : "#ffffff";
}

export function getThemeStyleVariables(styles: ThemeStyles) {
  const activePalette = styles.palettes[styles.mode];
  const primaryColor = styles.quickColors?.primary ?? activePalette.colors.primary;
  const secondaryColor = styles.quickColors?.secondary ?? activePalette.colors.secondaryBackground;
  const accentColor = styles.quickColors?.accent ?? activePalette.colors.accent;

  return {
    "--theme-mode": styles.mode,
    "--page-background": activePalette.colors.pageBackground,
    "--section-background": activePalette.colors.sectionBackground,
    "--dark-background": activePalette.colors.darkBackground,
    "--hero-background": activePalette.colors.heroBackground,
    "--hero-overlay": activePalette.colors.heroOverlay,
    "--card-background": activePalette.colors.cardBackground,
    "--card-border": activePalette.colors.cardBorder,
    "--panel-background": activePalette.colors.panelBackground,
    "--panel-border": activePalette.colors.panelBorder,
    "--text-primary": activePalette.colors.textPrimary,
    "--text-muted": activePalette.colors.textMuted,
    "--text-inverse": activePalette.colors.textInverse,
    "--heading-color": activePalette.colors.heading,
    "--color-primary": primaryColor,
    "--color-primary-hover": mixHexColors(primaryColor, "#000000", 0.12),
    "--color-primary-foreground": getContrastForeground(primaryColor),
    "--color-primary-shadow": withAlpha(primaryColor, 0.26),
    "--color-secondary-background": secondaryColor,
    "--color-secondary-hover": mixHexColors(secondaryColor, styles.mode === "light" ? "#000000" : "#ffffff", styles.mode === "light" ? 0.04 : 0.08),
    "--color-secondary-foreground": getContrastForeground(secondaryColor),
    "--color-accent": accentColor,
    "--color-accent-soft": withAlpha(accentColor, 0.12),
    "--color-accent-glow": withAlpha(accentColor, 0.18),
    "--color-whatsapp": activePalette.colors.whatsapp,
    "--color-whatsapp-hover": activePalette.colors.whatsappHover,
    "--color-whatsapp-foreground": activePalette.colors.whatsappForeground,
    "--color-whatsapp-shadow": activePalette.colors.whatsappShadow,
    "--color-success-background": activePalette.colors.successBackground,
    "--color-success-foreground": activePalette.colors.successForeground,
    "--color-error-background": activePalette.colors.errorBackground,
    "--color-error-foreground": activePalette.colors.errorForeground,
    "--font-body": styles.typography.bodyFont,
    "--font-heading-weight": styles.typography.headingWeight,
    "--tracking-display": styles.typography.displayTracking,
    "--radius-section": styles.radii.section,
    "--radius-card": styles.radii.card,
    "--radius-button": styles.radii.button,
    "--section-space": styles.spacing.sectionY,
  } satisfies Record<string, string>;
}
