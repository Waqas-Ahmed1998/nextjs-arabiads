import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Ecard() {
  return (
    <Fragment>
      {
        // <div className=' hidden bg-no-repeat   xl:inline-grid absolute services-top w-full   '></div>
      }

      <div className='relative  w-[97%] mx-auto '>
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
        <div className='xl:absolute flex  xl:top-[24%]  justify-center  lg:w-full '>
          <div className='xl:w-[90%]  text-center'>
            <h2 className=' heading-primary heading-blue font-bold xl:text-[#3f72ff] xl:text-[40px] mb-4 '>
              ESPORTS SERVICES
            </h2>
            <p
              className={`${styles.tajawal} words-gray xl:text-[25px] xl:leading-[40px] xl:px-14  text-[#404b68]`}
            >
              Games publishers, tournament organizers, esports teams,
              broadcasters, sports clubs, investors, and endemic and non-endemic
              companies are all clients of Arabia E-Advertising. We can assist
              you whether you are already involved in esports or are considering
              to engage in this realm.
            </p>

            <a href='' className='mt-10 inline-block  '>
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
    </Fragment>
  );
}

export default Ecard;
