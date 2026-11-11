import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Blog } from '@/lib/cms-kit/blog.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';
import { stripHtml, cleanArticleHtml, generateBlogCoverSvg } from '@/lib/blog-utils.js';

export async function generateStaticParams() {
  const slugs = await Blog.getSlugs({ limit: 20 }).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Next Web Works`,
    description: stripHtml(post.excerpt || post.content, 160),
    alternates: { canonical: `https://nextwebworks.in/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) notFound();

  const category = post.metadata?.category || 'White-Label Engineering';
  const cleanContent = cleanArticleHtml(post.content);
  const coverSvg = generateBlogCoverSvg(post.slug, category, post.title);

  return (
    <article className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link href="/blog" className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] hover:underline">
            ← Back to Engineering Digest
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-slate-500 dark:text-[#64748B]">
            Published on {new Date(post.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · By Devansh
          </p>
        </div>

        <div className="w-full aspect-[1.9/1] overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B]" dangerouslySetInnerHTML={{ __html: coverSvg }} />

        <div className="rounded-xl border border-[#2563EB]/40 bg-slate-50 dark:bg-[#0F172A] p-6 text-sm">
          <p className="font-semibold text-slate-900 dark:text-white">Need a white-label build like this?</p>
          <p className="mt-1 text-xs text-slate-600 dark:text-[#94A3B8]">We build and deliver directly under your agency brand with fixed quotes in 24 hours.</p>
          <div className="mt-3">
            <Link href="/book-a-call" className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] hover:underline">Book a 20-Min Scoping Call →</Link>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-[#CBD5E1]" dangerouslySetInnerHTML={{ __html: cleanContent }} />

        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full border border-[#2563EB] bg-slate-200 dark:bg-[#0B0F19] flex items-center justify-center font-mono text-xs text-slate-700 dark:text-[#64748B]">D</div>
          <div>
            <p className="font-heading text-sm font-bold text-slate-900 dark:text-white">Written by Devansh</p>
            <p className="text-xs text-slate-600 dark:text-[#94A3B8]">Founder & Principal Engineer at Next Web Works.</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <FinalCTABanner content={homeContent.ctaBanner} />
      </div>
    </article>
  );
}
