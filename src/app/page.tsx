import { LandingPagePreview } from "@/components/landing-page-preview";
import { PromptPanel } from "@/components/prompt-panel";
import { SectionInspector } from "@/components/section-inspector";
import { sampleLandingPage } from "@/lib/sample-page";

export default function Home() {
  return (
    <main className="grid min-h-screen gap-4 bg-slate-100 p-4 text-slate-950 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <PromptPanel />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <LandingPagePreview page={sampleLandingPage} />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <SectionInspector />
      </div>
    </main>
  );
}
