import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { IoArrowBack } from 'react-icons/io5';
import { LanguageTransition } from '@/partials/PageWithTransition';

const ErrorServer = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div
      className={`flex text-center flex-col items-center justify-center p-2 md:p-5 col-span-12 h-72 bg-[#191919]/20 border-[0.5px] border-gray-900/20 md:col-span-12 rounded-md ${
        prefersReducedMotion ? '' : 'backdrop-blur backdrop-saturate-150'
      }`}
    >
      <h1 className='text-6xl font-bold text-red-500 leading-tight'>500</h1>
      <p className='text-medium font-medium leading-tight text-slate-300/80'>
        <LanguageTransition>{t('error.server')}</LanguageTransition>
      </p>
      <button
        className={`btn w-40 mt-4 text-slate-300/80 border-none bg-slate-300/5 flex items-center justify-center gap-2 hover:bg-white/5 ${
          prefersReducedMotion
            ? 'no-animation transition-none animate-none'
            : ''
        }`}
        onClick={() => router.back()}
      >
        <IoArrowBack className='w-4 h-4 fill-slate-300/80' />
        <LanguageTransition>{t('error.back')}</LanguageTransition>
      </button>
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

export default ErrorServer;
