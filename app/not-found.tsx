import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Page Not Found', robots: { index: false, follow: false } }

export default function NotFound() {
  return <main className="contact-page"><Header /><section className="contact-intro"><div><p>404</p><h1>PAGE NOT<br /><span>FOUND</span></h1><p>The page you requested is not available. Use the main navigation to find goalkeeper training, prices or contact details.</p></div></section><Footer /></main>
}
