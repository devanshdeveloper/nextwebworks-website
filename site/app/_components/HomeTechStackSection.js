// section: home-tech-stack
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function HomeTechStackSection({ content }) {
  if (!content) return null;

  return (
    <section
      id="home-tech-stack"
      data-section="home-tech-stack"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {content.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".stack-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {content.stacks.map((stack) => (
            <div
              key={stack.id}
              className="stack-card flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-md bg-[#2563EB]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                    {stack.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-[#64748B]">
                    Production Verified
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {stack.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {stack.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#1E293B]/70">
                <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-[#CBD5E1]">
                  {stack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
