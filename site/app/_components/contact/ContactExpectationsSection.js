// section: contact-expectations
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ContactExpectationsSection() {
  const steps = [
    {
      step: '01',
      title: 'Confidential Review',
      desc: 'All briefs, Figma files, and requirements documents are reviewed under strict mutual NDA standards.',
    },
    {
      step: '02',
      title: 'Direct Engineering Scoping',
      desc: 'Our principal engineer analyzes your stack requirements, technical constraints, and edge-cases directly.',
    },
    {
      step: '03',
      title: 'Fixed-Price Quotation',
      desc: 'We return a clear, milestone-based quotation within 24 hours with locked scopes and zero hourly surprises.',
    },
  ];

  return (
    <section
      id="contact-expectations"
      data-section="contact-expectations"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionStagger
          itemSelector=".expectation-card"
          stagger={0.1}
          y={20}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((s) => (
            <div
              key={s.step}
              className="expectation-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-xs font-bold text-[#10B981]">
                STEP {'//'} {s.step}
              </span>
              <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {s.title}
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {s.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
