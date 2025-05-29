'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I graduated with a degree in{' '}
        <span className='font-medium'>Computer and Network Systems</span> and
        started as an e-marketing manager. 3 years ago, I shifted to{' '}
        <span className='font-medium'>full-stack web development</span> and
        completed a 12-month certification program.
      </p>

      <p className='mb-3'>
        Currently, I work as a{' '}
        <span className='font-medium'>Shopify Web Developer</span> at
        Informatica, building performant, custom Shopify sites and improving
        business workflows. I also completed a React/Next.js internship at
        SoftRyzen and won first place at the Luxoft Hackathon for creating an
        accessible map of Kyiv.
      </p>

      <p className='mb-3'>
        My main tech stack includes{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I’m familiar with TypeScript. I love problem-solving and am always
        eager to learn new technologies. I’m looking for a{' '}
        <span className='font-medium'>full-time software developer</span> role.
      </p>

      <p>
        <span className='italic'>When I’m not coding</span>, I enjoy reading,
        watching movies, playing basketball, and biking. I also love{' '}
        <span className='font-medium'>learning new things</span>.
      </p>
    </motion.section>
  );
}
