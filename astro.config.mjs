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
          flipButtons: false,
          hideButtonClose: false,
          buttonClose: true
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
                name: /^(_ga)/,
                domain: 'filippodanesi.it'
              },
              {
                name: '_gid',
                domain: 'filippodanesi.it'
              }
            ],
            reloadPage: true
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
              description: "We use cookies to enhance your browsing experience and analyze site traffic. By clicking 'Accept all' you consent to our use of cookies. You can manage your preferences through cookie settings.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              closeIconLabel: "Close modal and reject all cookies",
              footer: '<a href="/privacy-policy" class="cc-link">Privacy Policy</a>\n<a href="/cookie-policy" class="cc-link">Cookie Policy</a>'
            },
            preferencesModal: {
              title: "Consent Preferences Center",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description: "We use different types of cookies to optimize your experience on our website. Some are necessary for the site to function, while others help us understand how you interact with our content."
                },
                {
                  title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description: "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.",
                  linkedCategory: "necessary"
                },
                {
                  title: "Functionality Cookies",
                  description: "These cookies allow the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
                  linkedCategory: "functionality"
                },
                {
                  title: "Analytics Cookies",
                  description: "These cookies allow the website to understand how visitors interact with our website. They help us analyze and improve our site by providing information about how you use it. All data is anonymized.",
                  linkedCategory: "analytics"
                },
                {
                  title: "More information",
                  description: 'To learn more about how we process your data and your privacy rights, please read our <a class="cc-link" href="/privacy-policy">Privacy Policy</a>.'
                }
              ]
            }
          }
        }
      },

      onFirstLoad: () => {
        // Disable analytics by default
        window['ga-disable-G-G5MCMEX52M'] = true;
      },

      onFirstConsent: ({cookie}) => {
        if(cookie.categories.includes('analytics')){
          console.log('Analytics accepted on first consent');
          window['ga-disable-G-G5MCMEX52M'] = false;
        }
      },

      onConsent: ({cookie}) => {
        if(CookieConsent.acceptedCategory('analytics')){
          console.log('Analytics active on page load');
          window['ga-disable-G-G5MCMEX52M'] = false;
        } else {
          window['ga-disable-G-G5MCMEX52M'] = true;
        }
      },

      onChange: ({cookie, changedCategories, changedServices}) => {
        if(changedCategories.includes('analytics')){
          const isAnalyticsAccepted = cookie.categories.includes('analytics');
          
          if(isAnalyticsAccepted){
            console.log('Analytics category accepted');
            window['ga-disable-G-G5MCMEX52M'] = false;
          } else {
            window['ga-disable-G-G5MCMEX52M'] = true;
          }
        }

        if(changedServices && changedServices['analytics']?.includes('Google Analytics')){
          if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
            console.log('Google Analytics service enabled');
            window['ga-disable-G-G5MCMEX52M'] = false;
          } else {
            window['ga-disable-G-G5MCMEX52M'] = true;
          }
        }
      },

      onModalShow: ({modalName}) => {
        console.log('Cookie consent modal shown:', modalName);
      },

      onModalHide: ({modalName}) => {
        console.log('Cookie consent modal hidden:', modalName);
      },

      onModalReady: ({modalName, modal}) => {
        console.log('Cookie consent modal ready:', modalName);
      },
    }),
  ],
});
