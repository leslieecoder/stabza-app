import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { StickyWhatsAppButton } from "@/components/StickyWhatsAppButton";
import { TrustBenefits } from "@/components/TrustBenefits";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "../components/Footer";
import { clientConfig } from "@/config/client";

export default function Home() {
  const { businessName, contact, contactSection, cta, footer, form, gallery, header, hero, packages, services, trust, whatsapp, whyChooseUs } = clientConfig;

  return (
    <main className="page-stack flex-1 bg-(--page-background) text-(--text-primary)">
      <Navbar header={header} />

      <section
        id="home"
        className="relative overflow-hidden scroll-mt-32 bg-[#b3a2e4] pt-28"
      >
        <div className="hero-gradient-bg absolute inset-0" />
        <div className="hero-gradient-orb hero-gradient-orb-one absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#9abaff]/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="hero-gradient-orb hero-gradient-orb-two absolute -right-16 top-24 h-80 w-80 rounded-full bg-[#b79aed]/18 blur-3xl sm:h-112 sm:w-md" />
        <div className="hero-gradient-orb hero-gradient-orb-three absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#f4bfd6]/18 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_78%_18%,rgba(154,186,255,0.1),transparent_20%),linear-gradient(180deg,rgba(66,52,111,0.12),rgba(66,52,111,0.28)_62%,rgba(66,52,111,0.46))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[70px_70px] opacity-[0.12]" />

        <Hero hero={hero} whatsapp={whatsapp} />

        <div aria-hidden="true" className="hero-wave pointer-events-none absolute inset-x-0 -bottom-px -mb-px h-12 sm:h-16 lg:h-20">
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="absolute inset-0 block h-full w-full"
          >
            <path
              d="M0,32L60,42.7C120,53,240,75,360,90.7C480,107,600,117,720,106.7C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
              fill="#f4efff"
              opacity="0.98"
            />
            <path
              d="M0,58.7L60,74.7C120,91,240,123,360,128C480,133,600,107,720,101.3C840,96,960,112,1080,117.3C1200,123,1320,117,1380,112L1440,107V160H1380C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160H0Z"
              fill="#f4efff"
              opacity="0.78"
            />
          </svg>
        </div>
      </section>

      <Services section={services} />
      <WhyChooseUs section={whyChooseUs} />
      <TrustBenefits section={trust} />
      <Gallery section={gallery} />
      <ContactForm section={contactSection} form={form} contact={contact} services={services.items} whatsapp={whatsapp} />
      <Packages section={packages} />
      <CTASection section={cta} />
      <Footer businessName={businessName} contact={contact} footer={footer} header={header} />
      <StickyWhatsAppButton whatsapp={whatsapp} />
    </main>
  );
}
