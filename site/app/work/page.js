import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import WorkShowcaseSection from '../_components/WorkShowcaseSection.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'Illustrative Work Samples & Technical Deliverables | Next Web Works',
  description:
    'Explore illustrative technical builds delivered under strict white-label agreements: B2B client dashboards, headless e-commerce, and cross-platform mobile apps.',
  alternates: { canonical: 'https://nextwebworks.in/work' },
};

export default function WorkPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Portfolio & Capabilities</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Illustrative Technical Builds
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#94A3B8]">
          Because we operate strictly under agency white-label NDA, these sample projects demonstrate our technical architecture without violating confidentiality.
        </p>
      </div>
      <WorkShowcaseSection content={homeContent.workShowcase} />
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}
