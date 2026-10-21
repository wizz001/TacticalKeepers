import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'
const routes = ['/', '/about', '/training', '/prices', '/gallery', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date('2026-10-21T00:00:00.000Z'), changeFrequency: 'monthly', priority: route === '/' ? 1 : 0.8 }))
}
