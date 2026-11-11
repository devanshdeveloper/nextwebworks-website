import { notFound } from 'next/navigation';
import { Blog } from '@/lib/cms-kit/blog.js';
import BlogArticleHeaderSection from '../../_components/blog/BlogArticleHeaderSection.js';
import BlogArticleBodySection from '../../_components/blog/BlogArticleBodySection.js';
import BlogArticleAuthorSection from '../../_components/blog/BlogArticleAuthorSection.js';
import BlogArticleRelatedSection from '../../_components/blog/BlogArticleRelatedSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import { blogContent } from '@/content/blog.js';
import { stripHtml, cleanArticleHtml } from '@/lib/blog-utils.js';

export async function generateStaticParams() {
  const slugs = await Blog.getSlugs({ limit: 20 }).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: stripHtml(post.excerpt || post.content, post.title, 160),
    alternates: { canonical: `https://nextwebworks.in/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) notFound();

  const category = post.metadata?.category || 'White-Label Engineering';
  const cleanContent = cleanArticleHtml(post.content);

  return (
    <article>
      <BlogArticleHeaderSection post={post} category={category} />
      <BlogArticleBodySection cleanContent={cleanContent} callout={blogContent.articleCalloutBySlug?.[slug]} />
      <BlogArticleAuthorSection slug={slug} />
      <BlogArticleRelatedSection currentSlug={slug} />
      <FinalCTABanner content={blogContent.articleCtaBannerBySlug[slug] || blogContent.articleCtaBanner} />
    </article>
  );
}
