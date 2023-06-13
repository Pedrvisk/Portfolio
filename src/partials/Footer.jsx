import { FaDiscord, FaGithubAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='grid grid-cols-12 gap-2 md:gap-6'>
      <div className='w-auto col-span-12 p-4 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-12 rounded-md backdrop-blur flex grid-cols-1 flex-col justify-evenly'>
        <div className='flex items-center justify-between'>
          <h2 className='font-medium text-center text-sm truncate text-slate-300/80'>
            Pedrovisk
          </h2>
          <div className='space-x-2 flex'>
            <FaDiscord className='w-5 h-5' />
            <FaGithubAlt className='w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};
