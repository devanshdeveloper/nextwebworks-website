import ContactFormSection from '../_components/ContactFormSection.js';

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
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Direct Brief Submission</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get a Fixed-Scope Quote in 24 Hours
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-base text-[#94A3B8]">
          Email us directly at <span className="font-mono text-[#E2E8F0]">contact@nextwebworks.in</span> or complete the brief below.
        </p>
      </div>
      <ContactFormSection content={content} />
    </div>
  );
}
