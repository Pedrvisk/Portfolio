import { formatDuration, intervalToDuration } from 'date-fns';
import { LanguageTransition } from '@/partials/PageWithTransition';
import { MdOutlineDataThresholding } from 'react-icons/md';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import pt from 'date-fns/locale/pt-BR';
import en from 'date-fns/locale/en-US';

const Metrics = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className='p-2 md:p-5 col-span-12 bg-[#191919]/20 border-[0.5px] border-gray-900/20 backdrop-saturate-150 md:col-span-12 rounded-md backdrop-blur'>
      <h2 className='flex items-center justify-between text-slate-300 mb-2 md:mb-4 text-center font-bold sm:text-xl md:text-left'>
        <MdOutlineDataThresholding
          className={`w-6 h-6 fill-slate-300 ${data ? '' : 'animate-pulse'}`}
        />
        <Link
          href='/wakapi'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-slate-300/60 transition-colors'
        >
          <LanguageTransition>
            {t('project.title2')}
          </LanguageTransition>
        </Link>
      </h2>
      <div>
        {data ? (
          <div className='grid grid-cols-2 mb-4 md:mb-6 gap-2 md:grid-cols-4'>
            {data.languages.map((language, index) => (
              <div
                key={index}
                className='rounded-md bg-[#191919]/40 p-5 font-medium'
              >
                <h2 className='leading-tight text-slate-300/80 text-sm sm:text-base'>
                  {language.key}
                </h2>
                <span className='truncate leading-tight text-slate-300/50 text-[11px] md:text-xs'>
                  <LanguageTransition>
                    {formatDuration(
                      intervalToDuration({
                        start: 0,
                        end: language.total * 1000,
                      }),
                      {
                        format: [
                          'years',
                          'months',
                          'weeks',
                          'days',
                          'hours',
                          'minutes',
                          'seconds',
                        ],
                        delimiter: ',',
                        locale: i18n.language === 'pt-BR' ? pt : en,
                      }
                    )
                      .split(',')
                      .slice(0, 2)
                      .join(' ')}
                  </LanguageTransition>
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
            <div className='rounded-md h-20 bg-[#191919]/40'></div>
            <div className='rounded-md h-20 bg-[#191919]/40'></div>
            <div className='rounded-md h-20 bg-[#191919]/40'></div>
            <div className='rounded-md h-20 bg-[#191919]/40'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Metrics;
