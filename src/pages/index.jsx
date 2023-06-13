import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Image from 'next/image';
import Spotify from '@/components/Spotify';
import Tools from '@/components/Tools';
import { FaGithubAlt } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { RiRocket2Line, RiMoreFill } from 'react-icons/ri';
import { TbDeviceGamepad2, TbBook } from 'react-icons/tb';

const Home = ({ user, songsWeekly }) => {
  return (
    <>
      <Spotify user={user} />
      <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-6 rounded-md backdrop-blur'>
        <h2
          className={`flex items-center justify-between mb-2 text-center text-medium font-bold sm:text-xl md:text-left`}
        >
          <FaGithubAlt className='w-6 h-6 fill-slate-300' />
          <Link
            href='/github'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-slate-300/60 transition-colors'
          >
            Github
          </Link>
        </h2>
        <div className='grid grid-cols-7 sm:grid-cols-7 gap-2 md:grid-cols-10'>
          {Tools().map((value, index) => (
            <Link
              href={value.href}
              key={index}
              className='md:tooltip flex items-center justify-center text-center'
              target='_blank'
              rel='noopener noreferrer'
              data-tip={value.tooltip}
            >
              <button className='flex items-center justify-center text-center mt-2 bg-transparent hover:origin-center hover:scale-[1.1] transition-all rounded-md border-none shadow-none'>
                <value.icon className='fill-slate-300/80 w-8 h-8 drop-shadow-[0_0_2px_white] flex items-center justify-center text-center' />
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className='group p-2 md:p-5 col-span-12 md:col-span-6 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 rounded-md backdrop-blur'>
        <div className='carousel w-full'>
          {songsWeekly
            ? songsWeekly.map((song, index) => <>{song.name}</>)
            : null}
        </div>
      </div>
      <div className='group p-2 md:p-5 col-span-12 md:col-span-6 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 rounded-md backdrop-blur'>
        <h2 className='flex items-center text-center text-medium font-bold sm:text-xl transition-colors'>
          <Link
            href='https://miuky.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-slate-300/60 transition-colors'
          >
            Miuky - Discord Bot
          </Link>
        </h2>
        <div
          href='https://miuky.xyz'
          target='_blank'
          rel='noopener noreferrer'
          className='grid grid-cols-12'
        >
          <div className='col-span-8 flex flex-col justify-center'>
            <div className='md:ml-2 mb-2 indent-2 text-xs leading-tight text-slate-300/80'>
              O meu objetivo é Entreter e Gerir o seu Servidor com várias
              funcionalidades que pode ver aqui!
            </div>
            <div className='flex items-center justify-between gap-2'>
              {[
                {
                  icon: RiRocket2Line,
                  label: 'Utilidades',
                },
                {
                  icon: TbDeviceGamepad2,
                  label: 'Entretenimento',
                },
                {
                  icon: TbBook,
                  label: 'Moderação',
                },
                {
                  icon: RiMoreFill,
                  label: 'Entre Outros',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className='flex gap-2 items-center justify-center'
                >
                  <div className='flex p-2 fill-slate-300 drop-shadow-[0_0_2px_white] items-center justify-center rounded-md border-[0.5px] border-[#191919]/20'>
                    <value.icon className='w-6 h-6' />
                  </div>
                  <span className='hidden md:block'>{value.label}</span>
                </div>
              ))}
            </div>
          </div>
          <Image
            quality={50}
            src='https://miuky.xyz/img/logo.png'
            alt='Miuky - Logo'
            height={94}
            width={94}
            className='col-span-4 h-16 w-16 justify-self-end rounded-md md:h-20 md:w-20'
          />
          <Image
            quality={100}
            src='https://miuky.xyz/img/logo.png'
            alt='Miuky - Logo Background'
            fill
            className='rounded-md opacity-20 object-cover object-center z-[-1]'
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  const getLastfmWeeklyTracks = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=Pedrov1sk&api_key=${process.env.LASTFM_KEY}&format=json`,
    {
      method: 'GET',
    }
  )
    .then(async (res) => await res.json())
    .catch(() => false);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      songsWeekly: getLastfmWeeklyTracks.weeklytrackchart.track.filter(
        (track, index) => index < 10
      ),
    },
    revalidate: 4320, // 3 days
  };
}

export default Home;
