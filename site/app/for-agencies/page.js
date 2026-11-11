import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import FAQSection from '../_components/FAQSection.js';
import WorkflowSection from '../_components/WorkflowSection.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'White-Label Partnership Models for Agencies | Next Web Works',
  description:
    'Dedicated dev bench, fixed-price sprints, and scoped pilot builds for marketing agencies. 100% white-label with full non-solicitation guarantees.',
  alternates: { canonical: 'https://nextwebworks.in/for-agencies' },
};

export default function ForAgenciesPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Agency Partnership</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Built for Agency Margins & Client Peace of Mind
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#94A3B8]">
          Say yes to complex client dev pitches without taking on permanent payroll or freelancer risk.
        </p>
      </div>
      <WorkflowSection content={homeContent.workflow} />
      <FAQSection content={homeContent.faqs} />
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
