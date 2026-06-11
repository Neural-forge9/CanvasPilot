export type LandingPage = {
  id: string;
  productName: string;
  audience: string;
  tone: "clear" | "premium" | "playful";
  sections: LandingPageSection[];
};

export type LandingPageSection =
  | HeroSection
  | FeaturesSection
  | PricingSection
  | FaqSection
  | CtaSection;

type BaseSection = {
  id: string;
  title: string;
};

export type HeroSection = BaseSection & {
  type: "hero";
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
};

export type FeaturesSection = BaseSection & {
  type: "features";
  features: {
    title: string;
    description: string;
  }[];
};

export type PricingSection = BaseSection & {
  type: "pricing";
  planName: string;
  price: string;
  features: string[];
};

export type FaqSection = BaseSection & {
  type: "faq";
  questions: {
    question: string;
    answer: string;
  }[];
};

export type CtaSection = BaseSection & {
  type: "cta";
  headline: string;
  description: string;
  buttonLabel: string;
};
