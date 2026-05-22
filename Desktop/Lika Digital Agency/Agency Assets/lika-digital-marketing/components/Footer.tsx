import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import type { ContactDetails, FooterContent, HeaderContent } from "@/config/client";

const socialIconMap = {
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
} as const;

type FooterProps = {
  businessName: string;
  contact: ContactDetails;
  footer: FooterContent;
  header: HeaderContent;
};

export function Footer({ businessName, contact, footer, header }: FooterProps) {
  return (
    <footer className="section-spacing-compact bg-white px-4 text-(--text-primary) sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#efe6ff] pt-10 md:gap-12 md:pt-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a57d5]">{businessName}</p>
          <p className="mt-4 text-2xl font-semibold text-(--heading-color) sm:text-3xl">A creative partner for your next digital move.</p>
          <p className="mt-4 text-base leading-7 text-(--text-muted)">{footer.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-(--text-muted)">
            {header.navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-(--heading-color)">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">Contact</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-(--text-muted)">
            <a href={contact.phoneHref} className="transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-(--heading-color)">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-(--heading-color)">
              {contact.email}
            </a>
            <p>{contact.serviceArea}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-[#efe6ff] pt-6 text-sm text-(--text-muted) sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyrightLabel}</p>
        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-3">
            {footer.socialLinks.map((link) => {
              const Icon = socialIconMap[link.platform];

              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 transform-gpu will-change-transform items-center justify-center rounded-full border border-[#eadfff] bg-[#faf7ff] text-base text-[#7a57d5] transition-[background-color,border-color,color,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#d8cbff] hover:bg-[#f3ecff] hover:text-(--heading-color)"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p>{footer.secondaryText}</p>
        </div>
      </div>
    </footer>
  );
}
