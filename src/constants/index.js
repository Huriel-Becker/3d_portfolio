import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    frontend,
    carhub,
    osaka,
    customshirt,
    metaversus,
    openai
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "FrontEnd Developer",
      icon: frontend,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const projects = [
    {
      name: "Car Hub",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next js 13",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/Huriel-Becker/car_showcase_project_react_next_typescript_tailwind",
      website: "https://showcasecar.vercel.app/",
    },
    {
      name: "OsakaSushi",
      description:
        "Website built only with html and css for a responsive and modern sushi restaurant, where every order is a direct trip to Japan with its cuisine and culture.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: osaka,
      source_code_link: "https://github.com/Huriel-Becker/sushi_restaurant_site",
      website: "https://sushiosaka.netlify.app",
    },
    {
      name: "CustomShirt 3D",
      description:
        "A website that uses 3D graphics to showcase a tshirt with a custom logo, that you can create or ask an artificial intelligence to do it for you.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss ",
          color: "pink-text-gradient",
        },
      ],
      image: customshirt,
      source_code_link: "https://github.com/Huriel-Becker/ai_threeJS_productShirt-website",
      website: "https://shirtcustom.netlify.app",
    },
    {
      name: "Metaversus",
      description:
        "A metaverse concept landing page, that uses modern technologies like react, and framer motion to bring our imagination to life!",
      tags: [
        {
          name: "framer motion",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss ",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/Huriel-Becker/project_metaverse",
      website: "https://metaversussite.netlify.app",
    },
    {
      name: "Ai Image Generator",
      description:
        "A website that uses DALL-E and can generate everything from memes and art to beautiful UI/UX designs and showcase to the community!",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb ",
          color: "pink-text-gradient",
        },
      ],
      image: openai,
      source_code_link: "https://github.com/Huriel-Becker/project_ai_mern_image_generation",
      website: "https://dalleimageclone.netlify.app",
    },
  ];
  
  export { services, technologies, projects };