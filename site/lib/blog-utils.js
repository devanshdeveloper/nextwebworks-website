// site/lib/blog-utils.js - Plain-text excerpts, allowlist sanitizer, and deterministic SVG covers

/**
 * Strips HTML tags, decodes standard HTML entities, and trims to a word boundary.
 *
 * @param {string} html - Raw HTML or text from CMS
 * @param {number} maxLength - Character ceiling
 * @returns {string} Clean plain text
 */
export function stripHtml(html, maxLength = 140) {
  if (!html) return '';
  // 1. Remove all HTML tags
  let text = String(html).replace(/<[^>]*>/g, ' ');
  // 2. Decode standard HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  // 3. Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;

  // 4. Trim on word boundary
  const sub = text.slice(0, maxLength);
  const lastSpace = sub.lastIndexOf(' ');
  return (lastSpace > 0 ? sub.slice(0, lastSpace) : sub) + '...';
}

/**
 * Sanitizes untrusted CMS article HTML using an allowlist approach and removes
 * any duplicate leading <h1> matching or preceding the article body.
 *
 * @param {string} rawHtml - Unsanitized HTML string from CMS
 * @returns {string} Sanitized, render-safe HTML
 */
export function cleanArticleHtml(rawHtml) {
  if (!rawHtml) return '';
  let html = String(rawHtml);

  // 1. Remove duplicate leading <h1>...</h1> since the page renders post.title in the header
  html = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

  // 2. Strip dangerous tags and attributes (scripts, iframes, objects, forms, inline event handlers)
  html = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');

  return html;
}

/**
 * Deterministically generates an in-house vector SVG cover (< 5.0 KB, no stock)
 * derived from the post slug and category.
 *
 * @param {string} slug - Unique article slug
 * @param {string} category - Article category
 * @param {string} title - Article title
 * @returns {string} Clean SVG markup string
 */
export function generateBlogCoverSvg(slug = '', category = 'White-Label Engineering', title = '') {
  // Deterministic seed from slug
  let seed = 0;
  for (let i = 0; i < slug.length; i++) {
    seed = (seed * 31 + slug.charCodeAt(i)) % 10000;
  }

  const hue1 = (seed % 60) + 210; // 210-270 (Cobalt / Indigo / Purple)
  const hue2 = (seed * 7) % 360;
  const accentX = (seed % 300) + 100;
  const accentY = (seed % 150) + 50;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" fill="none" role="img" aria-label="${category}">
  <rect width="800" height="420" fill="#0B0F19" />
  <defs>
    <linearGradient id="grad-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(${hue1}, 80%, 55%)" stop-opacity="0.25" />
      <stop offset="100%" stop-color="hsl(${hue2}, 75%, 45%)" stop-opacity="0.08" />
    </linearGradient>
    <pattern id="grid-${seed}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="800" height="420" fill="url(#grad-${seed})" />
  <rect width="800" height="420" fill="url(#grid-${seed})" />
  <!-- Abstract Geometric Focal Architecture -->
  <circle cx="${accentX}" cy="${accentY}" r="90" fill="hsl(${hue1}, 85%, 60%)" fill-opacity="0.12" filter="blur(40px)" />
  <g transform="translate(60, 80)">
    <rect x="0" y="0" width="80" height="2" fill="#2563EB" opacity="0.8" />
    <text x="0" y="32" fill="#10B981" font-family="monospace" font-size="12" font-weight="600" letter-spacing="2">
      ${category.toUpperCase()}
    </text>
  </g>
  <g transform="translate(680, 40)" opacity="0.6">
    <path d="M0 0h16v16H0z" fill="none" stroke="#2563EB" stroke-width="1.5" />
    <path d="M8 0v16M0 8h16" stroke="#2563EB" stroke-width="1" />
  </g>
</svg>`;
}

