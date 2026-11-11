import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import WorkShowcaseSection from '../_components/WorkShowcaseSection.js';
import FAQSection from '../_components/FAQSection.js';
import Schema from '@/components/seo/Schema.js';
import { homeContent } from '@/content/home.js';
import { workContent } from '@/content/work.js';

export const metadata = {
  title: 'Flagship Products & Technical Deliverables | Next Web Works',
  description:
    'Explore our in-house products and client builds: NWW Headless CMS Kit, ClassyMenu digital dining SaaS, and CeramicSales wholesale inventory ERP.',
  alternates: { canonical: 'https://nextwebworks.in/work' },
};

export default function WorkPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: workContent.faqs.items.map((item) => ({
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
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Portfolio & Capabilities</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Flagship Products & Production Builds
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Explore the proprietary platforms and client deliverables built and maintained by our engineering consultancy.
        </p>
      </div>
      <WorkShowcaseSection content={homeContent.workShowcase} />
      <FAQSection content={workContent.faqs} />
      <FinalCTABanner content={workContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
