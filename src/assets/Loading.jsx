import * as React from 'react';

export function Circle({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeDasharray={15}
        strokeDashoffset={15}
        strokeLinecap='round'
        strokeWidth={2}
        d='M12 3a9 9 0 019 9'
      >
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          dur='0.3s'
          values='15;0'
        />
        <animateTransform
          attributeName='transform'
          dur='1.5s'
          repeatCount='indefinite'
          type='rotate'
          values='0 12 12;360 12 12'
        />
      </path>
    </svg>
  );
}
