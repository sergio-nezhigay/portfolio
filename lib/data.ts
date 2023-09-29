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
    title: "IM Consulting",
    description:
      "Commercial project for the site of couching services company IM Consulting",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: imConsultingImg,
  },
  {
    title: "CarpTravel",
    description: "Site for Ukrainian Travel agency",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: carpTravelImg,
  },
  {
    title: "Legal",
    description: "Training site for virtual law firm",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
    imageUrl: legalImg,
  },
  {
    title: "News",
    description: "Training team project for news site",
    tags: ["HTML", "CSS", "SCSS", "Javascript"],
    imageUrl: newsImg,
  },
  {
    title: "Informatica",
    description: "E-commerce commercial site for computer parts store",
    tags: ["WordPress", "Woocommerce"],
    imageUrl: informaticaImg,
  },
  {
    title: "Movies",
    description: "Movies catalogue platform",
    tags: ["React", "Axios", "Yup"],
    imageUrl: moviesImg,
  },
  {
    title: "TaskPro",
    description: "Tasks management app",
    tags: ["React", "NodeJS", "MongoDB", "Fullstack"],
    imageUrl: taskProImg,
  },
  {
    title: "Webstudio",
    description: "Training site for virtual webstudio",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: webstudioImg,
  },
  {
    title: "Mimino",
    description: "Training team project for restaurant",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: miminoImg,
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
    location: "Kyiv",
    description:
      "I'm currently a site support manager. Responsibilities include site updating and functionality improvements, with a focus on JavaScript and WordPress.",
    icon: React.createElement(BsWordpress),
    date: "2015 - present",
  },
  {
    title: "Frontend developer",
    location: "Kyiv",
    description:
      "Participation as an outstaff in the IM Consulting commercial project.",
    icon: React.createElement(SiNextdotjs),
    date: "2023, September",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Webflow",
  "Wordpress",
  "Adwords",
  "SEO",
] as const;
