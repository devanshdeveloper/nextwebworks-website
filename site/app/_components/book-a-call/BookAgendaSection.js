// section: book-agenda
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function BookAgendaSection() {
  const agenda = [
    {
      num: '01',
      tag: 'BRIEF REVIEW',
      desc: 'Review client requirements, functional specs & Figma files',
    },
    {
      num: '02',
      tag: 'STACK FIT',
      desc: 'Confirm platform, CMS architecture, and integrations',
    },
    {
      num: '03',
      tag: '24H QUOTE',
      desc: 'Deliver fixed-price pilot proposal with locked milestones',
    },
  ];

  return (
    <section
      id="book-agenda"
      data-section="book-agenda"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Call Agenda
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Happens on the 30-Minute Call
          </h2>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".agenda-card"
          stagger={0.08}
          y={15}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {agenda.map((item) => (
            <div
              key={item.num}
              className="agenda-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-5 text-xs shadow-xs space-y-2 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold">
                {item.num} {'//'} {item.tag}
              </span>
              <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
