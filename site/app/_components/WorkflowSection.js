// section: home-s3-workflow
import Link from 'next/link';

export default function WorkflowSection({ content }) {
  return (
    <section
      id="home-s3-workflow"
      data-section="home-s3-workflow"
      className="py-20 md:py-28 border-b border-[#1E293B]/60 bg-[#0B0F19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono tracking-wider uppercase text-[#10B981] font-semibold">
            {content.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-relaxed text-[#94A3B8]">
            {content.description}
          </p>
        </div>

        {/* 4-Step Connected Pipeline */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4 relative">
          {content.steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col justify-between">
              {/* Step indicator */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1E293B] bg-[#0F172A] font-mono text-sm font-semibold text-[#10B981]">
                    {step.number}
                  </span>
                  {idx < content.steps.length - 1 && (
                    <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-[#1E293B] to-transparent" />
                  )}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white pt-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1E293B]/60 text-xs font-mono text-[#64748B]">
                Milestone 0{idx + 1} Sign-off
              </div>
            </div>
          ))}
        </div>

        {/* CTA after 4-step workflow */}
        <div className="mt-14 flex items-center justify-between border-t border-[#1E293B]/80 pt-8 flex-wrap gap-4">
          <p className="text-sm text-[#94A3B8]">
            Need to evaluate code quality before committing client retainers?
          </p>
          <Link
            href={content.cta.href}
            className="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors"
          >
            {content.cta.text} →
          </Link>
        </div>
      </div>
    </section>
  );
}
