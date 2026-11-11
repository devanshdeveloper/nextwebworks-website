import Link from 'next/link';
import { Blog } from '@/lib/cms-kit/blog.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';
import { stripHtml, generateBlogCoverSvg } from '@/lib/blog-utils.js';

export const metadata = {
  title: 'Engineering Blog & Agency White-Label Playbooks | Next Web Works',
  description:
    'Tactical guides on agency operations, fixed-price project scoping, and headless CMS architectures for marketing agency operators.',
  alternates: { canonical: 'https://nextwebworks.in/blog' },
};

export default async function BlogIndexPage() {
  const { items } = await Blog.paginate({ page: 1, limit: 10 }).catch(() => ({ items: [] }));

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Engineering Digest</span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Playbooks for Agency Operators
          </h1>
          <p className="text-base text-slate-600 dark:text-[#94A3B8]">
            Pragmatic breakdowns on fixed-price scoping, platform tradeoffs, and white-label engineering delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((post) => {
            const category = post.metadata?.category || 'White-Label Engineering';
            const cleanExcerpt = stripHtml(post.excerpt || post.content, 140);
            const coverSvg = generateBlogCoverSvg(post.slug, category, post.title);

            return (
              <article
                key={post._id || post.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] hover:border-[#2563EB]/60 transition-colors shadow-sm"
              >
                {/* In-House Generated Deterministic SVG Cover Art */}
                <div
                  className="w-full aspect-[1.9/1] overflow-hidden border-b border-slate-200 dark:border-[#1E293B]"
                  dangerouslySetInnerHTML={{ __html: coverSvg }}
                />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                      {category}
                    </span>
                    <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {cleanExcerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#64748B]">
                    <span>{new Date(post.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <Link href={`/blog/${post.slug}`} className="text-[#2563EB] dark:text-[#60A5FA] font-medium hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <FinalCTABanner content={homeContent.ctaBanner} />
      </div>
    </div>
  );
}
