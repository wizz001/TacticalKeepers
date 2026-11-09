import { reviews } from '@/lib/reviews'

export default function ReviewsSection({ full = false }: { full?: boolean }) {
  const visible = full ? reviews : reviews.slice(0, 3)
  return <section className="reviews-section" aria-labelledby="reviews-heading">
    <div className="reviews-heading"><div><p className="reviews-kicker">FROM THE TOUCHLINE</p><h2 id="reviews-heading">SESSION REVIEWS</h2></div>
      {!full && <a className="button button-outline" href="/reviews/">READ &amp; LEAVE A REVIEW →</a>}
    </div>
    {reviews.length > 0 ? <>
      <p className="reviews-summary">{(reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)} out of 5 · {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</p>
      <div className="reviews-grid">{visible.map(review => <article className="review-card" key={review.id}>
        <p className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
        <blockquote>{review.text}</blockquote><p><strong>{review.name}</strong><br /><span>{review.session}</span></p>
      </article>)}</div>
    </> : <div className="reviews-empty"><h3>TRAINED WITH JOSH?</h3><p>Be the first to share your experience. We’d love to hear from Tactical Keepers and Congleton Keepers parents and players.</p><p>Approved reviews will appear here.</p></div>}
  </section>
}
