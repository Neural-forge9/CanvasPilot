import type {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  LandingPage,
  LandingPageSection,
  PricingSection,
} from "@/types/landing-page";

type LandingPagePreviewProps = {
  page: LandingPage;
};

export function LandingPagePreview({ page }: LandingPagePreviewProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Landing Page Preview</h2>
        <p className="text-sm leading-6 text-slate-600">
          Rendering structured data for {page.productName}.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        {page.sections.map((section) => (
          <SectionPreview key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

function SectionPreview({ section }: { section: LandingPageSection }) {
  switch (section.type) {
    case "hero":
      return <HeroPreview section={section} />;
    case "features":
      return <FeaturesPreview section={section} />;
    case "pricing":
      return <PricingPreview section={section} />;
    case "faq":
      return <FaqPreview section={section} />;
    case "cta":
      return <CtaPreview section={section} />;
  }
}

function HeroPreview({ section }: { section: HeroSection }) {
  return (
    <article className="space-y-4 border-b border-slate-200 bg-slate-950 p-8 text-white">
      <p className="text-sm font-medium text-cyan-300">{section.eyebrow}</p>
      <div className="space-y-3">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight">
          {section.headline}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          {section.subheadline}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950">
          {section.primaryCta}
        </span>
        <span className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-white">
          {section.secondaryCta}
        </span>
      </div>
    </article>
  );
}

function FeaturesPreview({ section }: { section: FeaturesSection }) {
  return (
    <article className="space-y-4 border-b border-slate-200 p-8">
      <h3 className="text-2xl font-semibold">{section.title}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {section.features.map((feature) => (
          <div
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            key={feature.title}
          >
            <h4 className="font-semibold">{feature.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function PricingPreview({ section }: { section: PricingSection }) {
  return (
    <article className="space-y-4 border-b border-slate-200 p-8">
      <h3 className="text-2xl font-semibold">{section.title}</h3>
      <div className="max-w-sm rounded-lg border border-slate-200 p-5">
        <p className="font-medium">{section.planName}</p>
        <p className="mt-2 text-3xl font-semibold">{section.price}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {section.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function FaqPreview({ section }: { section: FaqSection }) {
  return (
    <article className="space-y-4 border-b border-slate-200 p-8">
      <h3 className="text-2xl font-semibold">{section.title}</h3>
      <div className="space-y-4">
        {section.questions.map((item) => (
          <div key={item.question}>
            <h4 className="font-semibold">{item.question}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function CtaPreview({ section }: { section: CtaSection }) {
  return (
    <article className="space-y-4 bg-cyan-50 p-8">
      <h3 className="max-w-2xl text-2xl font-semibold">{section.headline}</h3>
      <p className="max-w-xl text-sm leading-6 text-slate-600">
        {section.description}
      </p>
      <span className="inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white">
        {section.buttonLabel}
      </span>
    </article>
  );
}
