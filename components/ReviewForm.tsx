'use client'

import { useState, type FormEvent } from 'react'

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [emailLink, setEmailLink] = useState('')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const review = String(data.get('review') || '').trim()
    const nameInput = form.elements.namedItem('name') as HTMLInputElement
    const reviewInput = form.elements.namedItem('review') as HTMLTextAreaElement
    nameInput.setCustomValidity(name ? '' : 'Please enter your first name.')
    reviewInput.setCustomValidity(review.length >= 20 ? '' : 'Please write at least 20 characters about your experience.')
    if (!form.reportValidity()) return
    const body = [`First name for publication: ${name}`, `Sessions: ${data.get('session')}`, `Rating: ${data.get('rating')} out of 5`, '', review, '', 'I give permission for my first name, session, rating and review to be published on the Tactical Keepers website.'].join('\n')
    const link = `mailto:Tacticalkeepers@hotmail.com?subject=${encodeURIComponent('Session review for approval')}&body=${encodeURIComponent(body)}`
    setEmailLink(link)
    window.location.href = link
  }
  return <form className="review-form" onSubmit={submit}>
    <fieldset><legend>Your rating (required)</legend><div className="review-rating">{[1, 2, 3, 4, 5].map(value => <label key={value}><input type="radio" name="rating" value={value} required checked={rating === value} onChange={() => { setRating(value); setEmailLink('') }} aria-label={`${value} ${value === 1 ? 'star' : 'stars'}`} /><span aria-hidden="true">{value} ★</span></label>)}</div></fieldset>
    <label>Your first name (required)<input name="name" autoComplete="given-name" required maxLength={50} onChange={event => { event.target.setCustomValidity(''); setEmailLink('') }} /></label>
    <label>Which sessions did you attend? (required)<select name="session" required defaultValue="" onChange={() => setEmailLink('')}><option value="" disabled>Choose your sessions</option><option>Tactical Keepers</option><option>Congleton Keepers</option><option>Both</option></select></label>
    <label>Your review (required)<textarea name="review" rows={6} required minLength={20} maxLength={1500} placeholder="What has your experience of training with Josh been like?" aria-describedby="review-length" onChange={event => { event.target.setCustomValidity(''); setEmailLink('') }} /><small id="review-length">20–1,500 characters. Please leave out personal or contact details.</small></label>
    <label className="review-consent"><input type="checkbox" name="consent" required onChange={() => setEmailLink('')} /><span>I give permission for my first name, session, rating and review to appear on this website.</span></label>
    <p className="review-help">Reviews are sent by email for approval before publication. The button opens your email app; you’ll need to press send there. Your email address will not be published.</p>
    <button type="submit" className="button">PREPARE REVIEW EMAIL →</button>
    {emailLink && <div className="review-email-status" role="status"><strong>Your review email is ready.</strong><p>Finish sending it in your email app. Your review has not been posted to the website.</p><p><a href={emailLink}>Open the email again</a>, or copy your review and email it to <a href="mailto:Tacticalkeepers@hotmail.com">Tacticalkeepers@hotmail.com</a>.</p></div>}
  </form>
}
