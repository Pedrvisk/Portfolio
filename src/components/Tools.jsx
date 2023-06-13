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

const Tools = () => {
  return [
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
};

export default Tools;
