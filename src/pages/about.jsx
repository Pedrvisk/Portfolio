import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {
  return (
    <div>
      <h1 className='text-4xl'>About Page </h1>
      <div className='w-full bg-black h-full flex-1 rounded-md p-5'>sdsd</div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default About;
