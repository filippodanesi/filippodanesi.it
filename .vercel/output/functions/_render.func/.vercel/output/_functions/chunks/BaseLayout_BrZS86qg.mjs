import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, d as renderComponent, j as renderHead } from './astro/server_B_Dq_1J3.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { s as siteConfig } from './site-config_CIAogzBt.mjs';

const $$Astro$3 = createAstro("https://www.serp-secrets.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/filippo/Downloads/dante-astro-theme/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://www.serp-secrets.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { description = "", image = siteConfig.image, pageType = "website" } = Astro2.props;
  const title = [Astro2.props.title, siteConfig.title].filter(Boolean).join(" \u2014 ");
  const resolvedImage = image?.src ? {
    src: new URL(image.src, Astro2.site).toString(),
    alt: image.alt
  } : void 0;
  const canonicalURL = new URL(Astro2.request.url, Astro2.site);
  function formatCanonicalURL(url) {
    let path = url.toString();
    const hasQueryParams = path.includes("?");
    if (hasQueryParams) {
      path = path.replace(/\/$/, "");
    } else {
      path = path.endsWith("/") ? path : `${path}/`;
    }
    return path;
  }
  return renderTemplate`<!-- High Priority Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap" rel="stylesheet"><!-- Low Priority Global Metadata --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS"><!-- Page Metadata --><link rel="canonical"${addAttribute(formatCanonicalURL(canonicalURL), "href")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(pageType, "content")}><meta property="og:url"${addAttribute(formatCanonicalURL(canonicalURL), "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${resolvedImage?.src && renderTemplate`<meta property="og:image"${addAttribute(resolvedImage.src, "content")}>`}${resolvedImage?.alt && renderTemplate`<meta property="og:image:alt"${addAttribute(resolvedImage.alt, "content")}>`}<!-- X/Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(formatCanonicalURL(canonicalURL), "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}>${resolvedImage?.src && renderTemplate`<meta property="twitter:image"${addAttribute(resolvedImage.src, "content")}>`}${resolvedImage?.alt && renderTemplate`<meta name="twitter:image:alt"${addAttribute(resolvedImage?.alt, "content")}>`}`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = siteConfig.socialLinks || [];
  const navLinks = siteConfig.footerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14"> ${navLinks.length > 0 && renderTemplate`<div class="mb-4 flex flex-wrap gap-x-6 gap-y-1"> ${navLinks.map((link) => renderTemplate`<a class="font-serif hover:underline hover:underline-offset-2"${addAttribute(link.href, "href")}> ${link.text} </a>`)} </div>`} <div${addAttribute([
    "pt-6 flex flex-col gap-4 border-t border-solid border-main",
    { "sm:flex-row-reverse sm:justify-between sm:items-center": socialLinks.length > 0 }
  ], "class:list")}> ${socialLinks.length > 0 && renderTemplate`<div class="flex flex-wrap gap-x-4 gap-y-1"> ${socialLinks.map((link) => renderTemplate`<a class="inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2"${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferer"> ${link.text} </a>`)} </div>`} <p class="text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}&nbsp;<a class="hover:underline hover:underline-offset-2" href="/">${siteConfig.title}</a>. All rights reserved.
</p> </div> </footer>`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-w-3xl mx-auto mb-12 sm:mb-16 border-b border-solid border-main pb-4"> ${siteConfig.logo && siteConfig.logo?.src ? renderTemplate`<a href="/"> <img${addAttribute(siteConfig.logo.src, "src")}${addAttribute(siteConfig.logo.alt || "", "alt")} class="max-h-12"> </a>` : renderTemplate`<a class="font-serif text-3xl leading-tight font-medium text-theme-foreground sm:text-5xl" href="/"> ${siteConfig.title} </a>`} ${renderTemplate`<p class="text-s leading-tight mt-1">${siteConfig.subtitle}</p>`} </header>`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://www.serp-secrets.com");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([className, { "underline underline-offset-2 decoration-1": isActive }], "class:list")}${addAttribute(href, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/NavLink.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="w-8 h-8 -mr-2 flex items-center justify-center" aria-label="Change color scheme"> <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <circle cx="8" cy="8" r="8"></circle> </svg> </button>  `;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/ThemeToggle.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navLinks = siteConfig.headerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<nav class="min-h-10 pt-4 pb-12 relative sm:min-h-14 sm:pb-24 md:pt-8" data-astro-cid-dmqpwcec> <div class="absolute right-12 top-4 md:right-0 md:top-8 z-10" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> <div class="md:hidden w-full max-w-3xl mx-auto relative" data-astro-cid-dmqpwcec> <div class="flex justify-between items-center" data-astro-cid-dmqpwcec> <a href="/" class="flex items-center hover:opacity-80" aria-label="Go to homepage" data-astro-cid-dmqpwcec> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 192 192" class="w-7 h-7" data-astro-cid-dmqpwcec> <path d="M99.6 23.1h-7v144.3h7V23.1zM168.8 91.8H23.4v7h145.4v-7zM47.2 41.7l-5 5L145 148.8l5-5zM145 41.7L42.2 143.8l5 4.9L150 46.7zM30.1 64.8l-2.6 6.5l134.6 54.5l2.7-6.5zM120.3 27.1L65.4 160.8l6.5 2.6l54.9-133.7zM162.3 65l-134.9 54l2.6 6.5l134.9-54zM72.2 27l-6.5 2.6l54.2 134l6.5-2.6z" data-astro-cid-dmqpwcec></path> <style>
                        path {
                            fill: rgb(var(--color-text-main));
                        }
                    </style> </svg> </a> <div class="flex items-center" data-astro-cid-dmqpwcec> ${navLinks.length > 0 && renderTemplate`<button class="menu-toggle w-8 h-8 flex items-center justify-center relative z-30" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items" data-astro-cid-dmqpwcec> <span class="menu-toggle-icon w-6 h-px relative bg-current" data-astro-cid-dmqpwcec></span> </button>`} </div> </div> ${navLinks.length > 0 && renderTemplate`<ul id="menu-items" class="menu flex gap-6" data-astro-cid-dmqpwcec> ${navLinks.map((link) => renderTemplate`<li class="py-1" data-astro-cid-dmqpwcec> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "text-xl font-serif text-main hover:underline hover:underline-offset-2 hover:decoration-1 md:text-base", "href": link.href, "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate`${link.text}` })} </li>`)} </ul>`} </div> <div class="hidden md:block" data-astro-cid-dmqpwcec> ${navLinks.length > 0 && renderTemplate`<div class="w-full max-w-3xl mx-auto relative" data-astro-cid-dmqpwcec> <ul class="flex gap-6" data-astro-cid-dmqpwcec> ${navLinks.map((link) => renderTemplate`<li class="py-1" data-astro-cid-dmqpwcec> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "text-xl font-serif text-main hover:underline hover:underline-offset-2 hover:decoration-1 md:text-base", "href": link.href, "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate`${link.text}` })} </li>`)} </ul> </div>`} </div> </nav>  `;
}, "/Users/filippo/Downloads/dante-astro-theme/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.serp-secrets.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { showHeader = true, ...head } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="antialiased break-words"> <head>', `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-MBR9G1TX79"><\/script><script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-MBR9G1TX79');
        <\/script>`, "", "", '</head> <body class="bg-main text-main"> <div class="flex flex-col min-h-screen px-4 md:px-8"> ', " ", ' <main class="grow w-full max-w-3xl mx-auto"> ', " </main> ", " </div> </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { ...head }), renderSlot($$result, $$slots["structured-data"]), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), showHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/filippo/Downloads/dante-astro-theme/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
