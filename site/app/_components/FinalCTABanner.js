// section: home-s7-cta-banner
import Link from 'next/link';

export default function FinalCTABanner({ content }) {
  return (
    <section
      id="home-s7-cta-banner"
      data-section="home-s7-cta-banner"
      className="py-16 md:py-24 border-b border-[#1E293B]/60 bg-[#0B0F19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#2563EB]/40 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] p-8 md:p-14 text-center shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40"
            aria-hidden="true"
          >
            <div className="h-64 w-96 rounded-full bg-[#2563EB]/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-2xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#0B0F19] border border-[#1E293B] px-3.5 py-1 text-xs font-mono text-[#10B981]">
              Discovery Call · Direct with Founder
            </span>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {content.title}
            </h2>

            <p className="text-base leading-relaxed text-[#94A3B8]">
              {content.description}
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                href={content.primaryButton.href}
                className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] transition-all duration-200 hover:scale-[1.02]"
              >
                {content.primaryButton.text}
              </Link>
            </div>

            <p className="text-xs font-mono text-[#64748B]">
              Fixed quote within 24 business hours · Zero client contact · Strict NDA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
