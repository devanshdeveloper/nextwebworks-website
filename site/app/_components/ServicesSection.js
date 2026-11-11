// section: home-s4-services
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function ServicesSection({ content, hideHeader = false }) {
  // Bug 4: All specs closed by default on load, independent toggles
  const [openDrawers, setOpenDrawers] = useState({});
  const gridRef = useRef(null);

  const toggleDrawer = (id) => {
    setOpenDrawers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Bug 5: Ultra motion tier staggered reveal with reduced-motion and touch fallback
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOrMobile =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768;

    if (prefersReducedMotion || isTouchOrMobile || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.bento-card');
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      data-section="home-s4-services"
      className="py-20 md:py-28 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors scroll-mt-16 relative"
    >
      <div id="home-s4-services" className="absolute -top-16 left-0" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (hidden if standalone page renders its own dedicated hero) */}
        {!hideHeader && (
          <>
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-mono tracking-wider uppercase text-[#10B981] font-semibold">
                {content.eyebrow}
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-4xl">
                {content.title}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {content.description}
              </p>
            </div>

            {/* Platform Pill Tags Banner */}
            <div className="mt-8 flex flex-wrap gap-2 pt-2">
              {content.platforms.map((group) =>
                group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-3 py-1 font-mono text-xs text-slate-700 dark:text-[#94A3B8] shadow-xs"
                  >
                    {item}
                  </span>
                ))
              )}
            </div>
          </>
        )}

        {/* 5-Card Bento Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.drawers.map((drawer, idx) => {
            const isOpen = !!openDrawers[drawer.id];
            const isHero = idx === 0;

            return (
              <div
                key={drawer.id}
                id={drawer.id}
                className={`bento-card flex flex-col justify-between rounded-2xl border transition-all duration-200 scroll-mt-24 ${
                  isHero
                    ? 'md:col-span-2 lg:col-span-2 border-[#2563EB]/40 bg-white dark:bg-[#0F172A] p-8 shadow-sm hover:border-[#2563EB] hover:-translate-y-1'
                    : 'col-span-1 border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:border-[#2563EB]/50 hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                      {drawer.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                      #{drawer.id}
                    </span>
                  </div>

                  <h3 className={`font-heading font-semibold text-slate-900 dark:text-white ${isHero ? 'text-2xl' : 'text-xl'}`}>
                    <Link href={`/services/${drawer.id}`} className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors">
                      {drawer.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {drawer.summary}
                  </p>

                  {/* Accessible Spec Toggle button */}
                  <button
                    type="button"
                    onClick={() => toggleDrawer(drawer.id)}
                    aria-expanded={isOpen}
                    aria-controls={`specs-${drawer.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-800 dark:text-[#E2E8F0] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1 py-0.5"
                  >
                    <span>{isOpen ? 'Hide Technical Specs ↑' : 'View Technical Specs ↓'}</span>
                  </button>

                  {/* Drawer Specs Content */}
                  {isOpen && (
                    <div
                      id={`specs-${drawer.id}`}
                      className="mt-4 pt-4 border-t border-slate-200 dark:border-[#1E293B]/80 space-y-2 animate-fade-in"
                    >
                      <p className="text-xs font-mono text-slate-500 dark:text-[#94A3B8] uppercase tracking-wider font-semibold">
                        Architecture Standards:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#E2E8F0]">
                        {drawer.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2">
                            <span className="text-[#10B981] mt-0.5" aria-hidden="true">▪</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Footer CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1E293B]/60 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                    Scoped & quoted on discovery
                  </span>
                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded px-1.5 py-0.5"
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
