import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import GithubProjects from '@/components/Projects';

const Projects = ({ gitProjects, metrics }) => {
  return (
    <>
      <GithubProjects projects={gitProjects} />
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
      gitProjects: gitProjects?.message ? false : gitProjects,
      metrics: wakapiMetrics?.user_id ? wakapiMetrics : false,
    },
    revalidate: 1440, // 1 day
  };
}

export default Projects;
