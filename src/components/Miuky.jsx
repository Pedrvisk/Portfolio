import { RiRocket2Line, RiMoreFill } from 'react-icons/ri';
import { TbDeviceGamepad2, TbBook } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';

const Miuky = () => {
  return (
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
  );
};

export default Miuky;