import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SortBlogPosts } from '@utils/SortBlogPosts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();
const site = new URL(import.meta.env.SITE).href;
const blogPosts = SortBlogPosts(await getCollection('blog'));

export const get = () => rss({
    title: "Shuto's website",
    description: "Shuto Tamaoka's personal website",
    site: site,
    items: blogPosts.map((post) => ({
        link: `${site}blog/${post.slug}`,
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/pretty-feed-v3.xsl',
})