// section: services-hero
import Link from 'next/link';

export default function ServicesHeroSection() {
  return (
    <section
      id="services-hero"
      data-section="services-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Services & Stacks
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Agency Engineering Capabilities
          </h1>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Explore the exact architectures, platform integrations, and quality standards we deliver under your brand. Built in the stack your client already uses.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl">
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">01 {'//'} CONFIDENTIAL</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">100% White-Label</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">02 {'//'} PREDICTABLE</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Fixed-Price Quotes</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">03 {'//'} RELIABLE</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">14-Day Warranty</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#10B981]">04 {'//'} FAST TURN</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Quote in 24 Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
