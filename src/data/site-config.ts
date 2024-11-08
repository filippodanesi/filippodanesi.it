export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
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
    subtitle: 'Senior SEO Strategist & AI Innovation Specialist',
    description: 'SEO with over five years of experience in technical SEO and content strategy. Expertise in improving organic visibility and delivering data-driven results.',
    image: {
        src: '/profile.webp',
        alt: 'Filippo Danesi - SEO Expert'
    },
    headerNavLinks: [
        {
            text: 'Blog',
            href: '/blog'
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
            text: 'X/Twitter',
            href: 'https://x.com/filippodanesi'
        }
    ],
    hero: {
        title: 'Filippo Danesi',
        text: `
I have a rich and dynamic career in the field of Search Engine Optimization, with a focus on organic growth and online visibility.

With over five years of hands-on SEO experience, I specialize in both technical SEO and content strategy, consistently driving significant gains in organic visibility and measurable business outcomes.

I've led successful site migrations, optimized website performance, and developed data-driven content strategies that seamlessly align with search engine algorithms and user intent. By closely collaborating with technical and marketing teams, I ensure the delivery of impactful, results-oriented campaigns.

Committed to staying at the cutting edge of SEO trends and best practices, I'm focused on ensuring long-term growth and competitiveness for my clients.
        `,
        image: {
            src: '/profile.webp',
            alt: 'Filippo Danesi',
        },
        actions: [
            {
                text: "Check out my CV",
                href: "/Filippo-Danesi_Resume.pdf",
                className: "download-cv"
            },
            {
                text: 'Visit my Blog',
                href: '/blog'
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