import WorkHeroSection from '../_components/work/WorkHeroSection.js';
import WorkStandardsSection from '../_components/work/WorkStandardsSection.js';
import WorkShowcaseGridSection from '../_components/work/WorkShowcaseGridSection.js';
import WorkProcessSection from '../_components/work/WorkProcessSection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
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
    <div>
      <Schema schema={[faqSchema]} />
      <WorkHeroSection />
      <WorkStandardsSection />
      <WorkShowcaseGridSection />
      <WorkProcessSection />
      <FAQSection content={workContent.faqs} />
      <FinalCTABanner content={workContent.ctaBanner} />
      <ContactFormSection content={workContent.contactForm} />
    </div>
  );
}
