import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LanguageTransition } from '@/partials/PageWithTransition';
import { IoIosContact } from 'react-icons/io';
import { useTranslation } from 'next-i18next';
import { SiDiscord, SiGithub, SiMinutemailer } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { IoSend } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const [formLoading, setFormLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setFormLoading(true);
    setTimeLeft(60);

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status !== 200) setFormLoading(false);
    });
  };

  useEffect(() => {
    if (!timeLeft) return;

    const delayInterval = setInterval(() => {
      setTimeLeft((prevState) => prevState - 1);
    }, 1000);

    if (timeLeft === 1) setFormLoading(false);
    return () => clearInterval(delayInterval);
  }, [timeLeft]);

  return (
    <div className='col-span-12'>
      <div className='grid grid-cols-12 gap-2 md:gap-6'>
        <div className='col-span-12 md:col-span-3 flex flex-col justify-evenly gap-2 md:gap-4'>
          {[
            {
              label: 'Discord',
              description: t('contact.links.description.0'),
              icon: SiDiscord,
              href: '/discord',
            },
            {
              label: 'Github',
              description: t('contact.links.description.1'),
              icon: SiGithub,
              href: '/github',
            },
            {
              label: 'Email',
              description: t('contact.links.description.2'),
              icon: SiMinutemailer,
              href: 'mailto:support@pedrovisk.ml',
            },
          ].map((value, index) => (
            <Link
              key={index}
              href={value.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`w-full flex-auto flex-col flex items-center gap-2 p-2 md:p-5 col-span-12 hover:bg-white/5 bg-[#191919]/20 border-[0.5px] border-gray-900/20 md:col-span-9 rounded-md ${
                prefersReducedMotion
                  ? ''
                  : 'transition-colors backdrop-blur backdrop-saturate-150'
              }`}
            >
              <h2 className='flex w-full items-center justify-between gap-2 rounded-full text-base leading-tight font-medium'>
                {value.label}
                <span className='p-2 bg-slate-300/20 items-center flex justify-center rounded-full'>
                  <value.icon className='fill-slate-300 w-5 h-5' />
                </span>
              </h2>
              <p className='w-full h-full p-2 text-xs text-slate-300/80 font-medium bg-slate-300/5 rounded-md'>
                <LanguageTransition>{value.description}</LanguageTransition>
              </p>
            </Link>
          ))}
        </div>
        <div
          className={`col-span-12 p-2 md:p-5 bg-[#191919]/20 border-[0.5px] border-gray-900/20 md:col-span-9 rounded-md ${
            prefersReducedMotion ? '' : 'backdrop-blur backdrop-saturate-150'
          }`}
        >
          <h2 className='flex items-center justify-between text-slate-300 mb-2 md:mb-4 text-center font-bold sm:text-xl md:text-left'>
            <LanguageTransition>{t('contact.title')}</LanguageTransition>
            <IoIosContact className='w-6 h-6 fill-slate-300' />
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text leading-tight text-slate-300/80 font-medium text-sm'>
                  E-mail
                  {errors.email?.type === 'required' ? (
                    <span className='text-red-500 ml-1'>*</span>
                  ) : null}
                </span>
                <span className='label-text-alt'>
                  <MdOutlineMail className='w-4 h-4 fill-slate-300' />
                </span>
              </label>
              <input
                type='text'
                {...register('email', {
                  required: {
                    value: true,
                  },
                  pattern: {
                    value: /.+@.+/,
                    message: t('contact.form.email.invalid'),
                  },
                })}
                placeholder='example@gmail.com'
                className='input border-none input-bordered bg-[#191919]/40 placeholder:text-sm w-full'
              />
              {errors.email?.type === 'pattern' ? (
                <label className='label absolute top-[95%]'>
                  <span className='label-text-alt'>
                    <Error message={errors.email.message} />
                  </span>
                </label>
              ) : null}
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text leading-tight text-slate-300/80 font-medium text-sm'>
                  <LanguageTransition>
                    {t('contact.form.message.title')}
                  </LanguageTransition>
                  {errors.message?.type === 'required' ? (
                    <span className='text-red-500 ml-1'>*</span>
                  ) : null}
                </span>
                <span className='label-text-alt'>
                  <BiMessageDetail className='w-4 h-4 text-slate-300' />
                </span>
              </label>
              <textarea
                {...register('message', {
                  required: {
                    value: true,
                  },
                })}
                className='textarea max-h-24 min-h-24 border-none bg-[#191919]/40 textarea-bordered h-24 w-full'
                placeholder={t('contact.form.message.placeholder')}
              />
            </div>
            <div className='flex items-center justify-end'>
              <button
                className={`btn w-full text-slate-300/80 disabled:text-slate-300/60 border-none bg-slate-300/5 flex items-center justify-center gap-2 hover:bg-white/5 ${
                  prefersReducedMotion
                    ? 'no-animation transition-none animate-none'
                    : ''
                }`}
                type='submit'
                disabled={formLoading}
              >
                {formLoading ? (
                  <>
                    <span className='loading loading-spinner loading-xs' />
                    {timeLeft}{' '}
                    <LanguageTransition>
                      {t('contact.form.seconds')}
                    </LanguageTransition>
                  </>
                ) : (
                  <>
                    <IoSend className='w-4 h-4 fill-slate-300/80' />
                    <LanguageTransition>
                      {t('contact.form.send')}
                    </LanguageTransition>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function Error({ message }) {
  return (
    <span className='text-xs text-red-500'>
      <LanguageTransition>{message}</LanguageTransition>
    </span>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Contact;
