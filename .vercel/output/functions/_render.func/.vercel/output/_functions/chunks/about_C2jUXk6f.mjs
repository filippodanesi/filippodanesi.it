import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DSnIZTXu.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/about.jpeg\" alt=\"Human with retrofuturistic gear in retro neon gradient\"></p>\n<p>Hi, I’m Filippo, the mind behind SERPsecrets. As an SEO specialist and AI enthusiast, I’ve spent years helping businesses grow their online presence through innovative, data-driven strategies. Here, I combine my expertise in <a href=\"https://www.serp-secrets.com/artificial-intelligence/\">Artificial Intelligence</a> and SEO to bring you cutting-edge insights and solutions. This blog is your go-to resource for harnessing AI’s power to elevate your SEO game.</p>\n<p>From <strong>AI’s role in reshaping SEO practices</strong> to mastering <strong><a href=\"https://www.serp-secrets.com/technical-seo/\">Technical SEO</a></strong> and crafting <strong><a href=\"https://www.serp-secrets.com/seo-strategies/\">SEO strategies</a> for digital growth</strong>, I cover the key areas essential for anyone looking to enhance their online visibility in today’s digital landscape.</p>\n<p>Want to learn more? Visit my <a href=\"https://www.filippodanesi.it/\">website</a> to explore my work and services.</p>";

				const frontmatter = {"title":"About","seo":{"title":"About Me","description":"Learn more about the person behind the website and embark on a journey of inspiration and shared experiences.","image":{"src":"/about.jpeg","alt":"A human with retrofuturistic gear in retro neon gradient"}}};
				const file = "/Users/filippo/Downloads/dante-astro-theme/src/content/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\n![Human with retrofuturistic gear in retro neon gradient](/about.jpeg)\n\nHi, I’m Filippo, the mind behind SERPsecrets. As an SEO specialist and AI enthusiast, I’ve spent years helping businesses grow their online presence through innovative, data-driven strategies. Here, I combine my expertise in [Artificial Intelligence](https://www.serp-secrets.com/artificial-intelligence/) and SEO to bring you cutting-edge insights and solutions. This blog is your go-to resource for harnessing AI’s power to elevate your SEO game.\n\nFrom **AI’s role in reshaping SEO practices** to mastering **[Technical SEO](https://www.serp-secrets.com/technical-seo/)** and crafting **[SEO strategies](https://www.serp-secrets.com/seo-strategies/) for digital growth**, I cover the key areas essential for anyone looking to enhance their online visibility in today’s digital landscape.\n\nWant to learn more? Visit my [website](https://www.filippodanesi.it/) to explore my work and services.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
