// section: home-s5-work
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WorkShowcaseSection({ content }) {
  const [activeTab, setActiveTab] = useState(content.samples[0].id);

  const activeSample = content.samples.find((s) => s.id === activeTab) || content.samples[0];

  return (
    <section
      id="home-s5-work"
      data-section="home-s5-work"
      className="py-20 md:py-28 border-b border-[#1E293B]/60 bg-[#0B0F19]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono tracking-wider uppercase text-[#10B981] font-semibold">
            {content.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-relaxed text-[#94A3B8]">
            {content.description}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-[#1E293B] pb-4">
          {content.samples.map((sample) => {
            const isActive = sample.id === activeTab;
            return (
              <button
                key={sample.id}
                type="button"
                onClick={() => setActiveTab(sample.id)}
                className={`rounded-lg px-4 py-2 text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'bg-[#0F172A] text-[#94A3B8] hover:text-white border border-[#1E293B]'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]`}
              >
                {sample.title.split(' ')[0]} {sample.title.split(' ')[1]}
              </button>
            );
          })}
        </div>

        {/* Active Sample Card */}
        <div className="mt-8 rounded-2xl border border-[#1E293B] bg-[#0F172A] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E293B] pb-6">
            <div>
              <span className="inline-block rounded-full bg-[#0B0F19] border border-[#1E293B] px-3 py-1 font-mono text-xs text-[#64748B]">
                {activeSample.badge}
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                {activeSample.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#2563EB] max-w-xs md:text-right">
              {activeSample.stack}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <p className="text-sm leading-relaxed text-[#E2E8F0]">
                {activeSample.overview}
              </p>
              <div className="pt-2 space-y-2">
                <p className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                  Technical Architecture Highlights:
                </p>
                <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                  {activeSample.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-0.5">▪</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col justify-between rounded-xl border border-[#1E293B] bg-[#0B0F19] p-6 space-y-4">
              <div>
                <p className="font-mono text-xs text-[#64748B]">DELIVERY MODE</p>
                <p className="text-sm font-semibold text-white mt-1">100% White-Label Repository</p>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Staging deployed on client sub-domain. Complete ownership transferred.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B]">
                <Link
                  href="/book-a-call"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  {activeSample.ctaText} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
