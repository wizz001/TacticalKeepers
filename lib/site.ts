export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tacticalkeepers.co.uk',
)

export const siteName = 'Tactical Keepers'
export const siteDescription =
  'Professional goalkeeper coaching in Cheshire focused on technical development, tactical awareness and game-ready training.'

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

export const socialImage = absoluteUrl('/icon-512.png')
