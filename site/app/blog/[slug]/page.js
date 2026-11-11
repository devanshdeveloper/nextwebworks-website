import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Blog } from '@/lib/cms-kit/blog.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';

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
    description: post.excerpt || post.content?.slice(0, 160),
    alternates: { canonical: `https://nextwebworks.in/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) notFound();

  return (
    <article className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link href="/blog" className="font-mono text-xs text-[#2563EB] hover:underline">
            ← Back to Engineering Digest
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-[#64748B]">
            Published on {new Date(post.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · By Devansh
          </p>
        </div>

        {/* Mid-Article Callout */}
        <div className="rounded-xl border border-[#2563EB]/40 bg-[#0F172A] p-6 text-sm">
          <p className="font-semibold text-white">Need a white-label build like this?</p>
          <p className="mt-1 text-xs text-[#94A3B8]">
            We build and deliver directly under your agency brand with fixed quotes in 24 hours.
          </p>
          <div className="mt-3">
            <Link href="/book-a-call" className="font-mono text-xs text-[#2563EB] hover:underline">
              Book a 20-Min Scoping Call →
            </Link>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#CBD5E1] whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1E293B] bg-[#0F172A] p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full border border-[#2563EB] bg-[#0B0F19] flex items-center justify-center font-mono text-xs text-[#64748B]">D</div>
          <div>
            <p className="font-heading text-sm font-bold text-white">Written by Devansh</p>
            <p className="text-xs text-[#94A3B8]">Founder & Principal Engineer at Next Web Works.</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <FinalCTABanner content={homeContent.ctaBanner} />
      </div>
    </article>
  );
}
