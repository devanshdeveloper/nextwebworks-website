// section: service-detail-stack
export default function ServiceDetailStackSection({ service }) {
  const stackItems = service.stackItems || [
    { name: 'Architecture', value: service.tag || 'Modern Web Stack' },
    { name: 'Testing & QA', value: 'Cross-browser & responsive mobile verification' },
    { name: 'Cloud & Deploy', value: 'Vercel, AWS, or Agency preferred cloud' },
    { name: 'Code Handoff', value: 'Direct push to Agency GitHub repository' },
  ];

  return (
    <section
      id="service-detail-stack"
      data-section="service-detail-stack"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Deployment & Governance
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Engineering Infrastructure
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Built directly on your or your client’s infrastructure with full transparency.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-5 text-xs space-y-2"
            >
              <span className="font-mono text-slate-500 dark:text-[#64748B] uppercase tracking-wider font-semibold">
                {item.name}
              </span>
              <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

