import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import { FaGithubAlt } from 'react-icons/fa';
import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const Tools = () => {
  const prefersReducedMotion = useReducedMotion();

  const usedTools = [
    {
      icon: SiExpress,
      tooltip: 'Express',
      href: 'https://expressjs.com/',
    },
    {
      icon: SiGit,
      tooltip: 'Git',
      href: 'https://git-scm.com/doc',
    },
    {
      icon: SiJavascript,
      tooltip: 'JavaScript',
      href: 'https://devdocs.io/javascript-array/',
    },
    {
      icon: SiJest,
      tooltip: 'Jest',
      href: 'https://jestjs.io/pt-BR/docs/getting-started',
    },
    {
      icon: SiMongodb,
      tooltip: 'MongoDB',
      href: 'https://www.mongodb.com/docs/',
    },
    {
      icon: SiNextdotjs,
      tooltip: 'NextJS',
      href: 'https://nextjs.org/docs',
    },
    {
      icon: SiNodedotjs,
      tooltip: 'NodeJS',
      href: 'https://nodejs.org/en/docs',
    },
    {
      icon: SiReact,
      tooltip: 'React',
      href: 'https://react.dev/learn',
    },
    {
      icon: SiTailwindcss,
      tooltip: 'Taildwind CSS',
      href: 'https://tailwindcss.com/docs/installation',
    },
    {
      icon: SiTypescript,
      tooltip: 'TypeScript',
      href: 'https://www.typescriptlang.org/docs/',
    },
    {
      icon: SiVisualstudiocode,
      tooltip: 'Visual Studio Code',
      href: 'https://code.visualstudio.com/',
    },
  ];

  return (
    <div
      className={`p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 md:col-span-6 rounded-md ${
        prefersReducedMotion
          ? 'no-animation transition-none animate-none'
          : 'backdrop-blur backdrop-saturate-150'
      }`}
    >
      <h2 className='flex items-center justify-between mb-2 text-slate-300 text-center font-bold sm:text-xl md:text-left'>
        <FaGithubAlt className='w-6 h-6 fill-slate-300' />
        <Link
          href='/github'
          target='_blank'
          rel='noopener noreferrer'
          className={`hover:text-slate-300/60 ${
            prefersReducedMotion ? '' : 'transition-colors'
          }`}
        >
          Github
        </Link>
      </h2>
      <div className='grid grid-cols-7 gap-2 md:grid-cols-10'>
        {usedTools.map((value, index) => (
          <Link
            href={value.href}
            key={index}
            className='md:tooltip md:animate-none flex items-center justify-center text-center'
            target='_blank'
            rel='noopener noreferrer'
            data-tip={value.tooltip}
          >
            <button
              className={`mt-2 bg-transparent rounded-md border-none shadow-none ${
                prefersReducedMotion
                  ? ''
                  : 'hover:origin-center hover:scale-[1.1] transition-all'
              }`}
            >
              <value.icon className='fill-slate-300/80 w-8 h-8 drop-shadow-[0_0_2px_white]' />
            </button>
          </Link>
        ))}
      </div>
      <div className='flex items-center mt-4 md:mt-2 gap-2 justify-between'>
        <div className='bg-slate-300/20 rounded-md h-1 w-full' />
        <h4 className='flex items-center justify-center text-slate-300/80 text-center font-bold text-xs md:text-sm'>
          github{' '}
          <span
            className={
              prefersReducedMotion ? 'text-slate-300/60' : 'animate-pulse'
            }
          >
            /
          </span>{' '}
          Pedrvisk
        </h4>
        <div className='bg-slate-300/20 rounded-md h-1 w-full' />
      </div>
    </div>
  );
};

export default Tools;
