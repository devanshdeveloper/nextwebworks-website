import Link from 'next/link';

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
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Discovery Schedule</span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Book a 20-Minute Technical Review
        </h1>
        <p className="mx-auto max-w-2xl text-base text-[#94A3B8]">
          Direct call with our founder. No sales pitch. We’ll review your active client briefs, match stacks, and provide a fixed-scope pilot quote within 24 hours.
        </p>

        {/* 3-Point Call Agenda */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 text-left pt-4">
          <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB]">01 // BRIEF REVIEW</span>
            <p className="mt-1 font-medium text-white">Review client requirements & Figma files</p>
          </div>
          <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#2563EB]">02 // STACK FIT</span>
            <p className="mt-1 font-medium text-white">Confirm platform, CMS, and architecture</p>
          </div>
          <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] p-4 text-xs">
            <span className="font-mono text-[#10B981]">03 // 24H QUOTE</span>
            <p className="mt-1 font-medium text-white">Deliver fixed-price pilot proposal</p>
          </div>
        </div>

        {/* Cal.com Scheduling Container */}
        <div className="mt-12 rounded-2xl border border-[#1E293B] bg-[#0F172A] p-8 md:p-12 text-center space-y-6">
          <p className="text-sm text-[#E2E8F0]">Select an open slot directly on our calendar:</p>
          <div>
            <a
              href="https://cal.com/nextwebworks/intro-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              Open Calendar (cal.com/nextwebworks) →
            </a>
          </div>
          <p className="text-xs font-mono text-[#64748B]">
            Prefer WhatsApp? Message directly at{' '}
            <a href="https://wa.me/917999934815" className="text-[#10B981] underline">
              +91 79999 34815
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
