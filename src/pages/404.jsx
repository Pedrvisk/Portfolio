import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ErrorClient = () => {
  return (
    <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-12 rounded-md backdrop-blur'>
      <h1 className='text-5xl mb-4 font-semibold text-red-500'>404</h1>
      <p>Oops! We cant seem to find the page youre looking for.</p>
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

export default ErrorClient;
