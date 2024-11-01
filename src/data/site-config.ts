export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type TagDescription = {
    [key: string]: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    tagDescriptions: TagDescription;
};

const siteConfig: SiteConfig = {
    title: 'SERPsecrets',
    subtitle: 'SEO Analysis, Strategies & AI Insights',
    description: 'A personal take on SEO news, strategies, and AI insights. Practical analysis to help you optimize your online presence in a changing digital world.',
    image: {
        src: '/og-image.webp',
        alt: 'SERPsecrets - SEO Analysis, Strategies & AI Insights'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Archive',
            href: '/blog'
        },
        {
            text: 'Categories',
            href: '/tags'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/filippodanesi/'
        },
        {
            text: 'Github',
            href: 'https://github.com/filippodanesi/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/filippodanesi'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '/about.jpeg',
            alt: 'A human with retrofuturistic gear in retro neon gradient'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Join the SERPsecrets Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    tagDescriptions: {
        'technical-seo': 'Personal insights into backend SEO strategies and coding techniques that boost site performance and improve search rankings. I explore site architecture and technical optimization in detail.',
        'seo-news': 'Authoritative updates and reflections on the latest SEO trends. I dive into algorithm changes, market shifts, and emerging practices in digital marketing.',
        'seo-strategies': 'Personal insights into effective SEO tactics and winning methodologies, with a focus on keyword research, content optimization, and strategies to boost user engagement',
        'artificial-intelligence': 'Exploring how AI is transforming SEO and digital marketing. I share insights into machine learning, algorithmic analysis, and AI-driven optimization strategies.'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;