import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsSpotify } from 'react-icons/bs';
import { LanguageTransition } from '@/partials/PageWithTransition';

let startedTimestamp = 0;
let endTimestamp = 0;

function getMinuteAndSeconds(date) {
  return date.toLocaleTimeString(navigator.language, {
    minute: '2-digit',
    second: '2-digit',
  });
}

const Spotify = ({ user }) => {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const [elapsed, setElapsed] = useState();

  const duration = user?.spotify?.timestamps
    ? new Date(user.spotify.timestamps.end - user.spotify.timestamps.start)
    : undefined;

  const progress =
    100 -
    (100 * (endTimestamp - Date.now())) / (endTimestamp - startedTimestamp);

  useEffect(() => {
    if (user?.spotify) {
      if (user.spotify.timestamps.end !== endTimestamp) {
        startedTimestamp = user.spotify.timestamps.start;
        endTimestamp = user.spotify.timestamps.end;
        const interval = setInterval(() => {
          if (
            Date.now() >= endTimestamp ||
            startedTimestamp !== user?.spotify?.timestamps.start ||
            !user?.spotify
          )
            clearInterval(interval);
          else setElapsed(new Date(Date.now() - startedTimestamp));
        }, 1000);
        return () => {
          clearInterval(interval);
          startedTimestamp = 0;
          endTimestamp = 0;
        };
      }
    }
  }, [user]);

  return (
    <div
      className={`col-span-12 bg-[#191919]/20 border-[0.5px] p-2 md:p-5 border-gray-900/20 md:col-span-6 rounded-md ${
        prefersReducedMotion ? '' : 'backdrop-blur backdrop-saturate-150'
      }`}
    >
      <div className='flex w-full flex-col'>
        <h2
          className={`${
            user?.spotify ? 'text-slate-300' : 'text-slate-300/40'
          } flex items-center justify-between mb-2 text-center font-bold sm:text-xl md:text-left`}
        >
          <Link
            href='/spotify'
            target='_blank'
            rel='noopener noreferrer'
            className={`hover:text-slate-300/60 ${
              prefersReducedMotion ? '' : 'transition-colors'
            }`}
          >
            <LanguageTransition>
              {user?.spotify
                ? t('home.spotify.listening.yes')
                : t('home.spotify.listening.no')}
            </LanguageTransition>
          </Link>
          <BsSpotify
            className={`w-6 h-6 ${
              user?.spotify
                ? ''
                : prefersReducedMotion
                ? 'fill-slate-300/60'
                : 'fill-slate-300 animate-pulse'
            }`}
          />
        </h2>
        <div className='grid grid-cols-12'>
          {user?.spotify ? (
            <>
              <Image
                quality={100}
                src={user?.spotify?.album_art_url || ''}
                height={94}
                width={94}
                className='col-span-3 h-16 w-16 justify-self-start rounded-md md:col-span-2 md:h-20 md:w-20'
                alt='album cover'
              />
              <div className='md:ml-2 col-span-9 flex flex-col justify-center'>
                <h2 className='truncate text-lg font-semibold leading-tight text-slate-300/90'>
                  {user?.spotify?.song}
                </h2>
                <h4 className='truncate text-xs leading-tight text-slate-300/80'>
                  <LanguageTransition>
                    {t('home.spotify.artist')}
                  </LanguageTransition>{' '}
                  {user?.spotify?.artist}
                </h4>
                <h4 className='truncate text-xs md:text-xs leading-tight text-slate-300/80'>
                  <LanguageTransition>
                    {t('home.spotify.album')}
                  </LanguageTransition>{' '}
                  {user?.spotify?.album}
                </h4>
              </div>
            </>
          ) : (
            <>
              <div className='col-span-3 bg-slate-300/20 h-16 w-16 rounded-md md:col-span-2 md:h-20 md:w-20' />
              <div className='md:ml-2 col-span-9 gap-2 flex flex-col justify-center'>
                <div className='h-4 w-52 bg-slate-300/20 rounded-[5px]' />
                <div className='h-3 w-12 bg-slate-300/20 rounded-[4px]' />
                <div className='h-3 w-24 bg-slate-300/20 rounded-[4px]' />
              </div>
            </>
          )}
        </div>
        <div className='mt-2 w-full md:mt-4'>
          <div className='relative h-2 w-full rounded-md bg-slate-300/20'>
            <span
              className={`absolute h-2 rounded-md ${
                user?.spotify ? 'bg-slate-300/60' : ''
              }`}
              style={{ width: `${user?.spotify ? progress : 100}%` }}
            />
          </div>
          <div
            className={`mt-1 flex items-center justify-between px-0.5 text-xs ${
              user?.spotify ? 'text-slate-300' : 'text-slate-300/40'
            }`}
          >
            {elapsed && user?.spotify ? (
              <span>{getMinuteAndSeconds(elapsed)}</span>
            ) : (
              <span>00:00</span>
            )}
            {duration ? (
              <span>{getMinuteAndSeconds(duration)}</span>
            ) : (
              <span>00:00</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
