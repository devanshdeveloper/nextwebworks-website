import ContactHeroSection from '../_components/contact/ContactHeroSection.js';
import ContactExpectationsSection from '../_components/contact/ContactExpectationsSection.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import ContactChannelsSection from '../_components/contact/ContactChannelsSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { contactContent } from '@/content/contact.js';

export const metadata = buildRouteMetadata({
  title: 'Send an Agency Dev Brief',
  description:
    'Submit your client dev brief for a fixed-price quote within 24 hours. Confidential white-label evaluation under strict mutual NDA protection.',
  path: '/contact',
});

export default function ContactPage() {
  const jsonLd = buildLinkedGraph({
    path: '/contact',
    title: 'Send an Agency Dev Brief | Next Web Works',
    description: metadata.description,
    pageType: 'ContactPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    includeOrgAndSite: false,
  });

  return (
    <div>
      <Schema schema={jsonLd} />
      <ContactHeroSection />
      <ContactExpectationsSection />
      <ContactFormSection content={contactContent.contactForm} />
      <ContactChannelsSection />
      <FinalCTABanner content={contactContent.ctaBanner} />
    </div>
  );
}
