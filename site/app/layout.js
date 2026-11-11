import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav.js';
import Footer from '@/components/Footer.js';
import WhatsAppButton from '@/components/WhatsAppButton.js';
import PreviewBanner from '@/components/PreviewBanner.js';
import SmoothScrollProvider from '@/components/motion/SmoothScrollProvider.js';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nextwebworks.in'),
  title: {
    default: 'Next Web Works | White-Label Engineering Partner for Marketing Agencies',
    template: '%s | Next Web Works',
  },
  description:
    'Dedicated white-label engineering partner for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps delivered under your brand with fixed quotes and zero overhead.',
  robots: isPreview
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
  openGraph: {
    title: 'Next Web Works | White-Label Engineering Partner for Marketing Agencies',
    description:
      'Dedicated white-label engineering partner for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps delivered under your brand with fixed quotes and zero overhead.',
    url: 'https://nextwebworks.in',
    siteName: 'Next Web Works',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Web Works | White-Label Engineering Partner for Marketing Agencies',
    description:
      'Dedicated white-label engineering partner for marketing agencies. Fixed-scope development under your agency brand.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-[#F8FAFC] font-sans selection:bg-[#2563EB] selection:text-white">
        <SmoothScrollProvider>
          <PreviewBanner />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
