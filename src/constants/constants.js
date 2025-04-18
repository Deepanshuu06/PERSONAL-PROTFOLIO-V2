export const navLinks = [
  {
    id: "projects",
    title: "projects",
    path: "/projects",
  },

  {
    id: "skills",
    title: "skills",
    path: "/skills",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

export const personalDetails = {
  name: "Deepanshu Baghel",
  resumeLink: "",
};

export const logos = [
  {
    src: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    alt: "Next.js",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    alt: "Redux Toolkit",
  },
  {
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
    alt: "MongoDB",
  },
  {
    src: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    alt: "HTML5",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3",
  },
  {
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg",
    alt: "Git",
  },
  {
    src: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
    alt: "GitHub",
  },
  {
    src: "https://www.vectorlogo.zone/logos/linux/linux-ar21.svg",
    alt: "Linux",
  },
  {
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "Postman",
  },
  {
    src: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    alt: "JavaScript",
  },
  {
    src: "https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg",
    alt: "NestJS",
  },
];

const introContent = {
  title: "Hi, I'm a Developer Building High-Quality Web Experiences",
  description:
    "I specialize in building modern, fast, and scalable websites using:",
  features: [
    "React and Next.js for dynamic and responsive web apps",
    "Clean UI/UX design principles for user-friendly experiences",
    "Optimized performance and SEO-ready development",
  ],
  buttonText: "LET'S BUILD SOMETHING TOGETHER",
};
const testimonialContent = {
  quote:
    "I’m passionate about crafting clean, efficient code and bringing ideas to life through thoughtful design and powerful development.",
  subQuote:
    "From personal projects to business websites — I’ve got you covered.",
  author: "— Deepanshu Baghel, Web Developer",
  buttonText: "VIEW MY WORK",
  imageUrl:
    "https://res.cloudinary.com/deepanshu06/image/upload/v1744795189/IMG_1098_3_sgc1kj.jpg",
};

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shri Vaishnav Institute of Computer Application",
    duration: "2022 - 2025",
    coursework: {
      core: [
        "Advanced Web Development",
        "Database Systems & SQL",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Computer Architecture",
      ],
      electives: [
        "Cloud Computing Fundamentals",
        "Mobile App Development",
        "UI/UX Design Principles",
        "Cyber Security Basics",
      ],
    },
  },
  {
    degree: "Higher Secondary Education",
    institution: "Gyan Sagar Anurag School",
    duration: "2020 - 2022",
  },
];

const projects = [
  {
    name: "Food Ordering Web App (Frontend)",
    id: "892732",
    description:
      "A responsive food ordering platform inspired by Swiggy, featuring real-time data integration through Swiggy's live API. Users can browse restaurants, explore menus, and place orders with ease.",
    technologies: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744956757/Screenshot_2025-04-13_at_9.06.26_PM_avilr8.png",
    deployedLink: "https://food-zone-mauve.vercel.app/",
    source_code_link:
      "https://github.com/Deepanshuu06/food_ordering_web_frontend.git",
  },
  {
    name: "Anonymous Confessions App",
    id: "726172",
    description:
      "A social platform where users can anonymously share their thoughts and confessions. Built with privacy in mind, the app ensures no identity tracking while offering a clean, modern UI.",
    technologies: [
      { name: "Next.js", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744956717/Screenshot_2025-04-13_at_9.06.07_PM_hfipsk.png",
    deployedLink: "https://anonymous-confessions-xi.vercel.app/u/deepanshu",
    source_code_link:
      "https://github.com/Deepanshuu06/anonymous_confessions.git",
  },
];

const minorProjects = [
  {
    name: "Coding Shuttle",
    id: "438221",
    description: "A pixel-perfect clone of the Coding Shuttle homepage, built using HTML, CSS, and JavaScript to practice layout and responsive design.",
    technologies: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744973105/Screenshot_2025-04-18_at_4.14.49_PM_in8xoq.png",
    deployedLink: "https://coding-shuttle.netlify.app/",
    source_code_link: "https://github.com/Deepanshuu06/coding-shuttle-clone",
  },
  {
    name: "Fenta Landing Page",
    id: "724572",
    description: "A sleek and modern landing page for a fictional brand, built with Next.js and styled using Tailwind CSS for responsive, clean UI.",
    technologies: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "GSAP", color: "blue-text-gradient" },
    ],
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744973479/Screenshot_2025-04-18_at_4.21.07_PM_dn3wav.png",
    deployedLink: "https://fenta-landingpage.netlify.app/",
    source_code_link:
      "https://github.com/Deepanshuu06/Fanta_fontend",
  },
];


const SocialLinkList = [
  {
    name: "Github",
    link: "https://github.com/Deepanshuu06",
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744962745/github_ks3hgr.png",
    color: "",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepanshu-baghel-b5711a249/",
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744962746/linkedin_rpiysx.png",
    color: "",
  },
  {
    name: "X",
    link: "https://x.com/deepanshuu06",
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744962746/twitter-x_mnziev.png",
    color: "",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/deepanshuu_06/",
    image:
      "https://res.cloudinary.com/deepanshu06/image/upload/v1744962746/instagram_iosvmz.png",
    color: "",
  },
];

const skills = [
  {
    name: "React.js",
    url: "https://react.dev",
    image: "",
  },
  {
    name: "Redux Toolkit",
    url: "https://redux-toolkit.js.org",
    image: "",
  },
  {
    name: "MongoDB",
    url: "https://mongodb.com",
    image: "",
  },
  {
    name: "Express",
    url: "https://expressjs.com",
    image: "",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    image: "",
  },
  {
    name: "GSAP",
    url: "https://greensock.com/gsap",
    image: "",
  },
  {
    name: "Git & Github",
    url: "https://github.com",
    image: "",
  },
  {
    name: "Linux",
    url: "https://linux.org",
    image: "",
  },
  {
    name: "Postman",
    url: "https://postman.com",
    image: "",
  },
];

export const ABOUT_CONTENT = {
  intro:
    "My goal is simple: to help businesses and individuals bring their vision to life online — with powerful, sleek, and functional websites that truly make an impact",

  services: [
    {
      title: "Frontend Development",
      description:
        "Building interactive UIs using React, Next.js, Tailwind CSS, and modern frameworks",
    },
    {
      title: "Backend Integration",
      description:
        "Connecting frontends with REST APIs, databases (MongoDB/MySQL), and cloud services",
    },
    {
      title: "Performance Optimization",
      description:
        "Implementing lazy loading, SEO best practices, and achieving top Lighthouse scores",
    },
    {
      title: "Responsive Design",
      description:
        "Creating mobile-first experiences that adapt flawlessly to all devices",
    },
    {
      title: "Deployment & Hosting",
      description:
        "Deploying to modern platforms like Vercel/Netlify or traditional cloud infrastructure",
    },
  ],
};

const DeveloperIllustration = [
  "https://res.cloudinary.com/deepanshu06/image/upload/v1744972228/dev2-removebg_socch5.png",
  "https://res.cloudinary.com/deepanshu06/image/upload/v1744804232/image-removebg_nywpjg.png",
  "https://res.cloudinary.com/deepanshu06/image/upload/v1744972321/image_ss9rpu.png",
  "https://res.cloudinary.com/deepanshu06/image/upload/v1744993105/devloper-removebg_bc2por.png",
  "https://res.cloudinary.com/deepanshu06/image/upload/v1744993247/devloperv2-removebg_auydsk.png"
];

export {
  introContent,
  projects,
  minorProjects,
  SocialLinkList,
  skills,
  educationData,
  testimonialContent,
  DeveloperIllustration,
};
