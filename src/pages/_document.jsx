import { Html, Head, Main, NextScript } from 'next/document';
import { Logo } from '@/assets/Logo';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='font-serif min-h-screen select-none bg-gradient-to-bl from-black to-[#191919] text-white'>
        <div
          id='__nextloader'
          className='flex w-full h-full transition-all duration-1000 ease-in-out z-[1000] bg-gradient-to-bl from-black to-[#191919] fixed items-center justify-center'
        >
          <Logo
            id='__nextlogo'
            className='animate-logoAnimation transition-opacity duration-500 ease-in-out drop-shadow-[0px_0px_3px_white]'
          />
        </div>
        <div
          id='__nextbackground'
          className='bg fixed z-0 h-screen w-full opacity-[0.3] bg-[url("/img/background.gif")] bg-fixed bg-cover bg-no-repeat'
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
