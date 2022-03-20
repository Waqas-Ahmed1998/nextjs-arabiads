import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Scard3() {
  // useEffect(() => {
  //   AOS.init({

  //   });
  //   return () => {

  //   }
  // }, [])
  return (
    <>
      {
        // <div className='hidden absolute  -left-[25%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>
      }

      <div className='xl:h-[57rem]  hidden relative xl:inline-grid w-full  '>
        <Image
          className=' '
          src='/service/Scard3.png'
          alt=''
          title=''
          width='100'
          height='100'
          layout='responsive'
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
      <div className='hidden xl:inline-grid absolute xl:-right-[6%]  xl:bottom-[6%] 2xl:bottom-[7%] 2xl:-right-20'>
        <img
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className='hidden xl:inline-grid absolute xl:top-[14%] xl:left-[45%] 2xl:top-[14%] 2xl:left-[45%] '>
        <img
          className=' animate-spin-slow '
          src='/spinners/smallblue.png'
          alt=''
        />
      </div>
      <div className='  h-[90%] xl:absolute flex top-[5%] justify-center xl:px-0 xl:w-full '>
        <div className='xl:w-[100%]  w-[90%] xl:ml-5 flex flex-col xl:flex-row xl:space-y-5 text-center items-center xl:text-left '>
          <div className=' basis-[46%]  '>
            <Image
              src='/service/Scard3person.png'
              alt=''
              title=''
              width='600'
              height='600'
              priority
              objectFit='cover'
              quality={100}
            />
          </div>
          <div className='flex-1 xl:py-5 space-y-5 xl:pr-5 xl:pl-10  '>
            <h2
              className={` ${styles.montserrat} font-bold heading-secondary xl:w-[80%]  `}
            >
              Esports Specialized Consultancy, Talents, Events in MENA
            </h2>
            <p
              className={` ${styles.popins} text-base xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
            >
              We will walk you through the right steps to establish your esports
              presence simply and quickly, through the efforts of our amazing
              team that will help you better understand the economy surrounding
              this thriving industry.
            </p>
            <p
              className={` ${styles.popins} text-base xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
            >
              Whether you&apos;re looking for opportunities or solutions for
              your business, and regardless of your current status, our esports
              consultancy agency is ready to provide you with all the analytics
              you need, as well as a roster of talent for all of your upcoming
              esports events.
            </p>
            <p
              className={` ${styles.popins} text-base xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
            >
              Our experienced play by play caster will level up your events,
              while our MCs & hosts professionally pilot the show. A dream team
              of color commentators is guaranteed to fire up the audience,
              ensuring all the engagement you need. Don&apos;t take our word for
              it, our results speak for themselves. We&apos;re more than
              confident in our ability to upgrade your business in everything
              related to esports, which is why choosing us is the first step
              towards your goal.
            </p>
            <Link href='/esports-services'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]  md:py-4  md:px-6 px-4 py-2  font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                DISCOVER TALENTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard3;
