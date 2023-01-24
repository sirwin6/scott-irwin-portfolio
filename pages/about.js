import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/Navbar';
import { Fade, Slide } from 'react-awesome-reveal';

export default function about() {
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

  console.log(Slide);
  return (
    <>
      <Navbar />
      <div className='h-screen iphone:w-full flex iphone:justify-around flex-wrap mt-10'>
        <Slide className='laptop:ml-20 inline-block pt-12 laptop:h-1/2'>
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
          className='laptop:text-xl font-extralight laptop:leading-10 tablet:leading-10 iphone:leading-10 laptop:mr-20 flex laptop:items-center h-2/3 laptop:w-[23%] desktop:w-1/3 iphone:w-5/6 tablet:w-5/6 tablet:my-10 iphone:my-10 laptop:my-0'
        >
          When I am not coding, you can find me in the ocean. Surfing has been a
          big part of my life for over 15 years. It is something that clears my
          mind immediately and allows me to decompress after a long day.
        </Slide>
        {/* <div className='absolute h-[300px] w-[300px] bg-purple-50 z-[-1] left-20'></div>
        <div className='absolute h-[200px] w-[200px] bg-red-50 z-[-1] right-20 top-60 rounded-[100%]'></div> */}
        <div id='triangle-pointL' className='h-0 w-0 absolute z-[-1]'></div>
        <div id='triangle-pointR' className='h-0 w-0 absolute z-[-1]'></div>
      </div>
    </>
  );
}
