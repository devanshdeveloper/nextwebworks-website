import { notFound } from 'next/navigation';
import { Portfolio } from '@/lib/cms-kit/portfolio.js';
import { homeContent } from '@/content/home.js';
import { workContent } from '@/content/work.js';
import Schema from '@/components/seo/Schema.js';
import WorkDetailHeroSection from '../../_components/work/WorkDetailHeroSection.js';
import WorkDetailOverviewSection from '../../_components/work/WorkDetailOverviewSection.js';
import WorkDetailHighlightsSection from '../../_components/work/WorkDetailHighlightsSection.js';
import WorkDetailConfidentialitySection from '../../_components/work/WorkDetailConfidentialitySection.js';
import FAQSection from '../../_components/FAQSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import ContactFormSection from '../../_components/ContactFormSection.js';

const STATIC_WORKS = homeContent.workShowcase.samples;

async function getWork(slug) {
  const fromCms = await Portfolio.readOne(slug).catch(() => null);
  if (fromCms) return fromCms;
  return STATIC_WORKS.find((w) => w.id === slug) || null;
}

export async function generateStaticParams() {
  const cmsSlugs = await Portfolio.getSlugs({ limit: 50 }).catch(() => []);
  const allSlugs = Array.from(new Set([...cmsSlugs, ...STATIC_WORKS.map((w) => w.id)]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) return { title: 'Deliverable Not Found' };
  return {
    title: `${work.title} | Next Web Works Case Study`,
    description: work.overview || work.description,
    alternates: { canonical: `https://nextwebworks.in/work/${slug}` },
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) notFound();

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    description: work.overview || work.description,
    creator: { '@type': 'Organization', name: 'Next Web Works', url: 'https://nextwebworks.in' },
  };

  return (
    <div>
      <Schema schema={[creativeWorkSchema]} />
      <WorkDetailHeroSection work={work} />
      <WorkDetailOverviewSection work={work} />
      <WorkDetailHighlightsSection work={work} />
      <WorkDetailConfidentialitySection />
      <FAQSection content={workContent.faqs} />
      <FinalCTABanner content={workContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}

