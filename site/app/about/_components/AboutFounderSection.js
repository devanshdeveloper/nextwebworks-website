// section: about-s1-founder
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import MotionTilt from '@/components/motion/MotionTilt.js';

export default function AboutFounderSection({ content }) {
  return (
    <section data-section="about-s1-founder" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Founder Identity Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={12}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 text-center space-y-4 shadow-sm transition-colors"
            >
              <div className="mx-auto w-32 h-32 rounded-full border-2 border-[#2563EB] bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center font-mono text-xs text-slate-500 dark:text-[#64748B]">
                [FOUNDER HEADSHOT]
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-slate-900 dark:text-white">{content.founder.name}</p>
                <p className="font-mono text-xs font-semibold text-[#10B981]">{content.founder.title}</p>
                <p className="font-mono text-xs text-slate-500 dark:text-[#64748B] mt-0.5">{content.founder.location}</p>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {content.founder.positioning}
              </p>
              <div className="rounded-lg border border-dashed border-slate-300 dark:border-[#334155] bg-slate-50 dark:bg-[#0B0F19]/60 p-3 font-mono text-[11px] text-slate-500 dark:text-[#64748B]">
                [FOUNDER BIO / STORY TO PROVIDE]
              </div>
            </MotionTilt>
          </div>

          {/* Narrative & Positioning */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Engineering Craft</span>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              An Extension of Your Agency, Not Another Vendor
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              We founded Next Web Works to solve a specific, expensive friction point: digital agencies winning high-margin retainers but losing sleep and margin to unreliable freelancers and bloated payroll overhead.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              We operate as your dedicated technical partner. When you pitch a custom web application, enterprise WordPress build, or React Native mobile platform, we review your specifications, verify technical constraints, and deliver the production code strictly under your brand.
            </p>

            <div className="border-t border-slate-200 dark:border-[#1E293B] pt-4 space-y-2">
              <h2 className="font-heading text-base font-semibold text-slate-900 dark:text-white">14-Day Post-Launch Defect Warranty</h2>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Every full build includes a 14-day defect fix window with scheduled check-ins on Day 7 and Day 14. We own our work until your account team and client are completely delighted.
              </p>
            </div>

            <div className="pt-2">
              <MotionMagnetic>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors shadow-sm"
                >
                  Talk Directly With Devansh →
                </Link>
              </MotionMagnetic>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
