import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReviewsSection from '@/components/ReviewsSection'
import ReviewForm from '@/components/ReviewForm'

export const metadata: Metadata = {
  title: 'Session Reviews',
  description: 'Share your goalkeeper training experience with Tactical Keepers and read reviews from parents and players.',
  alternates: { canonical: '/reviews/' },
}

export default function ReviewsPage() {
  return <main className="reviews-page"><Header />
    <section className="reviews-hero"><p className="reviews-kicker">YOUR EXPERIENCE MATTERS</p><h1>BETWEEN THE POSTS.<br /><span>IN YOUR WORDS.</span></h1><p>Rate your sessions and help other families get to know the training.</p><a className="button" href="#leave-review">LEAVE A REVIEW ↓</a></section>
    <ReviewsSection full />
    <section className="review-write" id="leave-review"><div><p className="reviews-kicker">HAVE YOUR SAY</p><h2>RATE YOUR SESSION</h2><p>Tell us what you enjoyed and where we can improve. Honest feedback of every rating is welcome.</p><p>Please use your own first name and avoid children’s full names or personal details. Parents or guardians should submit on behalf of younger players.</p></div><ReviewForm /></section>
    <Footer /></main>
}
