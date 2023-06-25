import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import pt from 'date-fns/locale/pt-BR';
import en from 'date-fns/locale/en-US';

import { LanguageTransition } from './PageWithTransition';
import {
  Languages,
  currentLanguage,
  switchLanguage,
} from '@/components/Language';

import { Logo } from '@/assets/Logo';
import { Language } from '@/assets/Language';

export const Header = ({ user }) => {
  const prefersReducedMotion = useReducedMotion();
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState();
  const router = useRouter();
  const currentLang = currentLanguage(router);

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        })
      );
    }, 1000);

    async function getWeather() {
      try {
        await fetch('/api/weather', {
          method: 'GET',
        })
          .then(async (res) => await res.json())
          .then((res) => setWeather(res));
      } catch (err) {
        console.log(err);
        return;
      }
    }

    getWeather();
  }, []);

  return (
    <header className='grid grid-cols-12 gap-2 md:gap-6'>
      <div
        className={`w-auto h-auto col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 md:col-span-9 md:h-44 rounded-md flex grid-cols-1 flex-col justify-evenly ${
          prefersReducedMotion ? '' : 'backdrop-saturate-150 backdrop-blur'
        }`}
      >
        <div className='p-5 h-full w-full'>
          <div className='flex items-center text-center md:text-start flex-col md:flex-row gap-6 w-full'>
            <Image
              src={
                user?.discord_user?.avatar
                  ? `https://cdn.discordapp.com/avatars/${
                      user.discord_user.id
                    }/${user.discord_user.avatar}.${
                      user.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'
                    }`
                  : 'https://cdn.discordapp.com/attachments/807898541368410122/1095666270613016676/660d41a00af89c772b8f1990a2d76d00.png'
              }
              width={100}
              height={100}
              quality={100}
              alt='Discord Avatar of Pedrovisk'
              className='rounded-full border-white/5 border-[2px]'
            />
            <div className='w-full'>
              <Link
                href='/discord'
                target='_blank'
                className='flex items-center gap-2 justify-center md:justify-start group'
              >
                <h1
                  className={`font-bold text-lg md:text-xl text-white drop-shadow-[0px_0px_2.5px_white] group-hover:text-white/60 ${
                    prefersReducedMotion ? '' : 'transition-all'
                  }`}
                >
                  {user?.discord_user
                    ? `${user.discord_user?.global_name}`
                    : 'Pedrovisk'}
                </h1>
                <Logo className='drop-shadow-[0px_0px_3px_white] w-6 h-6' />
              </Link>
              <div className='w-full h-[2px] rounded-md my-2 bg-white/5' />
              <p className='md:indent-1 text-sm font-normal text-white/60'>
                <LanguageTransition>{t('header.about')}</LanguageTransition>
              </p>
            </div>
          </div>
        </div>
        <div className='relative flex text-center justify-around'>
          {prefersReducedMotion ? (
            <div className='bg-slate-300/5 absolute h-[1px] left-0 right-0' />
          ) : (
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.8 }}
              className='bg-slate-300/5 absolute h-[1px] left-0 transition-all'
            />
          )}
          {[
            {
              label: t('header.nav.link.0'),
              href: '/',
            },
            {
              label: t('header.nav.link.1'),
              href: '/projects',
            },
            {
              label: t('header.nav.link.2'),
              href: '/contact',
            },
          ].map((value, index) => (
            <Link
              key={index}
              href={value.href}
              className={`py-3 px-4 w-full h-full text-slate-300 font-semibold text-sm hover:text-slate-300/60
              ${prefersReducedMotion ? '' : 'transition-all'}
              ${
                router.pathname === value.href
                  ? ' pointer-events-none text-slate-300/60'
                  : ''
              }`}
            >
              <LanguageTransition>{value.label}</LanguageTransition>
            </Link>
          ))}
        </div>
      </div>
      <div className='col-span-12 md:col-span-3 flex grid-cols-1 flex-col justify-evenly gap-2 md:gap-4'>
        <div className='bg-[#191919]/20 border-[0.5px] border-gray-900/20 rounded-md'>
          <div className='flex justify-between items-center rounded-md w-full h-full'>
            <div className='flex items-center justify-evenly w-full'>
              <div className='font-bold text-lg w-12'>
                {time.slice(0, 2)}
                <span
                  className={
                    prefersReducedMotion ? 'text-slate-300/60' : 'animate-pulse'
                  }
                >
                  :
                </span>
                <span className='relative'>
                  {time.slice(3, 5)}
                  <span className='absolute left-[80%] bottom-[40%] opacity-[0.5] text-[8px]'>
                    {time.slice(6, 9)}
                  </span>
                </span>
              </div>
              <div className='bg-white/20 rounded-lg w-[3px] h-8'></div>
              <div className='text-center'>
                <p className='text-sm md:text-xs font-semibold'>
                  Rio de Janeiro
                </p>
                <p className='text-xs text-white/80 font-medium'>Brazil</p>
              </div>
            </div>
            <div className='dropdown dropdown-end'>
              <label
                tabIndex={0}
                className={`indicator btn bg-[#191919]/90 hover:bg-white/10 border-none rounded-r-[4px] rounded-l-none ${
                  prefersReducedMotion
                    ? 'transition-none no-animation'
                    : 'shadow-inner backdrop-blur backdrop-saturate-150 transition-colors'
                }`}
              >
                <span className='indicator-item indicator-middle indicator-start badge bg-transparent border-none'>
                  <LanguageTransition>
                    <currentLang.icon className='w-5 h-5 shadow' />
                  </LanguageTransition>
                </span>
                <Language className='w-9 h-9 fill-white' />
              </label>
              <div
                tabIndex={0}
                className={`dropdown-content menu shadow p-0 border-[0.5px] mt-1 border-white/10 rounded-md w-52 z-[1000] ${
                  prefersReducedMotion
                    ? 'no-animation transition-none bg-[#191919]/80'
                    : 'backdrop-saturate-150 backdrop-blur bg-[#191919]/50'
                }`}
              >
                {Languages.map((value, index, arr) => (
                  <button
                    key={index}
                    className={`w-full btn bg-transparent capitalize transition-all px-4 py-0 m-0 border-none rounded-none flex text-xs items-center justify-start gap-2 text-slate-300 font-semibold hover:bg-white/5 ${
                      index === 0 ? 'rounded-t-md' : ''
                    } ${index === arr.length - 1 ? 'rounded-b-md' : ''}
                    ${
                      value.code === currentLang.code
                        ? 'pointer-events-none text-slate-300/60'
                        : ''
                    }`}
                    onClick={() => switchLanguage(router, value.code)}
                  >
                    <value.icon className='w-5 h-5' />
                    {value.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative col-span-12 md:col-span-3 flex grid-cols-1 flex-col justify-between h-full bg-[#191919]/20 border-[0.5px] border-gray-900/20 rounded-md ${
            prefersReducedMotion
              ? 'opacity-90'
              : 'backdrop-blur backdrop-saturate-150'
          }`}
        >
          <div className='w-full h-32 md:h-full rounded-md'>
            <Image
              quality={100}
              src='/img/map.png'
              alt='Pedrovisk Map Image'
              fill
              className='z-[-1] rounded-md object-cover object-center'
            />
            {weather ? (
              <div className='flex flex-col h-full font-medium text-xs text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-1.5'>
                <span className='h-full text-end text-[9px]'>
                  <LanguageTransition>
                    {format(new Date(weather.last_updated), 'PPP', {
                      locale: i18n.language === 'pt-BR' ? pt : en,
                    })}
                  </LanguageTransition>
                </span>
                <span className='text-start'>{weather?.temp_c}°C</span>
              </div>
            ) : (
              <div className='h-full text-end text-[9px] text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-1.5'>
                <span className={prefersReducedMotion ? '' : 'animate-pulse'}>
                  <LanguageTransition>{t('loading')}</LanguageTransition>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
