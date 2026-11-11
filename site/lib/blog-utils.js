// site/lib/blog-utils.js - Plain-text excerpts, allowlist sanitizer, and category key helper

/**
 * Categorizes a string into one of 4 deterministic design motifs.
 *
 * @param {string} category - Category label
 * @returns {'agency-growth' | 'project-scoping' | 'architecture' | 'general'}
 */
export function getCategoryKey(category = '') {
  const c = String(category).toLowerCase();
  if (c.includes('growth') || c.includes('strategy') || c.includes('agency')) return 'agency-growth';
  if (c.includes('scoping') || c.includes('scope') || c.includes('pricing') || c.includes('fixed')) return 'project-scoping';
  if (c.includes('arch') || c.includes('stack') || c.includes('next') || c.includes('web') || c.includes('headless')) return 'architecture';
  return 'general';
}

/**
 * Strips HTML tags, removes duplicate leading titles, decodes entities,
 * inserts spaces between blocks, and trims cleanly on a word boundary.
 *
 * @param {string} html - Raw HTML or text from CMS
 * @param {string} [title=''] - Article title for deduplication
 * @param {number} [maxLength=140] - Character ceiling
 * @returns {string} Clean plain text
 */
export function stripHtml(html, title = '', maxLength = 140) {
  if (!html) return '';
  let text = String(html);

  // 1. If HTML starts with a heading tag (h1-h6), remove the entire heading block
  text = text.replace(/^\s*<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, ' ');

  // 2. Remove all remaining HTML tags, ensuring spacing between blocks
  text = text.replace(/<[^>]*>/g, ' ');

  // 3. Decode standard HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

  // 4. Normalize multiple whitespaces
  text = text.replace(/\s+/g, ' ').trim();

  // 5. If text still starts by repeating the title, strip it out
  if (title) {
    const cleanTitle = title.trim();
    if (text.toLowerCase().startsWith(cleanTitle.toLowerCase())) {
      text = text.slice(cleanTitle.length).replace(/^[:\-\s]+/, '').trim();
    }
  }

  if (text.length <= maxLength) return text;

  // 6. Trim cleanly on word boundary with ellipsis only when truncated
  const sub = text.slice(0, maxLength);
  const lastSpace = sub.lastIndexOf(' ');
  const trimmed = lastSpace > 0 ? sub.slice(0, lastSpace) : sub;
  return `${trimmed}...`;
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

  // 3. Resolve legal entity proprietor placeholder
  html = html.replace(/\[PROPRIETOR FULL LEGAL NAME - TO PROVIDE\]/gi, 'Devansh Khetwani');

  return html;
}
