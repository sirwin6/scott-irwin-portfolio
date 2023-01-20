import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
      <p
        id='glow'
        className='text-blue-500 laptop:text-3xl p-5 iphone:text-xl iphone:text-center bg-slate-100 shadow-md rounded-[100%]'
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
        <a
          href='#projects'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          Projects
        </a>
        <Link
          href='/about'
          className='px-3 hover:underline hover:scale-110 duration-500'
        >
          About
        </Link>
        <p className='px-3 hover:underline hover:scale-110 duration-500'>
          Contact
        </p>
      </div>
    </nav>
  );
}