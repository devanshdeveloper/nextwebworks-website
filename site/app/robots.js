export default function robots() {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/book-a-call/thank-you'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nextwebworks.in'}/sitemap.xml`,
  };
}
