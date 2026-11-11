// section: cal-embed
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalEmbed() {
  const [hasError, setHasError] = useState(false);

  return (
    <div data-section="cal-embed" className="mt-8 rounded-2xl border border-[#1E293B] bg-[#0F172A] p-4 sm:p-8">
      {!hasError ? (
        <div className="space-y-4">
          <div className="relative min-h-[580px] w-full rounded-xl overflow-hidden bg-[#0B0F19]">
            <iframe
              src="https://cal.com/nextwebworks/intro-20?embed=true"
              title="Cal.com scheduling embed"
              className="w-full h-[600px] border-0"
              loading="lazy"
              onError={() => setHasError(true)}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E293B] text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span>Direct engineer calendar slot (IST / UTC-aligned)</span>
            </div>
            <a
              href="https://cal.com/nextwebworks/intro-20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60A5FA] hover:underline"
            >
              Open in standalone tab ↗
            </a>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1E293B] text-[#94A3B8]">
            📅
          </div>
          <h3 className="font-heading text-lg font-bold text-white">Calendar Embed Blocked by Browser</h3>
          <p className="max-w-md mx-auto text-xs text-[#94A3B8]">
            Adblockers or browser shields may block third-party scheduling iframes. Use one of our direct booking paths below:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://cal.com/nextwebworks/intro-20"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
            >
              Open Cal.com Directly →
            </a>
            <a
              href="https://wa.me/917999934815?text=Hi%2C%20I%20want%20to%20book%20a%20technical%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#1E293B] bg-[#0B0F19] px-5 py-2.5 text-xs font-semibold text-[#10B981] hover:bg-[#1E293B] transition-colors"
            >
              WhatsApp Us (+91 79999 34815)
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-[#1E293B] bg-[#0B0F19] px-5 py-2.5 text-xs font-semibold text-[#E2E8F0] hover:bg-[#1E293B] transition-colors"
            >
              Send Brief via Form
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
