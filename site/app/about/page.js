import Link from 'next/link';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'About the Engineering Team & Delivery Standards | Next Web Works',
  description:
    'Meet Devansh, Founder & Lead Engineer at Next Web Works. Our engineering principles, 14-day post-launch warranty, and agency partnership commitments.',
  alternates: { canonical: 'https://nextwebworks.in/about' },
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 rounded-2xl border border-[#1E293B] bg-[#0F172A] p-8 text-center space-y-4">
            <div className="mx-auto w-32 h-32 rounded-full border-2 border-[#2563EB] bg-[#0B0F19] flex items-center justify-center font-mono text-xs text-[#64748B]">
              [FOUNDER HEADSHOT]
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-white">Devansh</h2>
              <p className="font-mono text-xs text-[#10B981]">Founder & Principal Engineer</p>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Operating an engineering consultancy based in Indore, India, dedicated to helping digital agencies scale dev capacity safely.
            </p>
            <div className="rounded-lg border border-dashed border-[#334155] bg-[#0B0F19]/60 p-2 font-mono text-[11px] text-[#64748B]">
              [FOUNDER BIO / STORY TO PROVIDE]
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Engineering Craft</span>
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              An Extension of Your Agency, Not Another Vendor
            </h1>
            <p className="text-sm leading-relaxed text-[#94A3B8]">
              We founded Next Web Works to solve a specific pain: marketing agencies winning high-margin retainers but losing margin and sleep to unreliable technical freelancers.
            </p>
            <div className="border-t border-[#1E293B] pt-4 space-y-2">
              <h3 className="font-heading text-base font-semibold text-white">14-Day Post-Launch Defect Warranty</h3>
              <p className="text-xs text-[#94A3B8]">
                Every full build includes a 14-day defect fix window with scheduled check-ins on Day 7 and Day 14. We own our work until your client is delighted.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
              >
                Talk to the Founder →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
