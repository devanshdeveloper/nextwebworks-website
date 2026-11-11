import AboutFounderSection from './_components/AboutFounderSection.js';
import AboutPrinciplesSection from './_components/AboutPrinciplesSection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { homeContent } from '@/content/home.js';
import { aboutContent } from '@/content/about.js';

export const metadata = {
  title: 'About the Engineering Team & Delivery Standards | Next Web Works',
  description:
    'Meet Devansh, Founder & Lead Engineer at Next Web Works. Four core engineering principles, 14-day post-launch warranty, and Indore engineering operations.',
  alternates: { canonical: 'https://nextwebworks.in/about' },
};

export default function AboutPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutContent.faqs.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="py-4">
      <Schema schema={[faqSchema]} />
      <AboutFounderSection content={aboutContent} />
      <AboutPrinciplesSection content={aboutContent} />
      <FAQSection content={aboutContent.faqs} />
      <FinalCTABanner content={aboutContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
