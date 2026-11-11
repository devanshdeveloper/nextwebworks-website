// section: work-detail-hero
import Link from 'next/link';

export default function WorkDetailHeroSection({ work }) {
  // Respect white-label confidentiality: mask client unless explicitly marked publishable
  const clientDisplay = work.clientPublishable && work.client ? work.client : 'Confidential Agency Partner';

  return (
    <section
      id="work-detail-hero"
      data-section="work-detail-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Work</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">{work.title}</span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Deliverable Case Study
            </span>
            <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-slate-600 dark:text-[#94A3B8]">
              {work.badge || 'Production Platform'}
            </span>
            <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-slate-500 dark:text-[#64748B]">
              Client: {clientDisplay}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {work.title}
          </h1>

          <p className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
            {work.stack}
          </p>

          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {work.overview || work.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              Discuss a Build Like This →
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← Back to All Deliverables
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
