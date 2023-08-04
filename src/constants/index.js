import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon : creator,
    
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
 /* {
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 /* {
    name: "MongoDB",
    icon: mongodb,
  },*/
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
  /*{
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Cloud Developer",
    company_name: "Cloud Computing Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing and developing cloud-native applications using cloud services and technologies.",
      "Provide guidance and mentorship to junior members by sharing your knowledge and experience in cloud computing and development",
      "Cover topics such as cloud architecture, programming languages, and relevant tools.",
    ],
  },
  {
    title: "Salesforce Trainee",
    company_name: "PWC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Learning Salesforce Basics, Programming in Java, It-Fundamentals, RDBMS.",
      "Familiarize yourself with the Salesforce platform, its different editions, and key features.",
      "Understand the concept of CRM and how Salesforce is used to manage customer data and interactions."
    ],
  },
  /*{
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
    "During Charan's involvement in the Cloud Computing Club, I witnessed his commitment and dedication firsthand. He actively engaged in discussions, organized workshops, and contributed to team projects.",
    name: "Asish Dass Sir",
    designation: "Professor",
    company: "NIST",
    /*image: "",*/
  },
  {
    testimonial:
      "Charan's enthusiasm for technology is commendable, and I have no doubt that he will excel in his future endeavors.",
    name: "Siba Sir",
    designation: "Professor",
    company: "NIST",
    /*image: "https://randomuser.me/api/portraits/men/5.jpg",*/
  },/*
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "JOINT-VENTURE-FUNDING",
    description:
      "Blockchain-based Joint-Venture Funding app with automated smart contracts for streamlined investment transactions.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/VCharanRaju12/JOINT-VENTURE-FUNDING/",
  },
  {
    name: "ToDoBlockchainApp",
    description:
      "Blockchain-based Todo app using smart contracts for secure task management where users can securely add, update, and complete tasks.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/VCharanRaju12/todoblockchainapp",
  },
  {
    name: "Iphone-threejs-webite",
    description:
      "A web application using Front-end languages like HTML,CSS and ReactJS and three-js has been used in creation.",
    tags: [
      {
        name: "three-js",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://apple-iphone-threejs-website.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
