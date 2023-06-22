import { LanguageTransition } from '@/partials/PageWithTransition';
import { RiRocket2Line, RiMoreFill } from 'react-icons/ri';
import { TbDeviceGamepad2, TbBook } from 'react-icons/tb';
import { useTranslation } from 'next-i18next';
import { BsCheck } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Miuky = () => {
  const { t } = useTranslation();

  return (
    <div className='group p-2 md:p-5 col-span-12 md:col-span-6 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 rounded-md backdrop-blur'>
      <h2 className='flex items-center justify-between text-slate-300 text-center font-bold sm:text-xl md:text-left'>
        <div className='p-2 text-[10px] badge font-black gap-1 bg-slate-300/20 rounded-md'>
          <BsCheck className='w-4 h-4 fill-slate-300' />
          BOT
        </div>
        <Link
          href='https://miuky.xyz'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-slate-300/60 transition-colors'
        >
          Miuky - Discord Bot
        </Link>
      </h2>
      <div className='grid grid-cols-12'>
        <div className='col-span-8 flex flex-col'>
          <h2 className='flex my-2 md:my-4 text-xs leading-tight text-slate-300/80'>
            <LanguageTransition>
              {t('home.miuky.description')}
            </LanguageTransition>
          </h2>
          <div className='flex items-center justify-between border-slate-300/5 md:px-2 md:py-1 rounded-md border-[0.5px]'>
            {[
              {
                icon: RiRocket2Line,
              },
              {
                icon: TbDeviceGamepad2,
              },
              {
                icon: TbBook,
              },
              {
                icon: RiMoreFill,
              },
            ].map((value, index) => (
              <div
                key={index}
                className='flex items-center justify-center'
              >
                <div className='flex p-2 fill-slate-300/80 items-center drop-shadow-[0_0_2px_white] justify-center rounded-md'>
                  <value.icon className='w-6 h-6 opacity-60 flex items-center justify-center text-center' />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          quality={100}
          src='https://miuky.xyz/img/logo.png'
          alt='Miuky - Logo'
          height={94}
          width={94}
          priority
          className='col-span-4 mt-2 h-16 w-16 justify-self-end rounded-md md:h-20 md:w-20'
        />
      </div>
    </div>
  );
};

export default Miuky;
