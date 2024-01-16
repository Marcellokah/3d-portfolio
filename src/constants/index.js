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

    portfolio,
    weather,
    ecommerce,
    fighting,
    dino,
    blog,

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
        name: "Liquid",
        icon: liquid,
    },
    {
        name: "graphQL",
        icon: graphql,
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
        title: "Customer Support Specialist",
        company_name: "Strikingly",
        icon: strikingly,
        iconBg: "#383E56",
        date: "June 2023 - October 2023",
        points: [
            "Facilitated seamless domain connections, executed efficient domain transfers, and adeptly managed DNS records for enhanced online presence.",
            "Evaluated and refined custom header/footer HTML, ensuring a polished and cohesive visual representation aligned with project requirements.",
            "Meticulously identified and reported bugs, contributing to the continuous improvement and stability of web applications.",
            "Executed translation tasks with precision and cultural sensitivity, enhancing the accessibility and global reach of digital content.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "origin/develop",
        icon: origindev,
        iconBg: "#E6DEDD",
        date: "November 2023 - Present",
        points: [
            "Developing and maintaining web applications using Liquid, graphQL, Gatsby and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
    {
        social:
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
        name: "Blog Website",
        description:
            "Blog website built using React JS, deployed with Vite, and styled with Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "blue-text-gradient",
            },
        ],
        image: blog,
        source_code_link: "https://github.com/Marcellokah/origin-develop-assignment",
    },
];

export { services, technologies, experiences, socials, projects };