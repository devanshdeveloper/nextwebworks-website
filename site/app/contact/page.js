import ContactHeroSection from '../_components/contact/ContactHeroSection.js';
import ContactExpectationsSection from '../_components/contact/ContactExpectationsSection.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import ContactChannelsSection from '../_components/contact/ContactChannelsSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { contactContent } from '@/content/contact.js';

export const metadata = {
  title: 'Send an Agency Project Brief | Next Web Works',
  description:
    'Submit your client dev brief for a fixed-price quote within 24 hours. Confidential white-label evaluation under strict mutual NDA.',
  alternates: { canonical: 'https://nextwebworks.in/contact' },
};

export default function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactExpectationsSection />
      <ContactFormSection content={contactContent.contactForm} />
      <ContactChannelsSection />
      <FinalCTABanner content={contactContent.ctaBanner} />
    </div>
  );
}
