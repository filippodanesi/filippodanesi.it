import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';

export default defineConfig({
  site: 'https://www.filippodanesi.it',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: false },
    isr: { expiration: 60 * 60 * 24 },
  }),
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    jopSoftwarecookieconsent({
      mode: 'opt-in',
      autoShow: true,
      revision: 1,
      disablePageInteraction: false,
      lazyHtmlGeneration: true,
      
      cookie: {
        name: 'cc_cookie',
        expiresAfterDays: acceptType => acceptType === 'all' ? 365 : 182,
        sameSite: 'Lax',
        useLocalStorage: false
      },

      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        functionality: {
          enabled: false,
          readOnly: false
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid|_ga_.*)/,
                domain: 'filippodanesi.it'
              }
            ]
          }
        }
      },

      language: {
        default: "en",
        autoDetect: "browser",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies!",
              description: "We use cookies to enhance your browsing experience and analyze site traffic.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              closeIconLabel: "Close modal",
              footer: '<a href="/privacy-policy/" class="cc-link">Privacy Policy</a>\n<a href="/cookie-policy/" class="cc-link">Cookie Policy</a>'
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Cookie Usage",
                  description: "We use cookies to optimize your experience on our website."
                },
                {
                  title: "Necessary Cookies",
                  description: "These cookies are essential for the website to function properly.",
                  linkedCategory: "necessary"
                },
                {
                  title: "Analytics Cookies",
                  description: "These cookies help us analyze and improve our site usage.",
                  linkedCategory: "analytics"
                },
                {
                  title: "More information",
                  description: 'For more information about how we process your data and your privacy rights, please read our <a href="/privacy-policy/" class="cc-link">Privacy Policy</a> and <a href="/cookie-policy/" class="cc-link">Cookie Policy</a>.'
                }
              ]
            }
          }
        }
      }
    })
  ],
});