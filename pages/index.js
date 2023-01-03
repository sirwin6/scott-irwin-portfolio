import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scott Irwin - Fullstack Developer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen'>
        <nav className='flex justify-between items-center laptop:px-6 iphone:p-2 laptop:mt-6 iphone:mt-2'>
          <p className='laptop:text-3xl p-2 iphone:text-xl iphone:text-center'>
            S.I.
          </p>
          <div className='flex laptop:w-1/4 iphone:w-full justify-around items-center '>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </nav>
        <div className='flex text-blue-500 m-5 iphone:h-1/4 laptop:h-1/2'>
          <div className='flex text-blue-500 border border-black w-1/2'>
            Photo
          </div>
          <div className='flex text-blue-500 border border-black w-1/2'>
            Bio
          </div>
        </div>
        <div className='flex text-blue-500 m-5 border border-black iphone:h-1/2 laptop:h-1/2'></div>
        <div className='flex text-blue-500 m-5 border border-black iphone:h-1/2 laptop:h-1/2'></div>
      </main>
    </div>
  );
}
