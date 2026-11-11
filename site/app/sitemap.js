import { Blog } from '@/lib/cms-kit/blog.js';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nextwebworks.in';

  const staticRoutes = [
    '',
    '/services',
    '/for-agencies',
    '/work',
    '/about',
    '/book-a-call',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/book-a-call' ? 0.9 : 0.8,
  }));

  let blogRoutes = [];
  try {
    const slugs = await Blog.getSlugs({ limit: 50 });
    blogRoutes = slugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching blog slugs:', err);
  }

  return [...staticRoutes, ...blogRoutes];
}
