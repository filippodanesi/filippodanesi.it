import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B_Dq_1J3.mjs';
import 'kleur/colors';
import { s as siteConfig, g as getCollection } from '../chunks/site-config_CIAogzBt.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BrZS86qg.mjs';
import { $ as $$Button } from '../chunks/ArrowRight_erZ01JUE.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_bHBbdmGn.mjs';
import { s as sortItemsByDateDesc } from '../chunks/data-utils_BD8HU-ty.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.serp-secrets.com");
const $$WebsiteStructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WebsiteStructuredData;
  const pageUrl = new URL(Astro2.url.pathname, Astro2.site);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: pageUrl
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)));
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/WebsiteStructuredData.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(sortItemsByDateDesc).slice(0, 5);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "description": siteConfig.description, "image": siteConfig.image }, { "default": ($$result2) => renderTemplate`  ${posts.length > 0 && renderTemplate`${maybeRenderHead()}<div class="mb-16 sm:mb-24"> <h2 class="mb-12 text-xl font-serif italic sm:mb-10 sm:text-2xl">What's New</h2> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "mb-10 sm:mb-12", "headingLevel": "h3" })}`)} <div class="mt-12 sm:mt-16"> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog" }, { "default": ($$result3) => renderTemplate`View All Posts` })} </div> </div>`}`, "structured-data": ($$result2) => renderTemplate`${renderComponent($$result2, "WebsiteStructuredData", $$WebsiteStructuredData, { "slot": "structured-data" })}` })}`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/pages/index.astro", void 0);

const $$file = "/Users/filippo/Downloads/dante-astro-theme/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
