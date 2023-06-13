import { International, Brazil } from '@/assets/Flags';

export const Languages = [
  {
    code: 'pt-BR',
    name: 'Português - Brasil',
    icon: Brazil,
    flag: 'BR',
  },
  {
    code: 'en',
    name: 'English - International',
    icon: International,
    flag: 'UN',
  },
];

export const switchLanguage = (router, code) => {
  return router.push(
    { pathname: router.pathname, query: router.query },
    router.asPath,
    {
      locale: code,
    }
  );
};

export const currentLanguage = (router) => {
  return Languages.filter((lang) => lang.code === router.locale)[0];
};
