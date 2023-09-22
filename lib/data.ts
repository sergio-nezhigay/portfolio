import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
