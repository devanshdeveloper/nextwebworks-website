// section: contact-channels
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function ContactChannelsSection() {
  return (
    <section
      id="contact-channels"
      data-section="contact-channels"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn
          y={15}
          className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-8 md:p-10 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-semibold">
              DIRECT EMAIL
            </span>
            <p className="font-mono text-sm font-bold text-slate-900 dark:text-white">
              contact@nextwebworks.in
            </p>
            <p className="text-xs text-slate-500 dark:text-[#64748B]">
              Average response time: &lt; 4 hours
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              WHATSAPP MESSENGER
            </span>
            <p className="font-mono text-sm font-bold text-slate-900 dark:text-white">
              +91 79999 34815
            </p>
            <p className="text-xs text-slate-500 dark:text-[#64748B]">
              Direct chat with our principal engineer
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-600 dark:text-[#94A3B8] font-semibold">
              ENGINEERING OFFICE
            </span>
            <p className="font-medium text-sm text-slate-900 dark:text-white">
              Indore, Madhya Pradesh, India
            </p>
            <p className="text-xs text-slate-500 dark:text-[#64748B]">
              IST Business Hours: Mon–Fri, 10:00–19:00
            </p>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
