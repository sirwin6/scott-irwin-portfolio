import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';

export default function Footer() {
  return (
    <>
      <div className='flex flex-wrap justify-around pl-10 items-center h-full w-1/2'>
        <Link className='mx-6' href='/'>
          Home
        </Link>
        <Link className='mx-6' href='/#projects'>
          Projects
        </Link>
        <Link className='mx-6' href='/about'>
          About
        </Link>
        <Link className='mx-6' href='/contact'>
          Contact
        </Link>
      </div>
      <div className='mx-4 flex justify-around items-center h-full w-1/2'>
        <Link
          className='hover:text-blue-500'
          target={'blank'}
          href={'https://www.linkedin.com/in/scott-irwin-wesleyan/'}
        >
          <AiFillLinkedin size={40} />
        </Link>
        <Link
          className='hover:text-blue-500'
          target={'blank'}
          href={'https://github.com/sirwin6'}
        >
          <AiFillGithub size={40} />
        </Link>
        <Link className='hover:text-blue-500' href='mailto:irwins06@gmail.com'>
          <GrMail size={40} />
        </Link>
      </div>
    </>
  );
}
