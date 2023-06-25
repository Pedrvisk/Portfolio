import { FaLastfm } from 'react-icons/fa';
import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const LastFM = ({ tracks }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`p-2 md:p-5 col-span-12 md:col-span-6 bg-[#191919]/20 border-[0.5px] border-gray-900/20 rounded-md ${
        prefersReducedMotion ? '' : 'backdrop-blur backdrop-saturate-150'
      }`}
    >
      <h2 className='flex items-center justify-between text-slate-300 mb-2 text-center font-bold sm:text-xl md:text-left'>
        <Link
          href='/lastfm'
          target='_blank'
          rel='noopener noreferrer'
          className={`hover:text-slate-300/60 ${
            prefersReducedMotion ? '' : 'transition-colors'
          }`}
        >
          Last.FM
        </Link>
        <FaLastfm
          className={`w-6 h-6 ${
            tracks
              ? ''
              : prefersReducedMotion
              ? 'fill-slate-300/60'
              : 'fill-slate-300 animate-pulse'
          }`}
        />
      </h2>
      {tracks ? (
        <div
          className={`flex-col flex items-center justify-center ${
            prefersReducedMotion ? '' : 'transition-all'
          }`}
        >
          {tracks.map((song, index) => (
            <Link
              key={index}
              href={song.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`flex items-center justify-between relative w-full px-2 py-2 bg-[#191919]/40 hover:bg-white/5 rounded-md
              ${
                prefersReducedMotion
                  ? ''
                  : 'transition-all hover:origin-center hover:scale-[1.02]'
              }
              ${index === 1 ? 'my-1' : ''}`}
            >
              <span className='badge leading-tight text-xs font-bold text-slate-300/80 absolute right-0 top-0 bg-slate-300/20 border-none rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md'>
                {song['@attr'].rank}
              </span>
              <h2 className='trucante leading-tight text-slate-300/80 text-xs md:text-sm font-medium'>
                {song.name} -{' '}
                <span className='text-slate-300/40'>{song.artist.name}</span>
              </h2>
              <span className='mr-7 leading-tight text-slate-300/70 text-xs badge bg-white/5 p-1 rounded-md font-semibold'>
                {song.playcount}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <div className='relative w-full h-9 bg-[#191919]/40 rounded-md'>
            <span
              className={`w-6 h-5 badge absolute right-0 top-0 bg-slate-300/20 rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md ${
                prefersReducedMotion ? '' : 'animate-pulse'
              }`}
            />
          </div>
          <div className='relative w-full h-9 my-2 bg-[#191919]/40 rounded-md'>
            <span
              className={`w-6 h-5 badge absolute right-0 top-0 bg-slate-300/20 rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md ${
                prefersReducedMotion ? '' : 'animate-pulse'
              }`}
            />
          </div>
          <div className='relative w-full h-9 bg-[#191919]/40 rounded-md'>
            <span
              className={`w-6 h-5 badge absolute right-0 top-0 bg-slate-300/20 rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md ${
                prefersReducedMotion ? '' : 'animate-pulse'
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LastFM;
