import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  console.log("[RSS]",import.meta.glob('./**/*.md'))
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astroを学ぶ旅',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}