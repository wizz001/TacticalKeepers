import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'

const routes = ['/', '/about', '/training', '/prices', '/gallery', '/reviews', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    // These are static pages. Update this date when their visible content changes.
    lastModified: new Date(route === '/reviews' || route === '/' ? '2026-11-09T00:00:00.000Z' : '2026-10-21T00:00:00.000Z'),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
