// section: work-detail-highlights
export default function WorkDetailHighlightsSection({ work }) {
  const highlights = work.highlights || [
    'Sub-second page transitions and deterministic state synchronization',
    'Custom webhook pipelines and third-party API integration',
    'Full test coverage with zero layout shift on mobile and desktop viewports',
  ];

  return (
    <section
      id="work-detail-highlights"
      data-section="work-detail-highlights"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Deliverable Features
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Verified Technical Highlights
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Key architectural components delivered in this production release.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-8">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-5 text-xs text-slate-800 dark:text-[#E2E8F0] space-y-3"
              >
                <span className="text-[#10B981] font-bold text-base" aria-hidden="true">▪</span>
                <span className="leading-relaxed font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

