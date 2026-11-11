// section: work-hero
import Link from 'next/link';

export default function WorkHeroSection() {
  return (
    <section
      id="work-hero"
      data-section="work-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Portfolio & Capabilities
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Flagship Products & Production Builds
          </h1>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Explore the proprietary platforms and client deliverables built and maintained by our engineering consultancy. Confidential white-label architecture delivered to production standards.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl">
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">PROPRIETARY</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">In-House Products</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">DELIVERABLE</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Direct Client Builds</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#10B981]">PROTECTED</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">White-Label NDA</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#10B981]">WARRANTY</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">14-Day Post-Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
