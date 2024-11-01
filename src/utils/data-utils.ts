import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

/**
 * Sorts blog posts by publish date in descending order.
 */
export function sortItemsByDateDesc(
    itemA: CollectionEntry<"blog">,
    itemB: CollectionEntry<"blog">
): number {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

/**
 * Retrieves all unique tags from an array of blog posts, returning each tag with its slugified version.
 */
export function getAllTags(posts: CollectionEntry<'blog'>[]): { name: string; slug: string }[] {
    const tags = new Set<string>();

    posts.forEach((post) => {
        (post.data.tags || []).forEach((tag) => tags.add(tag));
    });

    return Array.from(tags).map((tag) => ({
        name: tag,
        slug: slugify(tag),
    }));
}

/**
 * Filters blog posts by a specific tag slug.
 */
export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagSlug: string): CollectionEntry<'blog'>[] {
    return posts.filter((post) =>
        (post.data.tags || []).map((tag: string) => slugify(tag)).includes(tagSlug)
    );
}