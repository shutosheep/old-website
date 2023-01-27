import type { CollectionEntry } from "astro:content"

export function SortBlogPosts(collections: CollectionEntry<'blog'>[]) {
    return collections.sort(
        (a, b) =>
            new Date(b.data.pubDate).getTime() -
            new Date(a.data.pubDate).getTime()
    );
}