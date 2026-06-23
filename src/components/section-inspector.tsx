import type { LandingPageSection } from "@/types/landing-page";

type SectionInspectorProps = {
  section: LandingPageSection | undefined;
};

export function SectionInspector({ section }: SectionInspectorProps) {
  if (!section) {
    return (
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Section Inspector</h2>
        <p className="text-sm leading-6 text-slate-600">
          Select a section to inspect its data.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Section Inspector</h2>
        <p className="text-sm leading-6 text-slate-600">
          Currently selected section data.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Section
        </p>
        <p className="mt-1 font-semibold">{section.title}</p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Type
        </p>
        <p className="mt-1 font-mono text-sm">{section.type}</p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-950 p-3 text-slate-50">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Raw data
        </p>
        <pre className="mt-3 max-h-[460px] overflow-auto whitespace-pre-wrap text-xs leading-5">
          {JSON.stringify(section, null, 2)}
        </pre>
      </div>
    </section>
  );
}
