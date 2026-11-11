// section: about-s2-principles
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function AboutPrinciplesSection({ content }) {
  return (
    <section data-section="about-s2-principles" className="py-16 md:py-24 border-t border-slate-200 dark:border-[#1E293B]/60 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 4 Core Engineering Principles */}
        <div>
          <MotionFadeIn y={20} className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Operational Standards
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Four Core Engineering Principles
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
              The architectural rules and client commitments that govern every line of code we ship.
            </p>
          </MotionFadeIn>

          <MotionStagger
            itemSelector=".principle-card"
            stagger={0.08}
            y={20}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {content.principles.map((principle) => (
              <div
                key={principle.number}
                className="principle-card flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs transition-colors hover:-translate-y-0.5 hover:border-[#2563EB]/50"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                    {principle.number}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </MotionStagger>
        </div>

        {/* 4 What We Do NOT Do Boundaries */}
        <div>
          <MotionFadeIn y={20} className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-rose-500 font-semibold">
              Clear Boundaries
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What We Do NOT Do
            </h2>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
              We protect our partners by being transparent about what we deliberately refuse to do.
            </p>
          </MotionFadeIn>

          <MotionStagger
            itemSelector=".boundary-card"
            stagger={0.08}
            y={20}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {content.boundaries.map((boundary) => (
              <div
                key={boundary.title}
                className="boundary-card rounded-2xl border border-rose-200/80 dark:border-rose-950/60 bg-rose-50/40 dark:bg-[#0F172A] p-6 space-y-2 shadow-xs transition-colors hover:border-rose-400"
              >
                <div className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold" aria-hidden="true">✕</span>
                  <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                    {boundary.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {boundary.description}
                </p>
              </div>
            ))}
          </MotionStagger>
        </div>

        {/* Engineering Studio & Operations Box with MotionFadeIn */}
        <MotionFadeIn y={20} className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-8 md:p-10 space-y-4 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-[#1E293B] pb-6">
            <div>
              <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider font-semibold">Engineering Operations</span>
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1">Indore Engineering Studio</h3>
            </div>
            <span className="inline-flex items-center rounded-full bg-slate-200 dark:bg-[#0F172A] px-3.5 py-1 text-xs font-mono text-slate-800 dark:text-[#E2E8F0]">
              UTC+05:30 · Indian Standard Time
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Time Zone Coverage</p>
              <p>Operating Mon–Fri 10:00 AM – 7:00 PM IST, providing synchronous afternoon overlap with UK/Europe and morning overlap with US Eastern agencies.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Infrastructure Standards</p>
              <p>Fiber optic redundant power, automated continuous deployment pipelines on Vercel and AWS, and strict end-to-end repository encryption.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Confidentiality Guarantee</p>
              <p>Zero client logos, zero portfolio bragging rights. Commits delivered under developer handles or authored under agency identities.</p>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
