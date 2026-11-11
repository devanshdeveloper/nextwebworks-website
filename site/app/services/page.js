import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import FAQSection from '../_components/FAQSection.js';
import ServicesSection from '../_components/ServicesSection.js';
import Schema from '@/components/seo/Schema.js';
import { homeContent } from '@/content/home.js';
import { servicesContent } from '@/content/services.js';

export const metadata = {
  title: 'Engineering Capabilities & Technical Specs | Next Web Works',
  description:
    'Full-service white-label development for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps built in the platform your client already uses.',
  alternates: { canonical: 'https://nextwebworks.in/services' },
};

export default function ServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servicesContent.faqs.items.map((item) => ({
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
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Services & Stacks</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Agency Engineering Capabilities
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Explore the exact architectures, platform integrations, and quality standards we deliver under your brand.
        </p>
      </div>
      <ServicesSection content={homeContent.services} />
      <FAQSection content={servicesContent.faqs} />
      <FinalCTABanner content={servicesContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
