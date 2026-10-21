import type { Metadata, Viewport } from 'next'
import './globals.css'
import './refinements.css'
import './training.css'
import './gallery.css'
import './gallery-extra.css'
import './contact.css'
import { absoluteUrl, siteDescription, siteName, siteUrl, socialImage } from '@/lib/site'
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'Tactical Keepers | Goalkeeper Training in Cheshire', template: '%s | Tactical Keepers' },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'en_GB', siteName, title: 'Tactical Keepers | Goalkeeper Training in Cheshire', description: siteDescription, url: '/', images: [{ url: socialImage, width: 512, height: 512, alt: 'Tactical Keepers crest' }] },
  twitter: { card: 'summary', title: 'Tactical Keepers | Goalkeeper Training in Cheshire', description: siteDescription, images: [socialImage] },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505',
}
const organisationSchema = {'@context':'https://schema.org','@type':'Organization','@id':absoluteUrl('/#organization'),name:siteName,url:absoluteUrl('/'),logo:socialImage,description:siteDescription,email:'Tacticalkeepers@hotmail.com',areaServed:{'@type':'AdministrativeArea',name:'Cheshire, UK'},sameAs:['https://instagram.com/tacticalkeepers','https://www.tiktok.com/@tactical.keepers']}
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} /></body></html> }
