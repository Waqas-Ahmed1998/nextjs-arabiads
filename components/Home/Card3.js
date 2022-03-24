import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
// import useInView from "react-cool-inview";

function Card3() {
  return (
    <div className='   md:w-full xl:h-fit  relative mx-auto bg-contain bg-no-repeat  xl:black xl:w-[75%] flex items-center  '>
      <img
        className='absolute [z-index:-1] hidden xl:inline-block object-contain scale-[.95]  -left-[10%] -top-4'
        src='/home/pettren.png'
        alt=''
      />

      <div
        data-aos='zoom-in'
        data-aos-duration='600'
        className='hidden   xl:inline-grid top-0   md:w-[100%] h-[36rem]'
      >
        <Image
          src='/home/card3.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          quality={100}
        />
      </div>

      {
        // mobile view
        <div
          className={`${styles.mobileCard3} pb-10 w-full bg-no-repeat bg-cover xl:hidden flex text-center flex-col items-center `}
        >
          <Image
            data-aos='zoom-in-right'
            src='/home/mobileperson.png'
            alt=''
            title=''
            width='300'
            height='300'
            priority
            objectFit='cover'
            quality={100}
          />

          <h2
            data-aos='fade-down'
            className='text-xl md:text-2xl lg:text-[30px] xl:leading-[42px] mb-2  lg:text-[#167EE0] font-semibold'
          >
            Digital Influence{" "}
            <span className='lg:text-black text-[#008fcf]'>
              Campaign Strategies and Management
            </span>
          </h2>
          <p
            data-aos='zoom-out-left'
            className={`${styles.popins}  text-white text-base md:text-lg mb-10 `}
          >
            We use top influencers to help brands engage and activate audiences
            all around the world, with a specialization on the Arabic speaking
            nations of the Middle East and North Africa. We select and
            tailor-made contracts for the profiles most closely related to your
            objectives, your target and the creative concept that we have
            devised to impact a much larger audience.
          </p>
          <Link href='/influencer-services'>
            <button className=' text-white text-base md:py-4  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
              LEARN MORE
            </button>
          </Link>
        </div>
      }

      <div className=' hidden xl:inline-grid absolute -top-20 -right-20'>
        <img
          className='hidden lg:inline-grid animate-spin-slow '
          src='/spinners/redspinner.png'
          alt=''
        />
      </div>
      <div className='hidden xl:flex justify-center h-full  flex-col text-center xl:text-left xl:flex-row gap-3 absolute top-0 '>
        <div className='xl:flex-1 mx-auto py-10 pl-10 '>
          <div data-aos='fade-right' className=' w-auto  '>
            <Image
              src='/home/cardperson.png'
              alt=''
              title=''
              width='100%'
              height='100%'
              layout='responsive'
              priority
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
        <div data-aos='fade-left' className='xl:flex-1 lg:pt-16  px-2 '>
          <h2 className='text-xl md:text-2xl lg:text-[30px] xl:leading-[42px] mb-5 lg:text-[#167EE0] font-semibold'>
            Digital Influence{" "}
            <span className='lg:text-black text-[#008fcf]'>
              Campaign Strategies and Management
            </span>
          </h2>
          <p
            className={`${styles.popins} text-[#404b68] text-base md:text-lg mb-10 `}
          >
            We use top influencers to help brands engage and activate audiences
            all around the world, with a specialization on the Arabic speaking
            nations of the Middle East and North Africa. We select and
            tailor-made contracts for the profiles most closely related to your
            objectives, your target and the creative concept that we have
            devised to impact a much larger audience.
          </p>
          <Link href='/influencer-services'>
            <button className=' text-white text-base md:py-4  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card3;
