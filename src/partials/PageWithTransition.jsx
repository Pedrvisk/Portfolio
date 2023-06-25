import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Header } from './Header';

export const PageWithTransition = ({ children, user }) => {
  const prefersReducedMotion = useReducedMotion();
  const { asPath } = useRouter();

  const variants = {
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    out: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <div
        id='__nextbackground'
        className='fixed z-0 h-screen w-full bg-black opacity-80'
      >
        <Image
          src='/img/background.gif'
          alt='Pedrovisk Website Background'
          fill
          className={`object-cover object-center ${
            prefersReducedMotion ? 'opacity-20' : 'opacity-30'
          }`}
        />
      </div>
      <div className='relative mx-auto max-w-6xl px-2 py-2 md:py-14 sm:px-4 md:px-6'>
        <Header user={user} />
        <div className='overflow-hidden my-2 md:my-6'>
          {prefersReducedMotion ? (
            <div className='grid grid-cols-12 gap-2 md:gap-6'>{children}</div>
          ) : (
            <AnimatePresence
              initial={false}
              mode='wait'
            >
              <motion.div
                key={asPath}
                variants={variants}
                initial='in'
                animate='inactive'
                exit='out'
                className='grid grid-cols-12 gap-2 md:gap-6'
              >
                {children}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
};

export const LanguageTransition = ({ children, delay = 0.1, ...props }) => {
  const prefersReducedMotion = useReducedMotion();
  const { locale } = useRouter();

  return prefersReducedMotion ? (
    <span {...props}>{children}</span>
  ) : (
    <AnimatePresence
      initial={false}
      mode='wait'
    >
      <motion.span
        key={locale}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
        {...props}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  );
};
