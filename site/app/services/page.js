import ServicesHeroSection from '../_components/services/ServicesHeroSection.js';
import ServicesCapabilitiesSection from '../_components/services/ServicesCapabilitiesSection.js';
import ServicesProcessSection from '../_components/services/ServicesProcessSection.js';
import ServicesStackMatrixSection from '../_components/services/ServicesStackMatrixSection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { servicesContent } from '@/content/services.js';

export const metadata = {
  title: 'Engineering Capabilities & Technical Specs',
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
    <div>
      <Schema schema={[faqSchema]} />
      <ServicesHeroSection />
      <ServicesCapabilitiesSection />
      <ServicesProcessSection />
      <ServicesStackMatrixSection content={{ platforms: servicesContent.stackMatrix }} />
      <FAQSection content={servicesContent.faqs} />
      <FinalCTABanner content={servicesContent.ctaBanner} />
      <ContactFormSection content={servicesContent.contactForm} />
    </div>
  );
}
