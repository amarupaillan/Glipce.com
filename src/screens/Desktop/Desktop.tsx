import React from "react";
import { AnnouncementBanner } from "../../components/sections/AnnouncementBanner";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { TrustedBySection } from "../../components/sections/TrustedBySection";
import { FeaturesCardSection } from "../../components/sections/FeaturesCardSection";
import { InterfaceSection } from "../../components/sections/InterfaceSection";
import { PricingSection } from "../../components/sections/PricingSection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";
import { FaqSection } from "../../components/sections/FaqSection";
import { CtaSection } from "../../components/sections/CtaSection";
import { FooterSection } from "../../components/sections/FooterSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-black">
      <AnnouncementBanner />
      <Header />
      <HeroSection />
      <TrustedBySection />
      <FeaturesCardSection />
      <InterfaceSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
};
