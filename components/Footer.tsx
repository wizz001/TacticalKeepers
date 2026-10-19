import Logo from './Logo'
import {BOOKING_URL} from '@/lib/links'

const InstagramIcon=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
const FacebookIcon=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.7-.1-1.5-.2-2.4-.2-2.5 0-4.3 1.6-4.3 4.4v2H8.5v3h2.8v8H14z"/></svg>

export default function Footer(){return <footer className="site-footer">
  <section className="footer-cta" id="contact"><div className="footer-watermark" aria-hidden="true"/><div className="footer-cta-inner">
    <div className="footer-brand"><Logo/></div>
    <div className="footer-message"><span>TAKE THE NEXT STEP</span><h2>READY TO IMPROVE?</h2><p>Book a session today and take the next step<br/>in your goalkeeping journey.</p><div className="footer-social"><strong>FOLLOW THE JOURNEY</strong><a href="https://instagram.com/tacticalkeepers" aria-label="Tactical Keepers on Instagram"><InstagramIcon/></a><a href="https://facebook.com" aria-label="Tactical Keepers on Facebook"><FacebookIcon/></a><small>@tacticalkeepers</small></div></div>
    <div className="footer-action"><a className="button footer-book" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">BOOK A SESSION <span>→</span></a></div>
  </div></section>
  <div className="footer-bottom"><div className="footer-bottom-inner"><span>© 2026 TACTICAL KEEPERS</span><span>CHESHIRE, UK</span><nav aria-label="Footer navigation"><a href="https://instagram.com/tacticalkeepers"><InstagramIcon/>INSTAGRAM</a><a href="https://facebook.com"><FacebookIcon/>FACEBOOK</a><a href="#">PRIVACY POLICY</a><a href="#">TERMS</a></nav></div><p className="footer-credit">Made in Cheshire with care. Designed &amp; developed by <a href="https://www.wizzdigitalconsultancy.co.uk/" target="_blank" rel="noopener noreferrer">Wizz Digital Consultancy.</a></p></div>
  </footer>}
