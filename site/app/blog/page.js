import { Blog } from '@/lib/cms-kit/blog.js';
import BlogHeroSection from '../_components/blog/BlogHeroSection.js';
import BlogFeaturedSection from '../_components/blog/BlogFeaturedSection.js';
import BlogGridSection from '../_components/blog/BlogGridSection.js';
import BlogTopicsSection from '../_components/blog/BlogTopicsSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';
import { stripHtml } from '@/lib/blog-utils.js';

export const metadata = {
  title: 'Engineering Blog & Agency White-Label Playbooks | Next Web Works',
  description:
    'Tactical guides on agency operations, fixed-price project scoping, and headless CMS architectures for marketing agency operators.',
  alternates: { canonical: 'https://nextwebworks.in/blog' },
};

export default async function BlogIndexPage() {
  const { items } = await Blog.paginate({ page: 1, limit: 12 }).catch(() => ({ items: [] }));

  const processed = items.map((post) => ({
    ...post,
    cleanExcerpt: stripHtml(post.excerpt || post.content, post.title, 140),
  }));

  const featuredPost = processed[0] || null;
  const gridPosts = processed.slice(1);

  return (
    <div>
      <BlogHeroSection />
      <BlogFeaturedSection featuredPost={featuredPost} />
      <BlogGridSection posts={gridPosts.length > 0 ? gridPosts : processed} />
      <BlogTopicsSection />
      <FinalCTABanner content={homeContent.ctaBanner} />
    </div>
  );
}
