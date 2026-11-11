import { notFound } from 'next/navigation';
import { Blog } from '@/lib/cms-kit/blog.js';
import Schema from '@/components/seo/Schema.js';
import BlogArticleHeaderSection from '../../_components/blog/BlogArticleHeaderSection.js';
import BlogArticleBodySection from '../../_components/blog/BlogArticleBodySection.js';
import BlogArticleAuthorSection from '../../_components/blog/BlogArticleAuthorSection.js';
import BlogArticleRelatedSection from '../../_components/blog/BlogArticleRelatedSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import { blogContent } from '@/content/blog.js';
import { cleanArticleHtml } from '@/lib/blog-utils.js';
import { detectContentFormat } from '@/lib/markdown/format.js';
import { processMarkdown } from '@/lib/markdown/pipeline.js';
import { MarkdownContent } from '@/lib/markdown/renderer.js';
import { getArticleReadingTime, getArticleDescription } from '@/lib/markdown/helpers.js';

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
    description: getArticleDescription(post, 160),
    alternates: { canonical: `https://nextwebworks.in/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) notFound();

  const category = post.metadata?.category || 'White-Label Engineering';
  const format = detectContentFormat(post.content, post);
  const isMarkdown = format === 'markdown';
  const readingTime = getArticleReadingTime(post.content).text;
  const jsonLd = Blog.generateJSONLD(post);

  let markdownElement = null;
  let headings = [];
  let cleanContent = '';

  if (isMarkdown) {
    const processed = await processMarkdown(post.content, post.title);
    headings = processed.headings;
    markdownElement = <MarkdownContent hast={processed.hast} />;
  } else {
    cleanContent = cleanArticleHtml(post.content);
  }

  return (
    <article>
      <Schema schema={jsonLd} />
      <BlogArticleHeaderSection post={post} category={category} readingTime={readingTime} />
      <BlogArticleBodySection
        cleanContent={cleanContent}
        markdownElement={markdownElement}
        isMarkdown={isMarkdown}
        headings={headings}
        callout={blogContent.articleCalloutBySlug?.[slug]}
      />
      <BlogArticleAuthorSection slug={slug} />
      <BlogArticleRelatedSection currentSlug={slug} />
      <FinalCTABanner content={blogContent.articleCtaBannerBySlug[slug] || blogContent.articleCtaBanner} />
    </article>
  );
}
