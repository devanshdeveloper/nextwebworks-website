// section: work-detail-confidentiality
import Link from 'next/link';

export default function WorkDetailConfidentialitySection() {
  return (
    <section
      id="work-detail-confidentiality"
      data-section="work-detail-confidentiality"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              Confidentiality & White-Label Guarantee
            </span>
            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              Strict Mutual Non-Disclosure
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              All technical deliverables are engineered under white-label terms. Client names, commercial agreements, and proprietary source codes remain strictly confidential. Intellectual property is transferred in full to the client organization upon completion.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/for-agencies"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Explore Partnership Terms</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

