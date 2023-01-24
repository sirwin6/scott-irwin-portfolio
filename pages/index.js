import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
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
import { BsArrowDownShort } from 'react-icons/bs';
import { Fade, Zoom } from 'react-awesome-reveal';
import Slice from '../Components/Slice';
import Footer from '../Components/Footer';

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
              <p
                id='glow'
                className='text-blue-500 rounded-[100%] laptop:text-3xl p-2 iphone:text-2xl iphone:text-center bg-slate-100 shadow-md'
              >
                S.I.
              </p>
              <div className='mr-10 fixed p-2 right-0 bg-slate-200 rounded-md'>
                <SlMenu />
              </div>
            </nav>
          ) : (
            <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
              <p
                id='glow'
                className='text-blue-500 rounded-[100%] laptop:text-3xl p-5 iphone:text-xl iphone:text-center bg-slate-100 shadow-md'
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
                <p className='px-3 hover:underline hover:scale-110 duration-500'>
                  Contact
                </p>
              </div>
            </nav>
          )}
        </>
        <div className='laptop:flex tablet:flex m-5 mx-10 iphone:h-auto laptop:h-auto'>
          <div className='h-full tablet:w-full iphone:w-full iphone:h-1/2 laptop:w-1/2'>
            <Fade direction='left' triggerOnce delay={200}>
              <div className='relative min-h-[500px] h-atuo laptop:w-full tablet:w-full iphone:w-full'>
                <Image
                  alt='Scott Irwin'
                  layout='fill'
                  objectFit='contain'
                  quality={100}
                  src='/headshot.png'
                />
              </div>
            </Fade>
          </div>
          <Fade
            triggerOnce
            direction='right'
            className='flex justify-center items-center laptop:w-3/4 mx-5'
          >
            <div className=''>
              <p className='font-extralight iphone:text-lg laptop:text-xl text-center'>
                A{' '}
                <span className='text-blue-500 hover:text-cyan-400 duration-500'>
                  Software Developer{' '}
                </span>
                with experience building
                <span className='text-blue-500 hover:text-cyan-400 duration-700'>
                  {' '}
                  fullstack web applications.{' '}
                </span>
                <br />
                <br />
                <span className='leading-10'>
                  My time in the Navy taught me the value of strong leadership,
                  teamwork, and perseverance. I often rely my Bachelor of Arts -
                  BA in Psychology and Design & Engineering from Wesleyan
                  University to think critically about problems in order to find
                  an efficient and inclusive solution.
                </span>
              </p>
              <hr className='my-20' />
              {/* V------- icon container -------V */}

              <div>
                {/* V------ Proficient ------V */}
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <DiJavascript size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Javascript</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <DiHtml5 size={40} color='gray' />
                    <p className='text-gray-500 text-center'>HTML</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <DiCss3 size={40} color='gray' />
                    <p className='text-gray-500 text-center'>CSS</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <DiReact size={40} color='gray' />
                    <p className='text-gray-500 text-center'>React</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiRedux size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Redux</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <DiNodejsSmall size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Express</p>
                  </div>
                </div>
                {/* V------ Knowledgeable ------V */}
                <div className='flex justify-evenly mt-10'>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiPostgresql size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Postgresql</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiSequelize size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Sequelize</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiNextdotjs size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Next</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiFirebase size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Firebase</p>
                  </div>
                  <div className='flex flex-col justify-center items-center hover:scale-110 duration-200'>
                    <SiTailwindcss size={40} color='gray' />
                    <p className='text-gray-500 text-center'>Tailwindcss</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className='flex justify-center'>
          <hr className='mt-20 w-1/4 text-center' />
          <h1 className='text-center text-gray-500 mt-16 mx-5 text-2xl flex flex-shrink'>
            P r o j e c t s
          </h1>
          <a id='projects'></a>
          <hr className='mt-20 w-1/4 text-center flex flex-shrink' />
        </div>
        <div className='flex justify-center'>
          <BsArrowDownShort
            size={30}
            color={'gray'}
            className='mt-10 animate-bounce duration-150'
          />
        </div>
        <div className='flex flex-col items-center m-5 iphone:h-auto laptop:h-auto'>
          <div className='relative min-h-[300px] h-auto bg-transparent laptop:w-full tablet:w-full iphone:w-full'>
            <Image
              alt='Slice App'
              layout='fill'
              objectFit='contain'
              quality={100}
              src='/slice2.png'
            />
          </div>
          <Zoom className='w-3/4 flex flex-col justify-center items-center'>
            <Slice />
          </Zoom>
        </div>
        <Footer />
      </main>
    </div>
  );
}
