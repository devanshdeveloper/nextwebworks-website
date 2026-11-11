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
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Direct Brief Submission</span>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Get a Fixed-Scope Quote in 24 Hours
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600 dark:text-[#94A3B8]">
          Email us directly at <span className="font-mono text-slate-900 dark:text-[#E2E8F0]">contact@nextwebworks.in</span> or message via{' '}
          <a
            href="https://wa.me/917999934815?text=Hi%2C%20I%20run%20an%20agency%20and%20want%20to%20discuss%20white-label%20development.%0A%0APage%3A%20Send%20an%20Agency%20Project%20Brief%20%7C%20Next%20Web%20Works%0ALink%3A%20https%3A%2F%2Fnextwebworks.in%2Fcontact%0ASource%3A%20direct%0AVia%3A%20contact%20page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10B981] underline hover:text-[#059669]"
          >
            WhatsApp (+91 79999 34815)
          </a>.
        </p>
      </div>
      <ContactFormSection content={content} />
    </div>
  );
}
