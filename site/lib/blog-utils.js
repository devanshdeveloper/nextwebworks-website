// site/lib/blog-utils.js - Plain-text excerpts, allowlist sanitizer, and deterministic 16:9 SVG covers

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

/**
 * Deterministically generates an in-house vector SVG cover (< 5.0 KB, no stock, 16:9)
 * with dedicated category motifs (agency-growth, project-scoping, architecture, general),
 * visible across both light and dark themes using theme-aware classes.
 *
 * @param {string} slug - Unique article slug
 * @param {string} category - Article category
 * @param {string} [title=''] - Article title
 * @returns {string} Clean SVG markup string
 */
export function generateBlogCoverSvg(slug = '', category = 'White-Label Engineering', title = '') {
  const catKey = getCategoryKey(category);
  const catLabel = category.toUpperCase();

  // Deterministic seed from slug
  let seed = 0;
  for (let i = 0; i < slug.length; i++) {
    seed = (seed * 31 + slug.charCodeAt(i)) % 10000;
  }
  const offset = (seed % 20) - 10;

  // Category specific SVG motif (800x450 = 16:9)
  let motif = '';

  if (catKey === 'agency-growth') {
    motif = `
    <!-- Stepped Growth Bars & Flow Nodes -->
    <g class="text-[#2563EB] dark:text-[#3B82F6]" stroke="currentColor" stroke-width="2">
      <line x1="160" y1="360" x2="640" y2="360" stroke-opacity="0.3" />
      <rect x="220" y="${280 + offset}" width="54" height="${80 - offset}" rx="6" fill="currentColor" fill-opacity="0.12" />
      <rect x="310" y="${220 + offset}" width="54" height="${140 - offset}" rx="6" fill="currentColor" fill-opacity="0.2" />
      <rect x="400" y="${160 + offset}" width="54" height="${200 - offset}" rx="6" fill="currentColor" fill-opacity="0.32" />
      <rect x="490" y="${100 + offset}" width="54" height="${260 - offset}" rx="6" fill="currentColor" fill-opacity="0.45" />
      <path d="M 247 ${260 + offset} L 337 ${200 + offset} L 427 ${140 + offset} L 517 ${80 + offset}" stroke="#10B981" stroke-width="3" stroke-linecap="round" fill="none" />
      <circle cx="247" cy="${260 + offset}" r="7" fill="#10B981" />
      <circle cx="337" cy="${200 + offset}" r="7" fill="#10B981" />
      <circle cx="427" cy="${140 + offset}" r="7" fill="#10B981" />
      <circle cx="517" cy="${80 + offset}" r="9" fill="#10B981" stroke="currentColor" stroke-width="2" />
    </g>
    <g transform="translate(480, ${48 + offset})">
      <rect width="74" height="22" rx="11" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1" />
      <text x="37" y="15" text-anchor="middle" font-family="monospace" font-size="10" font-weight="700" fill="#10B981">SCALE</text>
    </g>
    `;
  } else if (catKey === 'project-scoping') {
    motif = `
    <!-- Scope Boundary Frame -->
    <g class="text-[#2563EB] dark:text-[#60A5FA]" stroke="currentColor">
      <rect x="180" y="100" width="340" height="250" rx="14" fill="currentColor" fill-opacity="0.06" stroke-width="2.5" />
      <rect x="200" y="86" width="130" height="24" rx="4" class="fill-slate-100 dark:fill-[#0F172A]" stroke-width="1.5" />
      <text x="265" y="102" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#10B981">LOCKED SCOPE</text>
      <rect x="210" y="130" width="130" height="90" rx="8" fill="currentColor" fill-opacity="0.25" stroke-width="1.5" />
      <text x="275" y="180" text-anchor="middle" font-family="monospace" font-size="12" font-weight="600" fill="currentColor">Core Build</text>
      <rect x="360" y="130" width="130" height="90" rx="8" fill="currentColor" fill-opacity="0.25" stroke-width="1.5" />
      <text x="425" y="180" text-anchor="middle" font-family="monospace" font-size="12" font-weight="600" fill="currentColor">Integrations</text>
      <rect x="210" y="240" width="280" height="80" rx="8" fill="currentColor" fill-opacity="0.15" stroke-width="1.5" />
      <text x="350" y="285" text-anchor="middle" font-family="monospace" font-size="12" font-weight="600" fill="currentColor">Milestone QA & Handoff</text>
      <g transform="translate(560, 160)">
        <rect x="0" y="0" width="140" height="110" rx="8" fill="#EF4444" fill-opacity="0.08" stroke="#EF4444" stroke-width="2" stroke-dasharray="6 4" />
        <text x="70" y="50" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#EF4444">OUT OF SCOPE</text>
        <text x="70" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#EF4444" fill-opacity="0.8">Phase 2 Backlog</text>
      </g>
      <path d="M 520 215 L 555 215" stroke="#EF4444" stroke-width="2" stroke-dasharray="3 3" />
    </g>
    `;
  } else if (catKey === 'architecture') {
    motif = `
    <!-- Layered Architecture Stack -->
    <g class="text-[#2563EB] dark:text-[#3B82F6]" stroke="currentColor" stroke-width="2">
      <polygon points="400,90 620,150 400,210 180,150" fill="currentColor" fill-opacity="0.28" />
      <text x="400" y="155" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="currentColor">NEXT.JS 16 APP ROUTER</text>
      <line x1="400" y1="210" x2="400" y2="245" stroke="#10B981" stroke-width="3" stroke-dasharray="4 2" />
      <polygon points="400,185 620,245 400,305 180,245" fill="currentColor" fill-opacity="0.18" />
      <text x="400" y="250" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="currentColor">HEADLESS CMS & API PIPELINE</text>
      <line x1="400" y1="305" x2="400" y2="340" stroke="#10B981" stroke-width="3" stroke-dasharray="4 2" />
      <polygon points="400,280 620,340 400,400 180,340" fill="currentColor" fill-opacity="0.1" />
      <text x="400" y="345" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="currentColor">EDGE CACHING & CLOUD DEPLOY</text>
    </g>
    `;
  } else {
    motif = `
    <g class="text-[#2563EB] dark:text-[#3B82F6]" stroke="currentColor" stroke-width="2">
      <rect x="220" y="120" width="360" height="220" rx="12" fill="currentColor" fill-opacity="0.08" />
      <path d="M 280 180 L 330 230 L 280 280" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <line x1="350" y1="280" x2="400" y2="280" stroke="#10B981" stroke-width="3.5" stroke-linecap="round" />
      <circle cx="480" cy="180" r="16" fill="currentColor" fill-opacity="0.2" />
      <circle cx="510" cy="240" r="22" fill="currentColor" fill-opacity="0.3" />
      <circle cx="460" cy="280" r="14" fill="currentColor" fill-opacity="0.15" />
      <line x1="480" y1="180" x2="510" y2="240" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4" />
      <line x1="510" y1="240" x2="460" y2="280" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4" />
    </g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" fill="none" class="w-full h-full text-[#2563EB] dark:text-[#3B82F6]" role="img" aria-label="${category}">
  <rect width="800" height="450" class="fill-slate-100 dark:fill-[#0B0F19]" />
  <defs>
    <pattern id="grid-${seed}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" class="stroke-slate-300/40 dark:stroke-slate-800/40" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#grid-${seed})" />
  <rect x="16" y="16" width="768" height="418" rx="12" fill="none" class="stroke-slate-200 dark:stroke-[#1E293B]" stroke-width="1.5" />
  <g transform="translate(40, 42)">
    <rect width="210" height="34" rx="17" class="fill-white dark:fill-[#0F172A] stroke-slate-200 dark:stroke-[#1E293B]" stroke-width="1.5" />
    <circle cx="18" cy="17" r="5" fill="#10B981" />
    <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" class="fill-slate-800 dark:fill-[#F8FAFC]" letter-spacing="1.2">${catLabel.length > 18 ? catLabel.slice(0, 18) + '...' : catLabel}</text>
  </g>
  <g transform="translate(680, 44)">
    <circle cx="12" cy="12" r="10" class="stroke-slate-300 dark:stroke-slate-700" stroke-width="1.5" />
    <text x="12" y="16" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" class="fill-slate-400 dark:fill-slate-500">NWW</text>
  </g>
  ${motif}
</svg>`;
}
