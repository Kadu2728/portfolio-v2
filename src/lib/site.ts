/**
 * URL pública. Defina NEXT_PUBLIC_SITE_URL na Vercel — sem isso as URLs
 * absolutas do Open Graph e do sitemap apontam para localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfoliokadu.vercel.app'
