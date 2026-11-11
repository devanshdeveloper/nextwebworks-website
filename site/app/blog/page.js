import Link from 'next/link';
import { Blog } from '@/lib/cms-kit/blog.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';

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
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981]">Engineering Digest</span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Playbooks for Agency Operators
          </h1>
          <p className="text-base text-[#94A3B8]">
            Pragmatic breakdowns on fixed-price scoping, platform tradeoffs, and white-label engineering delivery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((post) => (
            <article
              key={post._id || post.slug}
              className="flex flex-col justify-between rounded-2xl border border-[#1E293B] bg-[#0F172A] p-6 hover:border-[#2563EB]/60 transition-colors"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#2563EB]">
                  {post.metadata?.category || 'White-Label Engineering'}
                </span>
                <h2 className="font-heading text-xl font-bold text-white hover:text-[#2563EB] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs leading-relaxed text-[#94A3B8] line-clamp-3">
                  {post.excerpt || post.content?.slice(0, 140)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>{new Date(post.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <Link href={`/blog/${post.slug}`} className="text-[#2563EB] hover:underline">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <FinalCTABanner content={homeContent.ctaBanner} />
      </div>
    </div>
  );
}
