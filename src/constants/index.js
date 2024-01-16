import {
    react,
    frontend,
    web,

    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,

    meta,
    starbucks,
    tesla,
    shopify,

    linkedIn,
    gitHub,
    instagram,
    facebook,

    dino,
    ecommerce,
    fighting,
    pong,
    portfolio,
    weather,

    threejs,
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
        title: "React JS Developer",
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "placeholder",
        name: "Marcell Almási",
        designation: "LinkedIn",
        company: "",
        image: linkedIn,
        link: "https://www.linkedin.com/in/marcell-alm%C3%A1si/"
    },
    {
        testimonial:
            "placeholder",
        name: "Marcell Almási",
        designation: "GitHub",
        company: "",
        image: gitHub,
        link: "https://github.com/Marcellokah"
    },
    {
        testimonial:
            "placeholder",
        name: "marcell _almasi",
        designation: "Instagram",
        company: "",
        image: instagram,
        link: "https://www.instagram.com/marcell_almasi/"
    },
    {
        testimonial:
            "placeholder",
        name: "Marci Almási",
        designation: "Facebook",
        company: "",
        image: facebook,
        link: "https://www.facebook.com/almasimarcell/"
    },
];

const projects = [
    {
        name: "Previous Portfolio",
        description:
            "This is my previous personal portfolio page made with React JS, Bootstrap and Animate.css .",
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
    {
        name: "Weather App",
        description:
            "Weather App made with React JS using the OpenWeatherMap API and GeoDB API with places autocomplete.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: weather,
        source_code_link: "https://github.com/Marcellokah/weather-app",
    },
    {
        name: "eCommerce",
        description:
            "Full-Stack ECommerce React [Next.js] Application using Sanity for product database and Stripe for payment.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "full-stack",
                color: "orange-text-gradient",
            },
            {
                name: "stripe",
                color: "green-text-gradient",
            },
            {
                name: "sanity",
                color: "red-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/Marcellokah/ecommerce",
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
        name: "Ping-Pong",
        description:
            "Ping-Pong game that uses cursor movement for controls, made with Vanilla JS.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: pong,
        source_code_link: "https://github.com/Marcellokah/pong",
    },
];

export { services, technologies, experiences, testimonials, projects };