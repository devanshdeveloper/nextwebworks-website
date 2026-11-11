// section: book-preparation
import Link from 'next/link';

export default function BookPreparationSection() {
  const checklists = [
    'Active client requirements document, scope list, or RFP',
    'Figma design links or visual references (if available)',
    'Target delivery dates and platform preferences',
    'Known third-party integrations (payment gateways, CRMs, APIs)',
  ];

  return (
    <section
      id="book-preparation"
      data-section="book-preparation"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                Meeting Preparation
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mt-1">
                What to Have Ready for the Review
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-mono font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
            >
              Prefer to send written brief? →
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {checklists.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-[#CBD5E1]"
              >
                <span className="text-[#10B981] font-bold" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

