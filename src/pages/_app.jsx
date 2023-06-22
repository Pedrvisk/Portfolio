import '@/styles/globals.css';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import { useLanyardWS } from 'use-lanyard';

const inter = Inter({
  subsets: ['latin'],
});

import { Head } from '@/partials/Head';
import { PageWithTransition } from '@/partials/PageWithTransition';

const App = ({ Component, pageProps }) => {
  const LanyardData = useLanyardWS('216662585737478144');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('__nextloader');
      if (loader) {
        const loaderLogo = document.getElementById('__nextlogo');
        if (loaderLogo) {
          setTimeout(() => (loaderLogo.style.opacity = 0), 2900);
        }

        // setTimeout(() => (loader.style.height = 0), 4000);
        setTimeout(() => (loader.style.opacity = 0), 3000); // 5000
        setTimeout(() => (loader.style.display = 'none'), 4000); // 6000
      }
    }
  }, []);

  return (
    <>
      <Head />
      <PageWithTransition user={LanyardData}>
        <style
          jsx
          global
        >
          {`
            :root {
              --inter-font: ${inter.style.fontFamily};
            }
          `}
        </style>
        <Component
          {...pageProps}
          user={LanyardData}
        />
      </PageWithTransition>
    </>
  );
};

export default appWithTranslation(App);
