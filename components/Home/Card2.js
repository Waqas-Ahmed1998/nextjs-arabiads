import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
function Card2() {
  return (
    <div className='md:my-0 lg:-top-0 xl:top-auto xl:mt-0 2xl:my-0 relative bg-contain bg-no-repeat xl:inline-black xl:w-[80%] mx-auto '>
      <div className='hidden   xl:inline-grid top-0  w-[100%] h-[47rem]'>
        <Image
          src='/home/card2.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          quality={100}
        />
      </div>
      <div className='hidden xl:inline-grid absolute [z-index:-1] -top-9 -left-2'>
        <img
          className=' animate-spin-slow '
          src='/spinners/redspinner.png'
          alt=''
        />
      </div>
      <div className='hidden xl:inline-grid absolute top-14 right-16'>
        <img
          className=' animate-spin-slow '
          src='/spinners/smallspinner.png'
          alt=''
        />
      </div>

      <div className='xl:absolute top-0 xl:top-4 flex flex-col-reverse xl:flex-row xl:pt-[5rem] xl:ml-[5.5rem] text-center xl:text-left lg:px-2  '>
        <div className='lg:basis-[70%]  relative  md:top-auto  mb-5 px-2 xl:px-2 '>
          <h2 className='text-xl xl:text-[35px] font-bold   text-[#167EE0] xl:text-white pt-3 mb-3 xl:mb-6 xl:[line-height:56px] xl:w-[90%]'>
            One of MENA’s Leading Agency for{" "}
            <span className='text-black'>Influencer Marketing</span>
          </h2>
          <p className='text-base md:text-lg text-gray-600 xl:text-white mb-10  '>
            We are a KOL Agency MENA that assures you that our group of experts
            - which includes digital marketing specialists, campaign managers,
            and media buying specialists - will walk your firm step by step to
            achieve its goals and business objectives.<br></br> <br></br> This
            is made possible by identifying KPIs, goals, and other needs that
            may have slipped under your radar, we then pass it along to our
            growing network of influencers to implement, track and report
            results in an honest and transparent way that answer all of your
            burning inquiries.
          </p>
          <div className=' mx-auto xl:mx-0 relative [z-index:1] after:[z-index:-1] before:[z-index:-1] lg:before:border-[#86A9E9] lg:after:border-[#4983E7] w-fit lg:btnAnimateBefore lg:btnAnimateAfter'>
            <Link href='/services'>
              <button
                className={` ${styles.popins} text-white text-base  md:inline-block bg-[linear-gradient(#fdc66e,#ff805e)]   md:py-5  md:px-5 px-4 py-2 font-medium  xl:w-60  rounded-full md:text-[20px]`}
              >
                WHAT WE DO
              </button>
            </Link>
          </div>
        </div>
        <div className='  xl:basis-[50%]  '>
          <div className='hidden xl:block w-full md:scale-[1.15] mx-auto md:w-[50%] relative xl:top-[4%] xl:-right-[15%] xl:w-auto   '>
            <Image
              className='scale-[0.8] md:scale-[1]'
              src='/home/card2image.png'
              alt=''
              title=''
              width='520'
              height='645'
              priority
              objectFit='cover'
              quality={100}
            />
          </div>
          <div className=' xl:hidden w-full mx-auto md:w-[100%] xl:w-auto xl:ml-10  '>
            <Image
              className=''
              src='/home/card2image.png'
              alt=''
              title=''
              width='600'
              height='400'
              priority
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
