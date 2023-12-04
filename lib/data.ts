import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsWordpress } from "react-icons/bs";

import imConsultingImg from "@/public/im-consulting.jpg";
import informaticaImg from "@/public/Informatica.jpg";
import carpTravelImg from "@/public/CarpTravel.jpg";
import legalImg from "@/public/Legal.jpg";
import newsImg from "@/public/News.jpg";
import moviesImg from "@/public/movies.jpg";
import taskProImg from "@/public/TaskPro.jpg";
import webstudioImg from "@/public/webstudio.jpg";
import miminoImg from "@/public/mimino.jpg";
import qleenImg from "@/public/qleen.jpg";
import ecosolutionImg from "@/public/ecosolution.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ECO solutions Consulting",
    description: "Training personal project for the eco services company",
    tags: ["Shadcn/ui", "React", "Next.js", "Tailwind"],
    imageUrl: ecosolutionImg,
    github: "https://github.com/sergio-nezhigay/eco",
    live: "https://eco1-six.vercel.app/",
  },
  {
    title: "IM Consulting",
    description:
      "Commercial team project for the site of couching services company IM Consulting",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: imConsultingImg,
    github: "https://github.com/SoftRyzen-internship/IM-CONSULTING",
    live: "https://im-consulting.vercel.app/",
  },
  {
    title: "CarpTravel",
    description: "Training personal project for Ukrainian Travel agency",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: carpTravelImg,
    github: "https://github.com/sergio-nezhigay/carptravel",
    live: "https://carptravelling.vercel.app/",
  },
  {
    title: "Legal",
    description: "Training personal project for virtual law firm",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
    imageUrl: legalImg,
    github: "https://github.com/sergio-nezhigay/legal",
    live: "https://sergio-nezhigay.github.io/legal/",
  },
  {
    title: "News",
    description: "Training team project for news site",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
    imageUrl: newsImg,
    github: "https://github.com/GregTerekhov/news-project",
    live: "https://gregterekhov.github.io/news-project/",
  },
  {
    title: "Informatica",
    description: "E-commerce commercial site for computer parts store",
    tags: ["WordPress", "Woocommerce"],
    imageUrl: informaticaImg,
    github: "",
    live: "https://informatica.com.ua/",
  },
  {
    title: "Movies",
    description: "Training personal project - Movies catalogue platform",
    tags: ["React", "Axios", "Yup"],
    imageUrl: moviesImg,
    github: "https://github.com/sergio-nezhigay/goit-react-hw-05-movies",
    live: "https://sergio-nezhigay.github.io/goit-react-hw-05-movies/",
  },
  {
    title: "TaskPro",
    description: "Training team project - Tasks management app",
    tags: ["React", "NodeJS", "MongoDB", "Fullstack"],
    imageUrl: taskProImg,
    github: "https://github.com/HennadiiBorysevych/frontEnd_tasksPro",
    live: "https://hennadiiborysevych.github.io/frontEnd_tasksPro/",
  },
  {
    title: "Webstudio",
    description: "Training site for virtual webstudio",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: webstudioImg,
    github: "https://github.com/sergio-nezhigay/goit-markup-hw-08",
    live: "https://sergio-nezhigay.github.io/goit-markup-hw-08/",
  },
  {
    title: "Mimino",
    description: "Training team project for restaurant",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: miminoImg,
    github: "https://github.com/GregTerekhov/mimino-project",
    live: "https://gregterekhov.github.io/mimino-project/",
  },
  {
    title: "Qleen Landing page",
    description: "Training personal project for a cleaning company",
    tags: ["Webflow"],
    imageUrl: qleenImg,
    github: "",
    live: "https://qleen.webflow.io/",
  },
] as const;

export const experiencesData = [
  {
    title: "Specialist Degree in Computer and Network Systems",
    location: "Donetsk Technical University",
    description: "I graduated after 5 years of studying.",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Fullstack Developer",
    location: "Online",
    description: "I graduated after 12 month of studying.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Site Support Manager",
    location: "Informatica",
    description:
      "I'm currently a site support manager. Responsibilities include site updating and functionality improvements, with a focus on JavaScript and WordPress.",
    icon: React.createElement(BsWordpress),
    date: "2015 - present",
  },
  {
    title: "Frontend developer",
    location: "Kyiv",
    description: "Internship commercial project at SoftRyzen",
    icon: React.createElement(SiNextdotjs),
    date: "2023, September",
  },
];

export const skillsData = [
  "HTML/CSS",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Shadcn/UI",
  "CSS Modules",
  "Styled Components",
  "Tailwind",
  "Bootstrap",
  "MUI",
  "MongoDB",
  "Redux",
  "Webflow",
  "Wordpress",
  "Adwords",
  "SEO",
] as const;
