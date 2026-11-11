import Link from 'next/link';

export const metadata = {
  title: 'Call Scheduled | Next Web Works',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/10 text-2xl text-[#10B981]">
        ✓
      </span>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Discovery Call Confirmed
      </h1>
      <p className="mt-4 max-w-md text-sm text-[#94A3B8]">
        A calendar invitation with Google Meet link has been sent to your email. We look forward to reviewing your agency client brief.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/for-agencies"
          className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
        >
          Explore How We Work →
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-[#1E293B] bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-[#E2E8F0] hover:bg-[#1E293B] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
