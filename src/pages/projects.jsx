import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FaGithubAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageTransition } from '@/partials/PageWithTransition';

const Projects = ({ projects, metrics }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-12 rounded-md backdrop-blur'>
        <h2
          className={`flex items-center justify-between mb-2 text-center text-medium font-bold sm:text-xl md:text-left`}
        >
          <Link
            href='/github'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-slate-300/60 transition-colors flex items-center text-center gap-2'
          >
            <LanguageTransition>{t('projects.title')}</LanguageTransition>
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
                  className='flex flex-col w-full h-36 transition-all rounded-md bg-[#191919]/40 hover:bg-[#FFF]/5 p-5'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex items-center justify-between font-medium'>
                    <h2 className='text-slate-300/80 text-sm sm:text-base'>
                      {value.name}
                    </h2>
                    <span className='text-slate-300/50 text-xs'>
                      {new Date(value.pushed_at).toLocaleString()}
                    </span>
                  </div>
                  <div className='flex flex-1 ml-2 items-center text-sm font-base text-slate-300'>
                    {value.description}
                  </div>
                  <div className='flex items-center justify-between font-medium'>
                    <div className='flex items-center justify-center gap-2'>
                      <Image
                        src={value.owner.avatar_url}
                        width={18}
                        height={18}
                        className='rounded-full'
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
              <div className='h-36 w-full rounded-md bg-slate-300/10' />
              <div className='h-36 w-full rounded-md bg-slate-300/10' />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  const gitProjects = await fetch('https://api.github.com/users/Pedrvisk/repos')
    .then(async (res) => await res.json())
    .catch(() => false);

  const wakapiMetrics = await fetch(
    'https://wak4api.pedrovisk.ml/api/summary?interval=all_time',
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.WAKAPI_KEY).toString(
          'base64'
        )}`,
      },
    }
  )
    .then(async (res) => await res.json())
    .catch(() => false);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      projects: gitProjects?.message ? false : gitProjects,
      metrics: wakapiMetrics?.user_id ? wakapiMetrics : false,
    },
    revalidate: 1440, // 1 day
  };
}

export default Projects;
