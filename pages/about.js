import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import HamburgerMenu from '../Components/HamburgerMenu';

export default function About() {
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

  const isBreakpoint = useMediaQuery(1023);
  return (
    <div className='h-screen'>
      {isBreakpoint ? (
        <HamburgerMenu displayIcon={true} iconColor={'green'} />
      ) : (
        <Navbar iconColor={'emerald'} />
      )}
      <div className='h-screen iphone:w-full flex iphone:justify-around flex-wrap'>
        <div className='flex flex-wrap mb-36 justify-around'>
          <Slide className='iphone:m-10 laptop:ml-20 inline-block pt-12'>
            <Image
              alt='Surfing'
              width={400}
              height={600}
              quality={100}
              src='/surfing2.png'
              style={{
                borderRadius: '20%',
              }}
            />
          </Slide>
          <Slide
            direction='right'
            className='laptop:text-xl font-extralight laptop:leading-10 tablet:leading-10 iphone:leading-10 laptop:mr-20 flex laptop:items-center laptop:w-[23%] desktop:w-1/3 iphone:w-5/6 tablet:w-5/6 tablet:my-10 iphone:my-10 laptop:my-0'
          >
            When I am not coding, you can find me in the ocean. Surfing has been
            a big part of my life for over 15 years. It is something that
            immediately clears my mind and allows me to decompress after a long
            day.
          </Slide>
        </div>
        <div className='flex flex-wrap-reverse justify-around latop:mt-60 iphone:mt-20'>
          <Slide className='text-right laptop:text-xl h-2/3 font-extralight laptop:leading-10 tablet:leading-10 iphone:leading-10 laptop:ml-40 flex laptop:items-center laptop:w-[23%] desktop:w-1/4 iphone:w-3/4 tablet:w-3/4 tablet:my-10 iphone:m-10 laptop:my-0'>
            I am a strong believer in the mental health benefits that come from
            surfing. Conquering the waves builds confidence and requires 100%
            focus to do so. Through my love for surfing and my passion for
            service, I was able to help found an adaptive surf program. The Camp
            Anchor Surf Program gives differently-abled individuals access to
            the amazing healing resources that come from learning to surf.
          </Slide>
          <Slide direction='right' className='iphone:m-10 inline-block pt-12'>
            <Image
              alt='Surfing'
              width={500}
              height={600}
              quality={100}
              src='/anchor.jpg'
              style={{
                borderRadius: '20%',
              }}
            />
          </Slide>
        </div>
        <div className='flex flex-wrap tablet:mb-48 laptop:my-48 justify-around'>
          <Slide className='iphone:m-10 laptop:ml-20 inline-block pt-12'>
            <Image
              alt='Surfing'
              width={400}
              height={600}
              quality={100}
              src='/navy.jpeg'
              style={{
                borderRadius: '20%',
              }}
            />
          </Slide>
          <Slide
            direction='right'
            className='laptop:text-xl font-extralight laptop:leading-10 tablet:leading-10 iphone:leading-10 laptop:mr-20 flex laptop:items-center laptop:w-[23%] desktop:w-1/3 iphone:w-5/6 tablet:w-5/6 tablet:my-10 iphone:my-10 laptop:my-0'
          >
            In 2019, I continued my pursuit of service by comissioning as a US
            Naval Officer. While in the navy I met some of the most inspiring
            individuals I could have ever imagined. I learned a lot about
            sacrafice, resilience, and what it means to be the ultimate team
            player.
          </Slide>
        </div>
        <div className='flex flex-wrap-reverse justify-around'>
          <Slide className='text-right laptop:text-xl font-extralight laptop:leading-10 tablet:leading-10 iphone:leading-10 laptop:ml-40 flex laptop:items-center laptop:w-[23%] desktop:w-1/4 iphone:w-3/4 tablet:w-3/4 tablet:my-10 iphone:m-10 laptop:my-0'>
            After seperation from the navy, I spent a lot of time in my 2016
            buick encore. From San diego, to Sun Valley Idaho, with stops in
            Santa Barbara and Lake Tahoe, the west coast has given me tons of
            reasons to put in hundreds of miles on the road. If you have any
            ideas of where I shoudl go next, feel free to drop me an email.
          </Slide>
          <Slide direction='right' className='iphone:m-10 inline-block pt-12'>
            <Image
              alt='Surfing'
              width={500}
              height={600}
              quality={100}
              src='/idaho.jpg'
              style={{
                borderRadius: '20%',
              }}
            />
          </Slide>
        </div>
        <div id='triangle-pointL' className='h-0 w-0 absolute z-[-1]'></div>
        <div id='triangle-pointR' className='h-0 w-0 absolute z-[-1]'></div>
        <footer className='bg-emerald-200 flex w-full h-1/4 iphone:mt-10 laptop:mt-40'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
