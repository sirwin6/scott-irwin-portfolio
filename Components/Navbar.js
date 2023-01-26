import React from 'react';
import Link from 'next/link';

export default function Navbar({ iconColor }) {
  return (
    <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
      <p
        id={`glow${iconColor}`}
        className={`text-${iconColor}-400 laptop:text-3xl p-5 iphone:text-xl iphone:text-center bg-slate-100 shadow-md`}
      >
        S.I.
      </p>
      <div className='flex laptop:w-1/3 iphone:w-full items-center justify-between'>
        <Link
          href='/'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          Home
        </Link>
        <Link
          href='/#projects'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          Projects
        </Link>
        <Link
          href='/about'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          About
        </Link>
        <Link
          href='/contact'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
