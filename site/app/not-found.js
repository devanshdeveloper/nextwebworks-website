import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-[#10B981]">404 Error</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-[#94A3B8]">
        The engineering route you are looking for does not exist or has been relocated.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/book-a-call"
          className="rounded-lg border border-[#1E293B] bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-[#E2E8F0] hover:bg-[#1E293B] transition-colors"
        >
          Book a 20-Min Call
        </Link>
      </div>
    </div>
  );
}
