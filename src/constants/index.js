import {
    web,
    frontend,
    react,

    strikingly,
    origindev,

    html,
    css,
    javascript,
    typescript,
    liquid,
    graphql,
    reactjs,
    gatsby,
    tailwind,
    nodejs,
    threejs,
    git,
    figma,

    platformos,
    catalystconstellations,
    docskit,
    fighting,
    dino,
    portfolio,

    linkedIn,
    gitHub,
    instagram,
    facebook,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "social",
        title: "Social",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Front-End Developer",
        icon: frontend,
    },
    {
        title: "React Developer",
        icon: react,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Gatsby",
        icon: gatsby,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Liquid",
        icon: liquid,
    },
    {
        name: "graphQL",
        icon: graphql,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Customer Support Specialist",
        company_name: "Strikingly",
        icon: strikingly,
        iconBg: "#383E56",
        date: "June 2023 - October 2023",
        points: [
            "DNS configuration, domain setup, and website customization using HTML / CSS.",
            "Diagnosed and reported bugs, collaborated with the dev team for quick resolution.",
            "Handled translation tasks and provided localized support for non-English users.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "origin/develop",
        icon: origindev,
        iconBg: "#E6DEDD",
        date: "November 2023 - Present",
        points: [
            "Developing and maintaining web applications using Liquid, graphQL | Gatsby, Tailwind | React, MUI and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Oversee the recruitment process for new interns and provide mentorship throughout their onboarding and development.",
        ],
    },
];

const socials = [
    {
        social:
            "placeholder",
        name: "Marcell Almási",
        designation: "LinkedIn",
        company: "",
        image: linkedIn,
        link: "https://www.linkedin.com/in/marcell-alm%C3%A1si/"
    },
    {
        social:
            "placeholder",
        name: "Marcell Almási",
        designation: "GitHub",
        company: "",
        image: gitHub,
        link: "https://github.com/Marcellokah"
    },
    {
        social:
            "placeholder",
        name: "marcell _almasi",
        designation: "Instagram",
        company: "",
        image: instagram,
        link: "https://www.instagram.com/marcell_almasi/"
    },
    // {
    //     social:
    //         "placeholder",
    //     name: "Marci Almási",
    //     designation: "Facebook",
    //     company: "",
    //     image: facebook,
    //     link: "https://www.facebook.com/almasimarcell/"
    // },
];

const projects = [
    {
        name: "PlatformOS",
        description:
            "Marketing site of PlatformOS. Built with PlatformOS, Rive animations, and optimized for accessibility (WCAG) standards.",
        tags: [
            {
                name: "platformos",
                color: "green-text-gradient",
            },
            {
                name: "accessibility",
                color: "blue-text-gradient",
            },
            {
                name: "rive",
                color: "red-text-gradient",
            },
        ],
        image: platformos,
        source_code_link: "https://www.platformos.com/",
    },
    {
        name: "Catalyst Constellations",
        description:
            "Provides solutions for businesses. Built with PlatformOS and Tailwind CSS, integrated with Stripe for payments.",
        tags: [
            {
                name: "platformos",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "stripe",
                color: "green-text-gradient",
            },
        ],
        image: catalystconstellations,
        source_code_link: "https://catalystconstellations.com/",
    },
    {
        name: "DocsKit",
        description:
            "Documentation site template. Built with Gatsby and Tailwind CSS, optimized for accessibility (WCAG) standards.",
        tags: [
            {
                name: "gatsby",
                color: "pink-text-gradient",
            },
            {
                name: "accessibility",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: docskit,
        source_code_link: "https://docskit.platformos.com/",
    },
    {
        name: "Fighting Game",
        description:
            "Fighting Game made with Vanilla JS on HTML canvas including pixelart textures.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
            {
                name: "pixelart",
                color: "red-text-gradient",
            },
        ],
        image: fighting,
        source_code_link: "https://github.com/Marcellokah/fighting-game",
    },
    {
        name: "Chrome Game",
        description:
            "Copy of the famous Google Chrome game made with Vanilla JS.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
            {
                name: "pixelart",
                color: "red-text-gradient",
            },
        ],
        image: dino,
        source_code_link: "https://github.com/Marcellokah/chrome-game",
    },
    {
        name: "Previous Portfolio",
        description:
            "This is my previous personal portfolio page made with React, Bootstrap and Animate.css.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "animate.css",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Marcellokah/personal-portfolio",
    },
];

export { services, technologies, experiences, socials, projects };