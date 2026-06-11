import type { LandingPage } from "@/types/landing-page";

export const sampleLandingPage: LandingPage = {
  id: "sample-ai-fitness-coach",
  productName: "FitPilot AI",
  audience: "Busy professionals",
  tone: "premium",
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "Hero",
      eyebrow: "AI fitness coaching for packed schedules",
      headline: "Get a personal training plan that adapts to your workday.",
      subheadline:
        "FitPilot AI builds realistic workouts, recovery plans, and weekly goals around your calendar, energy, and equipment.",
      primaryCta: "Create my plan",
      secondaryCta: "See how it works",
    },
    {
      id: "features",
      type: "features",
      title: "Features",
      features: [
        {
          title: "Calendar-aware workouts",
          description:
            "Plans adjust around meetings, travel days, and short workout windows.",
        },
        {
          title: "Adaptive difficulty",
          description:
            "The plan responds to soreness, missed sessions, and progress signals.",
        },
        {
          title: "Simple weekly targets",
          description:
            "Clear goals keep training focused without turning fitness into another job.",
        },
      ],
    },
    {
      id: "pricing",
      type: "pricing",
      title: "Pricing",
      planName: "Founder Plan",
      price: "$19/month",
      features: [
        "Adaptive weekly plans",
        "Calendar-based scheduling",
        "Progress check-ins",
      ],
    },
    {
      id: "faq",
      type: "faq",
      title: "FAQ",
      questions: [
        {
          question: "Do I need gym equipment?",
          answer:
            "No. FitPilot AI can generate plans for home, gym, travel, or mixed equipment setups.",
        },
        {
          question: "What if I miss a workout?",
          answer:
            "The plan adapts the rest of your week instead of making you restart.",
        },
      ],
    },
    {
      id: "cta",
      type: "cta",
      title: "CTA",
      headline: "Train consistently without rebuilding your routine every week.",
      description:
        "Start with a plan designed around your real schedule, not an ideal one.",
      buttonLabel: "Start free",
    },
  ],
};
