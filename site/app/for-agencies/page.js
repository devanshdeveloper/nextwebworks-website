import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import FAQSection from '../_components/FAQSection.js';
import WorkflowSection from '../_components/WorkflowSection.js';
import PartnershipModelsSection from './_components/PartnershipModelsSection.js';
import Schema from '@/components/seo/Schema.js';
import { forAgenciesContent } from '@/content/forAgencies.js';

export const metadata = {
  title: 'White-Label Partnership Models for Agencies | Next Web Works',
  description:
    'Dedicated dev bench, fixed-price sprints, and scoped pilot builds for marketing agencies. 100% white-label with full non-solicitation guarantees.',
  alternates: { canonical: 'https://nextwebworks.in/for-agencies' },
};

export default function ForAgenciesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: forAgenciesContent.faqs.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="py-8">
      <Schema schema={[faqSchema]} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Agency Partnership</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Built for Agency Margins & Client Peace of Mind
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Say yes to complex client dev pitches without taking on permanent payroll or freelancer risk.
        </p>
      </div>
      <PartnershipModelsSection />
      <WorkflowSection content={forAgenciesContent.workflow} />
      <FAQSection content={forAgenciesContent.faqs} />
      <FinalCTABanner content={forAgenciesContent.ctaBanner} />
      <ContactFormSection content={forAgenciesContent.contactForm} />
    </div>
  );
}
