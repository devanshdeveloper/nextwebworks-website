import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import FAQSection from '../_components/FAQSection.js';
import ServicesSection from '../_components/ServicesSection.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'Engineering Capabilities & Technical Specs | Next Web Works',
  description:
    'Full-service white-label development for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps built in the platform your client already uses.',
  alternates: { canonical: 'https://nextwebworks.in/services' },
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Services & Stacks</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Agency Engineering Capabilities
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#94A3B8]">
          Explore the exact architectures, platform integrations, and quality standards we deliver under your brand.
        </p>
      </div>
      <ServicesSection content={homeContent.services} />
      <FAQSection content={homeContent.faqs} />
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
