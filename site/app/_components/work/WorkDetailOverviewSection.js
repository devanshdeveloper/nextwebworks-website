// section: work-detail-overview
export default function WorkDetailOverviewSection({ work }) {
  const highlights = [
    {
      label: 'ARCHITECTURE',
      title: 'Scalable System Architecture',
      desc: 'Engineered for sub-second page performance, zero layout shifts, and multi-tenant isolation.',
    },
    {
      label: 'DATA INTEGRITY',
      title: 'Atomic Transaction Pipelines',
      desc: 'Robust schema designs and API workflows with automated rollbacks and deterministic consistency.',
    },
    {
      label: 'HANDOFF',
      title: 'Full Repository Transfer',
      desc: 'Clean, documented code pushed directly to client repositories with zero proprietary dependencies.',
    },
  ];

  return (
    <section
      id="work-detail-overview"
      data-section="work-detail-overview"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Engineering Scope
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Platform Capabilities & Implementation
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Architectural breakdown of technical requirements, integrations, and production standards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3"
            >
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                {item.label}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
