"use client";

import { useMemo, useState } from "react";

import { LandingPagePreview } from "@/components/landing-page-preview";
import { PromptPanel } from "@/components/prompt-panel";
import { SectionInspector } from "@/components/section-inspector";
import type { LandingPage } from "@/types/landing-page";

type WebsiteCanvasProps = {
  page: LandingPage;
};

export function WebsiteCanvas({ page }: WebsiteCanvasProps) {
  const [selectedSectionId, setSelectedSectionId] = useState(
    page.sections[0]?.id ?? "",
  );

  const selectedSection = useMemo(
    () => page.sections.find((section) => section.id === selectedSectionId),
    [page.sections, selectedSectionId],
  );

  return (
    <main className="grid min-h-screen gap-4 bg-slate-100 p-4 text-slate-950 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <PromptPanel />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <LandingPagePreview
          onSelectSection={setSelectedSectionId}
          page={page}
          selectedSectionId={selectedSectionId}
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <SectionInspector section={selectedSection} />
      </div>
    </main>
  );
}
