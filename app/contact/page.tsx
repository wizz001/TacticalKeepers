import type {Metadata} from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import TikTokIcon from '@/components/TikTokIcon'

export const metadata:Metadata={title:'Contact Tactical Keepers | Goalkeeper Training Cheshire',description:'Contact Tactical Keepers for goalkeeper coaching, training sessions and enquiries in Cheshire.'}
const Pin=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>
const Mail=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14"/><path d="m4 7 8 6 8-6"/></svg>
const Instagram=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
const Facebook=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.7-.1-1.5-.2-2.4-.2-2.5 0-4.3 1.6-4.3 4.4v2H8.5v3h2.8v8H14z"/></svg>

export default function ContactPage(){return <main className="contact-page"><Header/>
 <section className="contact-intro"><div><p>CONTACT</p><h1>LET’S TALK<br/><span>GOALKEEPING</span></h1><p>Want to book a session or ask a question? Get in touch and we’ll come back to you as soon as possible.</p></div></section>
 <section className="contact-main"><aside><p className="contact-label">CONTACT DETAILS</p><h2>GET IN TOUCH</h2><p>For session enquiries, training questions or general information, send a message using the form.</p><address><a href="https://maps.google.com/?q=Cheshire+UK"><Pin/><span><small>LOCATION</small>Cheshire, UK</span></a><a href="mailto:Tacticalkeepers@hotmail.com"><Mail/><span><small>EMAIL</small>Tacticalkeepers@hotmail.com</span></a><a href="https://instagram.com/tacticalkeepers"><Instagram/><span><small>INSTAGRAM</small>@tacticalkeepers</span></a><a href="https://www.tiktok.com/@tactical.keepers" target="_blank" rel="noopener noreferrer"><TikTokIcon/><span><small>TIKTOK</small>@tactical.keepers</span></a><a href="https://facebook.com"><Facebook/><span><small>FACEBOOK</small>Tactical Keepers</span></a></address><div className="contact-follow"><span>FOLLOW TACTICAL KEEPERS</span><a href="https://instagram.com/tacticalkeepers"><Instagram/>Instagram</a><a href="https://www.tiktok.com/@tactical.keepers" target="_blank" rel="noopener noreferrer"><TikTokIcon/>TikTok</a><a href="https://facebook.com"><Facebook/>Facebook</a></div></aside><div className="contact-form-wrap"><p className="contact-label">SEND A MESSAGE</p><ContactForm/></div></section>
 <Footer/>
 </main>}
