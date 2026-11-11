import { Blog } from '@/lib/cms-kit/blog.js';
import { Service } from '@/lib/cms-kit/service.js';
import { Portfolio } from '@/lib/cms-kit/portfolio.js';
import { homeContent } from '@/content/home.js';

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

  // Service routes (CMS + static fallback)
  let serviceRoutes = [];
  try {
    const cmsSlugs = await Service.getSlugs({ limit: 50 }).catch(() => []);
    const staticSlugs = homeContent.services.drawers.map((d) => d.id);
    const allServiceSlugs = Array.from(new Set([...cmsSlugs, ...staticSlugs]));
    serviceRoutes = allServiceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching service slugs:', err);
  }

  // Work routes (CMS + static fallback)
  let workRoutes = [];
  try {
    const cmsSlugs = await Portfolio.getSlugs({ limit: 50 }).catch(() => []);
    const staticSlugs = homeContent.workShowcase.samples.map((s) => s.id);
    const allWorkSlugs = Array.from(new Set([...cmsSlugs, ...staticSlugs]));
    workRoutes = allWorkSlugs.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching work slugs:', err);
  }

  // Blog routes
  let blogRoutes = [];
  try {
    const slugs = await Blog.getSlugs({ limit: 50 }).catch(() => []);
    blogRoutes = slugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching blog slugs:', err);
  }

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
