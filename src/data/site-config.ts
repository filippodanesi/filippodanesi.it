export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};
export type Link = {
    text: string;
    href: string;
    external?: boolean;
    className?: string;
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
};
const siteConfig: SiteConfig = {
    title: 'Filippo Danesi',
    subtitle: 'SEO Strategist & AI Innovation Specialist—sharing intriguing insights at SERP-Secrets.',
    description: 'SEO with over five years of experience in technical SEO and content strategy. Expertise in improving organic visibility and delivering data-driven results.',
    image: {
        src: '/og-image.jpg',
        alt: 'Filippo Danesi - SEO Strategist, AI Specialist'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: 'https://www.serp-secrets.com/',
            external: true
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
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
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/filippodanesi/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/filippodanesi/'
        },
        {
            text: 'Twitter',
            href: 'https://x.com/filippodanesi'
        }
    ],
hero: {
    title: 'Filippo Danesi',
    text: `> "SEO is my passion, but data and innovation drive my approach."

My journey in SEO began with a fascination for data and a desire to bridge the gap between technology and user experience. What started as curiosity evolved into a five-year adventure across different markets and challenges, each one teaching me something new about the ever-evolving world of search.

Today, I blend traditional SEO wisdom with cutting-edge AI tools, not because it's trendy, but because I've seen firsthand how this combination can unlock unprecedented growth. Whether I'm orchestrating complex domain migrations or fine-tuning content strategies, I'm driven by the thrill of solving complex puzzles and the satisfaction of seeing businesses thrive in the digital space.

What truly excites me is exploring the intersection of engineering and search optimization. I love diving deep into data, experimenting with new technologies, and building solutions that not only work today but are ready for tomorrow's challenges. Every project is an opportunity to push boundaries and transform raw data into meaningful growth strategies.`,
        image: {
            src: '/jason-leung-7aukRRZb5o0-unsplash.jpg',
            alt: 'A close up of a blue and white background',
        },
        actions: [
            {
                text: "Check out my CV",
                href: "/Filippo-Danesi_Resume.pdf",
                className: "download-cv",
                external: true
            },
            {
                text: 'Visit my Blog',
                href: 'https://www.serp-secrets.com/',
                external: true
            }
        ]
    },
    subscribe: {
        title: 'Stay Updated',
        text: 'Subscribe to my newsletter for SEO insights and updates.',
        formUrl: '#'
    }
};
export default siteConfig;
