import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useEffect, useState, useCallback } from 'react';
import { SlMenu } from 'react-icons/sl';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
} from 'react-icons/di';
import {
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
  SiSequelize,
} from 'react-icons/si';

const inter = Inter({ subsets: ['latin'] });

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

export default function Home() {
  const isBreakpoint = useMediaQuery(1023);
  return (
    <div>
      <Head>
        <title>Scott Irwin - Fullstack Developer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen'>
        <>
          {isBreakpoint ? (
            <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
              <p className='text-blue-500 laptop:text-3xl p-2 iphone:text-2xl iphone:text-center'>
                S.I.
              </p>
              <div className='mr-10 fixed p-2 right-0 bg-slate-200 rounded-md'>
                <SlMenu />
              </div>
            </nav>
          ) : (
            <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
              <p className='text-blue-500 laptop:text-3xl p-2 iphone:text-xl iphone:text-center'>
                S.I.
              </p>
              <div className='flex laptop:w-1/4 iphone:w-full items-center '>
                <p className='px-3'>Home</p>
                <p className='px-3'>About</p>
                <p className='px-3'>Projects</p>
                <p className='px-3'>Contact</p>
              </div>
            </nav>
          )}
        </>
        <div className='laptop:flex tablet:flex m-5 mx-10 iphone:h-3/4 laptop:h-3/4 iphone:overflow-auto'>
          <div className='flex h-full tablet:w-full iphone:w-full laptop:w-1/2'>
            <div className='relative min-h-[300px] h-full laptop:w-full tablet:w-full iphone:w-full'>
              <Image
                alt='Scott Irwin'
                layout='fill'
                objectFit='contain'
                quality={100}
                src='/headshot.jpg'
              />
            </div>
          </div>
          <div className='flex justify-center items-center laptop:w-3/4 mx-5'>
            <div>
              <p className='iphone:text-lg laptop:text-xl text-center'>
                A <span className='text-blue-500'>Software Developer </span>
                with experience building
                <span className='text-blue-500'>
                  {' '}
                  fullstack web applications.{' '}
                </span>
                <br />
                <br />
                My time in the Navy taught me the value of strong leadership,
                teamwork, and perseverance. I often rely my Bachelor of Arts -
                BA in Psychology and Design & Engineering from Wesleyan
                University to think critically about problems in order to find
                an efficient and inclusive solution.
              </p>
              <hr className='my-5' />
              {/* V------- icon container -------V */}
              <div>
                {/* V------ Proficient ------V */}
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-center-center'>
                    <DiJavascript size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Javascript</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <DiHtml5 size={80} color='gray' />
                    <p className='text-gray-500 text-center'>HTML</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <DiCss3 size={80} color='gray' />
                    <p className='text-gray-500 text-center'>CSS</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <DiReact size={80} color='gray' />
                    <p className='text-gray-500 text-center'>React</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <SiRedux size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Redux</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <DiNodejsSmall size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Express</p>
                  </div>
                </div>
                {/* V------ Knowledgeable ------V */}
                <div className='flex justify-evenly mt-5'>
                  <div className='flex flex-col justify-center-center'>
                    <SiPostgresql size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Postgresql</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <SiSequelize size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Sequelize</p>
                  </div>
                  <div className='flex flex-col justify-center-center'>
                    <SiNextdotjs size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Next</p>
                  </div>
                  <div className='flex flex-col justifycenter-center'>
                    <SiFirebase size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Firebase</p>
                  </div>
                  <div className='flex flex-col justifycenter-center'>
                    <SiTailwindcss size={80} color='gray' />
                    <p className='text-gray-500 text-center'>Tailwindcss</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex m-5 border border-black iphone:h-1/2 laptop:h-1/2'></div>
        <div className='flex m-5 border border-black iphone:h-1/2 laptop:h-1/2'></div>
      </main>
    </div>
  );
}
