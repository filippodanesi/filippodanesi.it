import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DSnIZTXu.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/site-config_bza4iZuq.mjs';
import { a as $$ArrowRight } from '../chunks/ArrowRight_C0HtNKtn.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Coj_0jyD.mjs';
import { $ as $$Subscribe } from '../chunks/Subscribe_CiHWjjh_.mjs';
import { s as sortItemsByDateDesc, g as getAllTags, a as getPostsByTag } from '../chunks/data-utils_u2ta8h7b.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(sortItemsByDateDesc);
  const tags = getAllTags(posts).sort((tagA, tagB) => {
    const postCountTagA = getPostsByTag(posts, tagA.slug).length;
    const postCountTagB = getPostsByTag(posts, tagB.slug).length;
    return postCountTagB - postCountTagA;
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tags", "description": "Explore tag directory for easy navigation and discovery. Find a wide range of topics, articles, and insights organized by tags, making it effortless to locate the content that interests you most.", "showHeader": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl leading-tight font-serif sm:text-4xl italic mb-4 sm:leading-tight">Categories</h1> <h2 class="mb-10 text-sm sm:text-base leading-normal pb-6 border-b border-solid border-black inline-block">
Browse through all the topics I've written about. Each tag represents a collection of related posts, making it easy to explore specific areas of
        interest.
</h2> ${tags.map((tag) => {
    const postCount = getPostsByTag(posts, tag.slug).length;
    return renderTemplate`<a class="mb-10 flex justify-between items-start gap-8 group sm:mb-12"${addAttribute(`/tags/${tag.slug}`, "href")}> <div class="grow"> <h2 class="text-xl leading-tight font-serif font-medium group-hover:underline group-hover:decoration-solid group-hover:underline-offset-4 group-hover:decoration-1 sm:text-2xl"> ${tag.name} </h2> <div class="mt-1 text-sm leading-normal"> ${postCount} ${postCount === 1 ? "post" : "posts"} </div> </div> <div class="hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
View Tag Archive ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "fill-current w-4 h-4" })} </div> </a>`;
  })}${renderComponent($$result2, "Subscribe", $$Subscribe, { "class": "my-16 sm:my-24" })} ` })}`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/pages/tags/index.astro", void 0);

const $$file = "/Users/filippo/Downloads/dante-astro-theme/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
