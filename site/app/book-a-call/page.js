import BookHeroSection from '../_components/book-a-call/BookHeroSection.js';
import BookAgendaSection from '../_components/book-a-call/BookAgendaSection.js';
import BookCalSection from '../_components/book-a-call/BookCalSection.js';
import BookPreparationSection from '../_components/book-a-call/BookPreparationSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import { homeContent } from '@/content/home.js';

export const metadata = {
  title: 'Book a 20-Minute Technical Discovery Call | Next Web Works',
  description:
    'Schedule a 20-minute scoping call directly with our founder. We review your client briefs, confirm stack fit, and deliver a fixed-scope quote in 24 hours.',
  alternates: { canonical: 'https://nextwebworks.in/book-a-call' },
};

export default function BookACallPage() {
  return (
    <div>
      <BookHeroSection />
      <BookAgendaSection />
      <BookCalSection />
      <BookPreparationSection />
      <FinalCTABanner content={homeContent.ctaBanner} />
    </div>
  );
}
