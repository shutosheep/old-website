import rss from '@astrojs/rss';

export const get = () => rss({
    title: "Shuto's website",
    description: "Shuto Tamaoka's personal website",
    site: import.meta.env.SITE,
    items: import.meta.glob('./blog/*.md'),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/pretty-feed-v3.xsl',
})