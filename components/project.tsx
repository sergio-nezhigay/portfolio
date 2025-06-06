'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number];
import { convertImage, toBase64 } from '@/utils/getBase64';
const BLUR_COLOR = '#e5e7eb';

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  live,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='flex flex-wrap my-4 gap-2'>
            {tags.map((tag, index) => (
              <li
                className='text-[0.7rem] bg-white dark:bg-white/70 px-3 py-1 text-black/[0.7] uppercase tracking-wider  dark:text-black/70 rounded'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className='sm:mt-auto flex gap-3'>
            {github && (
              <a
                href={github}
                rel='nofollow noreferrer noopener'
                target='_blank'
                className='bg-white text-black/[0.8] hover:text-black py-0.5 px-3 rounded-full outline-none flex
              items-center focus:scale-110 hover:scale-110  active:scale-105 transition'
              >
                <AiFillGithub className='mr-2' /> GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                rel='nofollow noreferrer noopener'
                target='_blank'
                className='bg-white text-black/[0.7] hover:text-black py-0.5 px-3 rounded-full outline-none flex
              items-center focus:scale-110 hover:scale-110  active:scale-105 transition'
              >
                <FaGlobe className='mr-2' /> Live page
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(96, 96, BLUR_COLOR)
          )}`}
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
}
