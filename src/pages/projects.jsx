import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import GithubProjects from '@/components/Projects';
import Metrics from '@/components/Metrics';

const Projects = ({ gitProjects, metrics }) => {
  return (
    <>
      <Metrics data={metrics} />
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
      gitProjects: gitProjects?.message
        ? false
        : gitProjects.map((project) => {
            return {
              id: project.id,
              html_url: project.html_url,
              language: project.language,
              description: project.description,
              owner: {
                avatar_url: project.owner.avatar_url,
                login: project.owner.login,
              },
              name: project.name,
              pushed_at: project.pushed_at,
            };
          }),
      metrics: wakapiMetrics?.user_id
        ? {
            projects: wakapiMetrics.labels,
            languages: wakapiMetrics.languages.filter(
              (value) => !['INI', 'unknown'].includes(value.key)
            ),
          }
        : false,
    },
    revalidate: 1440, // 1 day
  };
}

export default Projects;
