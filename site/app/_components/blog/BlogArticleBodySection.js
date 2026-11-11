// section: blog-article-body
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BlogArticleBodySection({ cleanContent, callout }) {
  const box = callout || {
    title: 'Need a white-label engineering partner for your agency?',
    desc: 'We deliver custom frontends and web apps directly under your brand with fixed quotes within 24 hours.',
    cta: 'Book a 30-Min Technical Scoping Call →',
    href: '/book-a-call',
  };

  return (
    <section
      id="blog-article-body"
      data-section="blog-article-body"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Mid-Article Agency Callout Box */}
        <MotionFadeIn y={15} className="rounded-xl border border-[#2563EB]/40 bg-slate-50 dark:bg-[#0F172A] p-6 text-sm space-y-2">
          <p className="font-semibold text-slate-900 dark:text-white">
            {box.title}
          </p>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {box.desc}
          </p>
          <div className="pt-2">
            <Link href={box.href || '/book-a-call'} className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] hover:underline font-semibold">
              {box.cta}
            </Link>
          </div>
        </MotionFadeIn>

        {/* Clean Sanitized Article Content (Static for Reading Comfort) */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-[#CBD5E1]"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>
    </section>
  );
}
