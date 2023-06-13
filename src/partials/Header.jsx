import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { LanguageTransition } from './PageWithTransition';
import {
  Languages,
  currentLanguage,
  switchLanguage,
} from '@/components/Language';

import { Logo } from '@/assets/Logo';
import { Language } from '@/assets/Language';

export const Header = ({ user }) => {
  const { t } = useTranslation();
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
      <div className='w-auto h-auto col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-9 md:h-44 rounded-md backdrop-blur flex grid-cols-1 flex-col justify-evenly'>
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
              alt='Discord Avatar of Pedrovisk'
              className='hover:origin-center hover:scale-[1.1] transition-all rounded-full border-white/5 border-[2px]'
            />
            <div className='w-full'>
              <Link
                href='https://discord.com/users/216662585737478144'
                target='_blank'
                className='flex items-center gap-2 justify-center md:justify-start group'
              >
                <h1 className='font-bold text-lg md:text-xl text-white drop-shadow-[0px_0px_2.5px_white] group-hover:text-white/60 transition-all'>
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
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 0.8 }}
            className='bg-slate-300/5 absolute h-[1px] left-0 transition-all'
          />
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
              href: '/about',
            },
          ].map((value, index) => (
            <Link
              key={index}
              href={value.href}
              className={`py-3 px-4 w-full h-full text-slate-300 font-semibold text-sm hover:text-slate-300/60 transition-all
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
                <span className='animate-pulse'>:</span>
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
                className='backdrop-blur backdrop-saturate-150 indicator btn bg-[#191919]/90 transitions-colors hover:bg-white/10 shadow-inner rounded-r-[4px] rounded-l-none'
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
                className='dropdown-content menu shadow p-0 bg-[#191919]/50 border-[0.5px] mt-1 border-white/10 backdrop-saturate-150 backdrop-blur rounded-md w-52 z-[1000]'
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
        <div className='col-span-12 md:col-span-3 flex grid-cols-1 flex-col justify-between h-full bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 rounded-md backdrop-blur'>
          <div
            className={`w-full h-32 md:h-full bg-[url("/img/map.png")] rounded-md bg-center bg-no-repeat bg-cover`}
          >
            {weather ? (
              <div className='flex flex-col h-full font-medium text-xs text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-1.5'>
                <span className='h-full text-end text-[9px]'>
                  {weather?.last_updated.slice(0, 10).replace(/-/g, '/')}
                </span>
                <span className='text-start'>{weather?.temp_c}°C</span>
              </div>
            ) : (
              <div className='h-full text-end text-[9px] text-white/50 bg-[#191919]/40 rounded-md border-gray-900/20 border-[0.5px] p-1.5'>
                <span className='animate-pulse'>
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
