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
        alt: 'Filippo Danesi - SEO Strategist & AI Innovation Specialist'
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
        text: `
 SEO is my passion, but data and innovation drive my approach.
 
 I develop data-driven SEO strategies enhanced by AI and machine learning applications. With five years of experience across B2B and B2C markets, I implement advanced technical solutions from domain migrations to content optimization systems. My approach combines proven SEO practices with NLP-powered analytics, ensuring organic growth through precise search intent mapping.
 
 I work at the intersection of engineering and search optimization, developing scalable solutions that align with evolving search algorithms. By integrating traditional SEO expertise with AI innovation, I deliver strategies that adapt to technological shifts while maintaining consistent organic performance.
        `,
        image: {
            src: '/profile.webp',
            alt: 'Filippo Danesi',
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