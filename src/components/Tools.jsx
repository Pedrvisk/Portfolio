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
import Link from 'next/link';

const Tools = () => {
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
    <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-6 rounded-md backdrop-blur'>
      <h2
        className={`flex items-center justify-between mb-2 text-center text-medium font-bold sm:text-xl md:text-left`}
      >
        <FaGithubAlt className='w-6 h-6 fill-slate-300' />
        <Link
          href='/github'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-slate-300/60 transition-colors'
        >
          Github
        </Link>
      </h2>
      <div className='grid grid-cols-7 sm:grid-cols-7 gap-2 md:grid-cols-10'>
        {usedTools.map((value, index) => (
          <Link
            href={value.href}
            key={index}
            className='md:tooltip flex items-center justify-center text-center'
            target='_blank'
            rel='noopener noreferrer'
            data-tip={value.tooltip}
          >
            <button className='flex items-center justify-center text-center mt-2 bg-transparent hover:origin-center hover:scale-[1.1] transition-all rounded-md border-none shadow-none'>
              <value.icon className='fill-slate-300/80 w-8 h-8 drop-shadow-[0_0_2px_white] flex items-center justify-center text-center' />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tools;
