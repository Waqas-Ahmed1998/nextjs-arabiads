import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

function Icard1() {
  return (
    <>
      {
        // <img
        //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/content-box-4.png'
        //   alt=''
        //   className='hidden xl:inline-grid  w-full '
        // />
      }
      <div className='hidden   xl:inline-grid  w-[95%] h-[35rem]'>
        <Image
          src='/home/card5.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          // objectFit='cover'
        />
      </div>
      <div className='hidden xl:inline-grid absolute  [z-index:-1]  -top-10 -left-20'>
        <img
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className=' h-[80%]  xl:absolute flex top-[5%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] xl:ml-3 flex flex-col-reverse xl:flex-row space-y-5 items-center text-center xl:text-left '>
          <div className=' flex-1 xl:py-5 xl:px-5 '>
            <h2 className=' heading-primary xl:text-white xl:text-[28px] mb-5 font-bold'>
              Esports Talents{' '}
              <span className='text-black'>and Advertising Services</span>
            </h2>
            <p
              className={`${styles.popins} xl:text-white text-sm xl:text-[18px] xl:leading-[29px] mb-16`}
            >
              Arabia E-Advertising began its career as one of the first talent
              agencies, representing both established and emerging
              esports-focused broadcasting talent. We assist these specialized
              talents in maximizing the value they&apos;ve created by connecting
              them with hundreds of brand partners who trust us. We can assist
              you whether you are looking to hire an on-air host for an event or
              need representation as a talent.
            </p>
            <Link href='/'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]  md:py-4  md:px-6 px-4 py-2 font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className='flex-1  px-10 '>
            {
              // <img
              //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/escort-img.png'
              //   alt=''
              // />
            }
            <Image
              src='/home/card5person.png'
              alt=''
              title=''
              width='400'
              height='450'
              // layout='responsive'
              priority
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Icard1;
