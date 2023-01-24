import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

export default function Footer() {
  return (
    <>
      <div className='flex flex-col justify-around pl-10 items-start h-full w-1/2'>
        <Link href='/'>Home</Link>
        <Link href='/#projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/'>Contact</Link>
      </div>
      <div className='flex justify-around items-center h-full w-1/2'>
        <Link
          target={'blank'}
          href={'https://www.linkedin.com/in/scott-irwin-wesleyan/'}
        >
          <AiFillLinkedin size={40} />
        </Link>
        <Link target={'blank'} href={'https://github.com/sirwin6'}>
          <AiFillGithub size={40} />
        </Link>
      </div>
    </>
  );
}
