// section: home-s4-services
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesSection({ content }) {
  const [openDrawer, setOpenDrawer] = useState('websites');

  const toggleDrawer = (id) => {
    setOpenDrawer(openDrawer === id ? null : id);
  };

  return (
    <section
      id="home-s4-services"
      data-section="home-s4-services"
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

        {/* Platform Pill Tags Banner */}
        <div className="mt-8 flex flex-wrap gap-2 pt-2">
          {content.platforms.map((group) =>
            group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#1E293B] bg-[#0F172A] px-3 py-1 font-mono text-xs text-[#94A3B8]"
              >
                {item}
              </span>
            ))
          )}
        </div>

        {/* 2x2 Modular Drawers Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.drawers.map((drawer) => {
            const isOpen = openDrawer === drawer.id;
            return (
              <div
                key={drawer.id}
                className="flex flex-col justify-between rounded-2xl border border-[#1E293B] bg-[#0F172A] p-7 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#2563EB]">{drawer.tag}</span>
                    <span className="font-mono text-xs text-[#64748B]">#{drawer.id}</span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white">
                    {drawer.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    {drawer.summary}
                  </p>

                  {/* Toggle button */}
                  <button
                    type="button"
                    onClick={() => toggleDrawer(drawer.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E2E8F0] hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1"
                    aria-expanded={isOpen}
                  >
                    <span>{isOpen ? 'Hide Technical Specs ↑' : 'View Technical Specs ↓'}</span>
                  </button>

                  {/* Drawer Specs Content */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-[#1E293B]/80 space-y-2 animate-fade-in">
                      <p className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                        Architecture Standards:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#E2E8F0]">
                        {drawer.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2">
                            <span className="text-[#10B981] mt-0.5">▪</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Drawer Footer CTA */}
                <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#64748B]">
                    Scoped & quoted on discovery
                  </span>
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:text-[#3B82F6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1.5 py-0.5"
                  >
                    <span>{drawer.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
