import { notFound } from 'next/navigation';
import { Service } from '@/lib/cms-kit/service.js';
import { homeContent } from '@/content/home.js';
import { servicesContent } from '@/content/services.js';
import Schema from '@/components/seo/Schema.js';
import ServiceDetailHeroSection from '../../_components/services/ServiceDetailHeroSection.js';
import ServiceDetailOverviewSection from '../../_components/services/ServiceDetailOverviewSection.js';
import ServiceDetailSpecsSection from '../../_components/services/ServiceDetailSpecsSection.js';
import ServiceDetailStackSection from '../../_components/services/ServiceDetailStackSection.js';
import FAQSection from '../../_components/FAQSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import ContactFormSection from '../../_components/ContactFormSection.js';

const STATIC_SERVICES = homeContent.services.drawers;

async function getService(slug) {
  const fromCms = await Service.readOne(slug).catch(() => null);
  if (fromCms) return fromCms;
  return STATIC_SERVICES.find((s) => s.id === slug) || null;
}

export async function generateStaticParams() {
  const cmsSlugs = await Service.getSlugs({ limit: 50 }).catch(() => []);
  const allSlugs = Array.from(new Set([...cmsSlugs, ...STATIC_SERVICES.map((s) => s.id)]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Next Web Works White-Label Capabilities`,
    description: service.summary || service.description,
    alternates: { canonical: `https://nextwebworks.in/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary || service.description,
    provider: { '@type': 'Organization', name: 'Next Web Works', url: 'https://nextwebworks.in' },
    areaServed: 'Worldwide',
  };

  return (
    <div>
      <Schema schema={[serviceSchema]} />
      <ServiceDetailHeroSection service={service} />
      <ServiceDetailOverviewSection service={service} />
      <ServiceDetailSpecsSection service={service} />
      <ServiceDetailStackSection service={service} />
      <FAQSection content={servicesContent.faqs} />
      <FinalCTABanner content={servicesContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </div>
  );
}

