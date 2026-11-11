// section: service-detail-hero
import Link from 'next/link';

export default function ServiceDetailHeroSection({ service }) {
  return (
    <section
      id="service-detail-hero"
      data-section="service-detail-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">{service.title}</span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              {service.title ? `${service.title} Spec` : 'Technical Specification'}
            </span>
            <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-slate-600 dark:text-[#94A3B8]">
              {service.tag || 'White-Label Delivery'}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {service.title}
          </h1>

          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {service.summary || service.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              Scope {service.title} With Engineering →
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ← Back to All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

