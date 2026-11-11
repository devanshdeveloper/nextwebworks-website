// section: work-standards
export default function WorkStandardsSection() {
  const standards = [
    {
      title: 'Zero Stock Visuals',
      tag: 'Strict Vector Discipline',
      desc: 'All graphics are in-house vector SVGs adhering to strict byte budgets (<= 5 KB). Zero generic stock vectors or corporate clutter.',
    },
    {
      title: 'Sub-Second Performance',
      tag: 'Core Web Vitals',
      desc: 'Architected with React Server Components, image dimension constraints, and zero layout shift for green PageSpeed scores across devices.',
    },
    {
      title: 'Confidential Handoff',
      tag: 'White-Label Ownership',
      desc: 'Code is pushed directly to your organization’s GitHub repository with documentation, environment examples, and zero NWW watermarks.',
    },
    {
      title: '14-Day Defect Warranty',
      tag: 'Production Guarantee',
      desc: 'Every full build includes a two-week post-launch defect fix window with scheduled check-ins on Day 7 and Day 14. We stand behind our code.',
    },
  ];

  return (
    <section
      id="work-standards"
      data-section="work-standards"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Engineering Verification
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Production Standards Baked Into Every Build
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            We build and test against strict architectural constraints before any client review link is shared.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std) => (
            <div
              key={std.title}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3"
            >
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                {std.tag}
              </span>
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {std.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

