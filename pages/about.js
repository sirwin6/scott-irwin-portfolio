import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/Navbar';

export default function about() {
  return (
    <>
      <Navbar />
      <div className='h-screen justify-around items-start'>
        <div className='relative inline-block min-h-[300px] h-3/4 pr-20 laptop:w-full tablet:w-full iphone:w-full'>
          <Image
            alt='Surfing'
            layout='fill'
            objectFit='contain'
            quality={100}
            src='/surfing.png'
          />
        </div>
        <div className='w-1/2 inline-block justify-center items-center mr-20'>
          <p className='inline-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </>
  );
}
