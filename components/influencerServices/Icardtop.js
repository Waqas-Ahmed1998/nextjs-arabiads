import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Icardtop() {
  return (
    <div className='relative  w-[97%] mx-auto mt-16 '>
      <div className='hidden xl:inline-grid absolute [z-index:1] -top-10 left-0'>
        <img
          className=' animate-spin-slow '
          src='/spinners/redspinner.png'
          alt=''
        />
      </div>
      <div className='hidden  h-[35rem] xl:inline-grid w-full'>
        <Image
          src='/esports-services/Ecard.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          quality={100}
          // objectFit='cover'
        />
      </div>

      <div className='xl:absolute flex  xl:top-[18%]  justify-center  lg:w-full '>
        <div className='xl:w-[90%]  text-center'>
          <h2 className=' heading-primary heading-blue font-bold xl:text-[#3f72ff] xl:text-[40px] mb-4 '>
            INFLUENCER SERVICES
          </h2>
          <p
            className={`${styles.tajawal} words-gray xl:text-[25px] xl:leading-[40px] xl:px-14  text-[#404b68]`}
          >
            Arabia E-Advertising began its career as one of the first talent
            agencies, representing both established and emerging esports-focused
            broadcasting talent. We assist these specialized talents in
            maximizing the value they&apos;ve created by connecting them with
            hundreds of brand partners who trust us. We can assist you whether
            you are looking to hire an on-air host for an event or need
            representation as a talent.
          </p>
          <a href='#influencer-services' className='mt-10 inline-block  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-[5rem]  animate-bounce text-blue-500 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Icardtop;
