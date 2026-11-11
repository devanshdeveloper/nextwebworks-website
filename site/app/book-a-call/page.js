import CalEmbed from './_components/CalEmbed.js';

export const metadata = {
  title: 'Book a 20-Minute Technical Discovery Call | Next Web Works',
  description:
    'Schedule a 20-minute scoping call directly with our founder. We review your client briefs, confirm stack fit, and deliver a fixed-scope quote in 24 hours.',
  alternates: { canonical: 'https://nextwebworks.in/book-a-call' },
};

export default function BookACallPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Discovery Schedule</span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Book a 20-Minute Technical Review
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Direct call with our founder. No sales pitch. We’ll review your active client briefs, match stacks, and provide a fixed-scope pilot quote within 24 hours.
        </p>

        {/* 3-Point Call Agenda */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 text-left pt-4">
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">01 // BRIEF REVIEW</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Review client requirements & Figma files</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB] dark:text-[#60A5FA]">02 // STACK FIT</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Confirm platform, CMS, and architecture</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#10B981]">03 // 24H QUOTE</span>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">Deliver fixed-price pilot proposal</p>
          </div>
        </div>

        {/* Cal.com Scheduling Container */}
        <CalEmbed />
      </div>
    </div>
  );
}
