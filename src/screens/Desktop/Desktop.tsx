import React from "react";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { FeaturesCardSection } from "../../components/sections/FeaturesCardSection";
import { InterfaceSection } from "../../components/sections/InterfaceSection";
import { PlanCardSection } from "../../components/sections/PlanCardSection";
import { FaqSection } from "../../components/sections/FaqSection";
import { CtaSection } from "../../components/sections/CtaSection";
import { FooterSection } from "../../components/sections/FooterSection";

export const Desktop = (): JSX.Element => {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesCardSection />
      <PlanCardSection />
      <InterfaceSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
};
