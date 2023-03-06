import Link from 'next/link';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';

export default function Slice() {
  return (
    <>
      <div className='flex justify-center items-center '>
        <Link
          href='https://slice-task.vercel.app/'
          target='blank'
          id='underline'
        >
          S i t e
        </Link>
        <AiOutlineLink />
        <Link
          href='https://github.com/2209-Capstone-Team-B/Slice'
          target='blank'
          id='underline'
        >
          G i t H u b
        </Link>
        <AiOutlineLink />
      </div>
      <p className='font-light relative text-center min-h-[300px] h-full laptop:w-auto tablet:w-auto iphone:w-auto'>
        <span id='lineSpaced'>
          Slice exists as a platform for creating ecosystems/organizations of
          any size that want to organize tasks, favors, chores, or anything that
          needs to get done and requires a village. Within these ecosystems,
          users are given credit for completing something that needs to get
          done, which promotes transparency and accountability for who does
          what.
        </span>
        <br />
        <br />{' '}
        <span className='text-blue-500 hover:text-cyan-400 duration-500'>
          Frontend:{' '}
        </span>
        JavaScript, Next.JS, React - Redux, Tailwind CSS, Material UI <br />
        <br />{' '}
        <span className='text-blue-500 hover:text-cyan-400 duration-500'>
          Backend:{' '}
        </span>
        Firebase/Firestore
      </p>
    </>
  );
}
