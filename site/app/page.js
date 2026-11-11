import { homeContent } from '@/content/home.js';
import Schema from '@/components/seo/Schema.js';
import HeroSection from './_components/HeroSection.js';
import PainPointsSection from './_components/PainPointsSection.js';
import WorkflowSection from './_components/WorkflowSection.js';
import ServicesSection from './_components/ServicesSection.js';
import WorkShowcaseSection from './_components/WorkShowcaseSection.js';
import FAQSection from './_components/FAQSection.js';
import FinalCTABanner from './_components/FinalCTABanner.js';
import ContactFormSection from './_components/ContactFormSection.js';

export const metadata = {
  title: 'Next Web Works | White-Label Engineering Partner for Marketing Agencies',
  description:
    'Dedicated white-label engineering partner for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps delivered under your brand with fixed quotes and zero overhead.',
  alternates: {
    canonical: 'https://nextwebworks.in',
  },
};

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Next Web Works',
    description: 'White-label engineering partner for marketing agencies.',
    url: 'https://nextwebworks.in',
    telephone: '+917999934815',
    priceRange: '$$$$',
    founder: {
      '@type': 'Person',
      name: 'Devansh',
      jobTitle: 'Founder & Principal Engineer',
    },
    openingHours: 'Mo-Fr 10:00-19:00',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeContent.faqs.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Schema schema={[websiteSchema, faqSchema]} />
      <HeroSection content={homeContent.hero} />
      <PainPointsSection content={homeContent.painPoints} />
      <WorkflowSection content={homeContent.workflow} />
      <ServicesSection content={homeContent.services} />
      <WorkShowcaseSection content={homeContent.workShowcase} />
      <FAQSection content={homeContent.faqs} />
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </>
  );
}
