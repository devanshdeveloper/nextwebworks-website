import ContactHeroSection from '../_components/contact/ContactHeroSection.js';
import ContactExpectationsSection from '../_components/contact/ContactExpectationsSection.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import ContactChannelsSection from '../_components/contact/ContactChannelsSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'Send an Agency Project Brief | Next Web Works',
  description:
    'Submit your client dev brief for a fixed-price quote within 24 hours. Confidential white-label evaluation under strict mutual NDA.',
  alternates: { canonical: 'https://nextwebworks.in/contact' },
};

export default function ContactPage() {
  const content = {
    leadIn: 'Send Us Your Project Brief',
    description:
      'Have an active client RFP, Figma design, or technical specification? Submit your details below for a fixed quote within 24 business hours.',
  };

  return (
    <div>
      <ContactHeroSection />
      <ContactExpectationsSection />
      <ContactFormSection content={content} />
      <ContactChannelsSection />
      <FinalCTABanner content={homeContent.ctaBanner} />
    </div>
  );
}
