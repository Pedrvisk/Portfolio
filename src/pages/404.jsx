import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ErrorClient = () => {
  return (
    <div className='max-h-52 p-5 text-center flex flex-col items-center justify-center'>
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
