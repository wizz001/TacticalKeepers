import type { Metadata, Viewport } from 'next'
import './globals.css'
import './refinements.css'
import './training.css'
import './gallery.css'
import './gallery-extra.css'
import './contact.css'
export const metadata: Metadata = {
  title: 'Tactical Keepers | Professional Goalkeeper Training in Cheshire',
  description: 'Professional goalkeeper coaching in Cheshire focused on technical development, tactical awareness and game-ready training.',
  applicationName: 'Tactical Keepers',
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
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
