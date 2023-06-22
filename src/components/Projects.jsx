import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { LanguageTransition } from '@/partials/PageWithTransition';

import { FaGithubAlt } from 'react-icons/fa';

const Projects = ({ projects }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-12 rounded-md backdrop-blur'>
      <h2 className='flex items-center justify-between text-slate-300 mb-2 md:mb-4 text-center font-bold sm:text-xl md:text-left'>
        <Link
          href='/github'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-slate-300/60 transition-colors'
        >
          <LanguageTransition>{t('project.title')}</LanguageTransition>
        </Link>
        <FaGithubAlt
          className={`w-6 h-6 fill-slate-300 ${
            projects ? '' : 'animate-pulse'
          }`}
        />
      </h2>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        {projects ? (
          Object.values(projects)
            .filter((project) => project.name !== 'Pedrvisk')
            .map((value) => (
              <Link
                href={value.html_url}
                key={value.id}
                className='flex flex-col w-full h-36 transition-all rounded-md bg-[#191919]/40 hover:bg-white/5 p-5'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='flex items-center justify-between font-medium'>
                  <h2 className='text-slate-300/80 text-sm sm:text-base'>
                    {value.name}
                  </h2>
                  <span className='text-slate-300/50 text-xs'>
                    <LanguageTransition>
                      {format(
                        new Date(value.pushed_at),
                        i18n.language === 'pt-BR'
                          ? "dd/MM/yyyy, 'às' HH:mm"
                          : "MM/dd/yyyy, 'at' HH:mm a"
                      )}
                    </LanguageTransition>
                  </span>
                </div>
                <div className='flex flex-1 ml-2 leading-tight items-center text-sm font-base text-slate-300'>
                  {value.description}
                </div>
                <div className='flex items-center justify-between font-medium'>
                  <div className='flex items-center justify-center gap-2'>
                    <Image
                      src={value.owner.avatar_url}
                      width={18}
                      quality={100}
                      height={18}
                      className='rounded-full'
                      alt='Github Developer Avatar'
                    />
                    <span className='text-slate-300/80 text-xs'>
                      {value.owner.login}
                    </span>
                  </div>
                  <span className='text-slate-300/50 text-xs md:text-sm'>
                    {value.language}
                  </span>
                </div>
              </Link>
            ))
        ) : (
          <>
            <div className='h-36 w-full rounded-md bg-slate-300/10'>
              <div className='h-full text-end text-[9px] text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-2'>
                <span className='animate-pulse'>
                  <LanguageTransition>{t('loading')}</LanguageTransition>
                </span>
              </div>
            </div>
            <div className='h-36 w-full rounded-md bg-slate-300/10'>
              <div className='h-full text-end text-[9px] text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-2'>
                <span className='animate-pulse'>
                  <LanguageTransition>{t('loading')}</LanguageTransition>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
