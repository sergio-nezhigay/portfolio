import React from 'react';
import { SiNextdotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { BsWordpress } from 'react-icons/bs';

import imConsultingImg from '@/public/im-consulting.jpg';
import carpTravelImg from '@/public/CarpTravel.jpg';
import legalImg from '@/public/Legal.jpg';
import newsImg from '@/public/News.jpg';
import moviesImg from '@/public/movies.jpg';
import taskProImg from '@/public/TaskPro.jpg';
import webstudioImg from '@/public/webstudio.jpg';
import miminoImg from '@/public/mimino.jpg';
import qleenImg from '@/public/qleen.jpg';
import ecoSolutionImg from '@/public/ecosolution.jpg';
import devOverflowImg from '@/public/dev-overflow.jpg';
import tortImg from '@/public/tort.jpg';
import giftImg from '@/public/gift.jpg';
import discountImg from '@/public/discount.webp';
import informImg from '@/public/informatica.webp';
import informLiquidImg from '@/public/informatica-liquid.webp';
import suiteImg from '@/public/suite.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'Custom Shopify Theme – Dawn Based',
    description:
      'Developed a fully customized Shopify theme using Liquid, JavaScript, and theme app extensions to deliver bespoke design and functionality.',
    tags: ['Shopify', 'Liquid', 'THEME CUSTOMIZATION'],
    imageUrl: informLiquidImg,
    github: 'https://github.com/sergio-nezhigay/dawn',
    live: 'https://informatica.com.ua/',
  },
  {
    title: 'Shopify Discounts App with Google Dynamic Pricing',
    description:
      'Developed a Shopify public app to integrate Google’s AI-powered Automated Discounts. Enabled dynamic, performance-based sale pricing directly on product pages and in Google Shopping Ads.',
    tags: [
      'Shopify Public App',
      'Shopify Discount function API',
      'Google Merchant Center',
      'JWT',
    ],
    imageUrl: discountImg,
    github: 'https://github.com/sergio-nezhigay/dynamic-discounts',
    live: 'https://support.google.com/merchants/answer/15152429?hl=en',
  },
  {
    title: 'Shopify Hydrogen Commerce Store',
    description:
      'A modern React-based Shopify storefront built with Hydrogen and Remix, optimized for performance and flexibility',
    tags: ['Shopify', 'React', 'Remix', 'Tailwind'],
    imageUrl: informImg,
    github: 'https://github.com/sergio-nezhigay/hydrogen',
    live: 'https://hydrogen-92203766527a550b97d1.o2.myshopify.dev/',
  },
  {
    title: 'Ecommerce Suite App',
    description:
      'A robust Shopify app developed with Gadget.dev, Hydrogen, Node.js, OpenAI, and third-party API integrations to enhance store operations',
    tags: ['Shopify', 'React', 'Remix'],
    imageUrl: suiteImg,
    github: 'https://github.com/sergio-nezhigay/suite',
    live: 'https://informatica.com.ua/',
  },
  {
    title: 'Dev Flow',
    description:
      'A full-stack community platform for developers to ask and answer programming questions—built as a practical training project',
    tags: ['React', 'Tailwind', 'Shadcn/ui', 'Next.js', 'MongoDB'],
    imageUrl: devOverflowImg,
    github: 'https://github.com/sergio-nezhigay/stack_overflow_next14',
    live: 'https://stack-overflow-next14.vercel.app/',
  },
  {
    title: 'De_tort',
    description:
      'A commercial project built in a team setting, featuring complex components like a dynamic, multifunctional form',
    tags: ['Strapi', 'React', 'Tailwind', 'Next.js', 'Shadcn/ui'],
    imageUrl: tortImg,
    github: 'https://github.com/SoftRyzen-internship/de-tort',
    live: 'https://de-tort.com.ua/',
  },
  {
    title: 'Gift Studio',
    description:
      'Led a team and served as the headless CMS Sanity lead in a commercial project for a company that creates edible bouquets',
    tags: ['Sanity', 'React', 'Tailwind', 'Next.js'],
    imageUrl: giftImg,
    github: 'https://github.com/SoftRyzen-internship/gift-studio',
    live: 'https://www.gift-studio.com.ua/',
  },
  {
    title: 'CarpTravel',
    description: 'A personal training project for a Ukrainian travel agency.',
    tags: ['React', 'Next.js', 'Tailwind', 'Shadcn/ui'],
    imageUrl: carpTravelImg,
    github: 'https://github.com/sergio-nezhigay/carptravel-ts',
    live: 'https://carptravel-ts.vercel.app/',
  },
  {
    title: 'ECO Solutions',
    description: 'A personal training project for an eco services company.',
    tags: ['Shadcn/ui', 'React', 'Next.js', 'Tailwind'],
    imageUrl: ecoSolutionImg,
    github: 'https://github.com/sergio-nezhigay/eco',
    live: 'https://eco1-six.vercel.app/',
  },
  {
    title: 'IM Consulting',
    description:
      'A commercial team project for the website of a coaching services company, IM Consulting.',
    tags: ['React', 'Next.js', 'Tailwind'],
    imageUrl: imConsultingImg,
    github: 'https://github.com/SoftRyzen-internship/IM-CONSULTING',
    live: 'https://im-consulting.vercel.app/',
  },
  {
    title: 'Legal',
    description: 'A personal training project for a virtual law firm.',
    tags: ['HTML', 'CSS', 'SCSS', 'Javascript'],
    imageUrl: legalImg,
    github: 'https://github.com/sergio-nezhigay/legal',
    live: 'https://sergio-nezhigay.github.io/legal/',
  },
  {
    title: 'News',
    description: 'A team training project for a news website.',
    tags: ['HTML', 'CSS', 'SCSS', 'Javascript'],
    imageUrl: newsImg,
    github: 'https://github.com/GregTerekhov/news-project',
    live: 'https://gregterekhov.github.io/news-project/',
  },
  {
    title: 'Movies',
    description: 'A personal training project for a movie catalog platform.',
    tags: ['React', 'Axios', 'Yup'],
    imageUrl: moviesImg,
    github: 'https://github.com/sergio-nezhigay/goit-react-hw-05-movies',
    live: 'https://sergio-nezhigay.github.io/goit-react-hw-05-movies/',
  },
  {
    title: 'TaskPro',
    description: 'A team training project for a task management app.',
    tags: ['React', 'NodeJS', 'MongoDB', 'Fullstack'],
    imageUrl: taskProImg,
    github: 'https://github.com/HennadiiBorysevych/frontEnd_tasksPro',
    live: 'https://hennadiiborysevych.github.io/frontEnd_tasksPro/',
  },
  {
    title: 'Webstudio',
    description: 'A training project for a virtual web studio.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: webstudioImg,
    github: 'https://github.com/sergio-nezhigay/goit-markup-hw-08',
    live: 'https://sergio-nezhigay.github.io/goit-markup-hw-08/',
  },
  {
    title: 'Mimino',
    description: 'A team training project for a restaurant website.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: miminoImg,
    github: 'https://github.com/GregTerekhov/mimino-project',
    live: 'https://gregterekhov.github.io/mimino-project/',
  },
  {
    title: 'Qleen Landing Page',
    description: 'A personal training project for a cleaning company.',
    tags: ['Webflow'],
    imageUrl: qleenImg,
    github: '',
    live: 'https://qleen.webflow.io/',
  },
] as const;

export const experiencesData = [
  {
    title: 'Specialist Degree in Computer and Network Systems',
    location: 'Donetsk Technical University',
    description:
      'Completed a 5-year program focused on network infrastructure, computing systems, and IT fundamentals',
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: 'Fullstack Developer Certification',
    location: 'Online',
    description:
      'Completed a 12-month full-stack development program covering modern web technologies including React, Node.js, and databases',
    icon: React.createElement(FaReact),
    date: '2022 - 2023',
  },
  {
    title: 'Site Support Manager – Informatica',
    location: 'Informatica',
    description:
      'Responsible for maintaining and improving website performance, implementing JavaScript-based features, and managing WordPress content and functionality',
    icon: React.createElement(BsWordpress),
    date: '2015 - present',
  },
  {
    title: '1st Place – Luxoft Hackathon',
    location: 'Kyiv / Remote',
    description:
      'Our team won first place at the Luxoft Hackathon by developing an inclusive map of Kyiv for wheelchair users. We focused on accessibility, usability, and leveraging tech for social impact.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Frontend Developer Intern – SoftRyzen',
    location: 'remote',
    description:
      'Contributed to real-world commercial projects using React, Next.js, and headless CMS tools during a six-month remote internship.',
    icon: React.createElement(SiNextdotjs),
    date: '2023, September - 2024, March',
  },
];

export const skillsData = [
  'HTML/CSS',
  'JavaScript/TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Remix',
  'Radix',
  'Node.js',
  'Git',
  'Shadcn/UI',
  'CSS Modules',
  'Styled Components',
  'Tailwind',
  'Bootstrap',
  'MUI',
  'Strapi',
  'Sanity',
  'MongoDB',
  'GraphQL',
  'REST API',
  'Webflow',
  'Wordpress',
  'Adwords',
  'SEO',
] as const;
