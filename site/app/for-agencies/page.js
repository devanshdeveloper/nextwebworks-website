import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import FAQSection from '../_components/FAQSection.js';
import WorkflowSection from '../_components/WorkflowSection.js';
import PartnershipModelsSection from './_components/PartnershipModelsSection.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { forAgenciesContent } from '@/content/forAgencies.js';

export const metadata = buildRouteMetadata({
  title: 'Outsource Dev for Agencies',
  description:
    'Scale your agency with a dedicated white-label dev bench or fixed-price sprints. Zero overhead, 24-hour quotes, and strict non-solicitation guarantees.',
  path: '/for-agencies',
});

export default function ForAgenciesPage() {
  const jsonLd = buildLinkedGraph({
    path: '/for-agencies',
    title: 'Outsource Dev for Agencies | Next Web Works',
    description: metadata.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'For Agencies', url: '/for-agencies' },
    ],
    faqs: forAgenciesContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div className="py-8">
      <Schema schema={jsonLd} />
      <MotionFadeIn y={20} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Agency Partnership</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Built for Agency Margins & Client Peace of Mind
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Say yes to complex client dev pitches without taking on permanent payroll or freelancer risk.
        </p>
      </MotionFadeIn>
      <PartnershipModelsSection />
      <WorkflowSection content={forAgenciesContent.workflow} />
      <FAQSection content={forAgenciesContent.faqs} />
      <FinalCTABanner content={forAgenciesContent.ctaBanner} />
      <ContactFormSection content={forAgenciesContent.contactForm} />
    </div>
  );
}
