import Link from 'next/link';
import React, { Fragment } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

function Scard3() {
  return (
    <Fragment>
      {
        <div className='hidden absolute  -left-[25%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>
      }
      {
        // <img
        //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/commentary-bg.png'
        //   alt=''
        //   className='hidden xl:inline-grid  w-full '
        // />
      }
      <div className='hidden   xl:inline-grid w-full h-[50rem]'>
        <Image
          src='/service/Scard3.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          // objectFit='cover'
        />
      </div>
      <div className='hidden xl:inline-grid absolute   bottom-0 -right-10'>
        <img
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className='hidden xl:inline-grid absolute top-20 left-[44%] '>
        <img
          className=' animate-spin-slow '
          src='/spinners/smallblue.png'
          alt=''
        />
      </div>
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] w-[90%] xl:ml-5 flex flex-col xl:flex-row space-y-5 text-center items-center xl:text-left '>
          <div className=' basis-[47%]  '>
            {
              // <img
              //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/commentary-people.png'
              //   alt=''
              // />
            }
            <Image
              src='/service/Scard3person.png'
              alt=''
              title=''
              width='600'
              height='600'
              // layout='responsive'
              priority
              objectFit='cover'
            />
          </div>
          <div className='flex-1 xl:py-5 space-y-5 xl:pr-6'>
            <h2
              className={` ${styles.montserrat} font-bold heading-secondary xl:w-[80%]  `}
            >
              Esports Specialized Consultancy, Talents, Events in MENA
            </h2>
            <p
              className={` ${styles.popins} text-sm xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
            >
              We will walk you through the right steps to establish your esports
              presence simply and quickly, through the efforts of our amazing
              team that will help you better understand the economy surrounding
              this thriving industry.
            </p>
            <p
              className={` ${styles.popins} text-sm xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
            >
              Whether you&apos;re looking for opportunities or solutions for
              your business, and regardless of your current status, our esports
              consultancy agency is ready to provide you with all the analytics
              you need, as well as a roster of talent for all of your upcoming
              esports events.
            </p>
            <p
              className={` ${styles.popins} text-sm xl:text-[18px] xl:leading-[29px] text-[#040e29] `}
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
            <Link href='/'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]  md:py-4  md:px-6 px-4 py-2  font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                DISCOVER TALENTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Scard3;
