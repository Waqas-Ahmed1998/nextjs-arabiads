import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
// import useInView from "react-cool-inview";
import { motion } from "framer-motion";
function Card3() {
  // let { observe, inView, scrollDirection } = useInView({
  //   threshold: 0.25,
  //   onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //     // Triggered when the target enters the viewport
  //     console.log("hello");
  //     unobserve();
  //   },
  // });
  // console.log(inView);

  return (
    <div className='   md:h-[80vh] md:w-full xl:h-fit  mt-10  lg:mt-20 xl:mt-0 relative mx-auto bg-contain bg-no-repeat  xl:inline-grid lg:w-[70%]   '>
      <img
        className='absolute [z-index:-1] hidden xl:inline-grid object-contain  -left-[10%] top-0'
        src='/home/pettren.png'
        alt=''
      />

      <div
        data-aos='zoom-in'
        data-aos-duration='600'
        className='hidden   xl:inline-grid absolute top-0  md:w-[100%] h-[38rem]'
      >
        <Image
          src='/home/card3.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
        />
      </div>
      <img
        data-aos='zoom-in'
        data-aos-duration='600'
        src='/home/card3mobilebg.jpg'
        alt=''
        className='xl:hidden  w-full h-[100%]  '
      />
      <div className=' hidden xl:inline-grid absolute -top-20 -right-20'>
        <img
          className='hidden lg:inline-grid animate-spin-slow '
          src='/spinners/redspinner.png'
          alt=''
        />
      </div>
      <div className='flex justify-center h-full  flex-col text-center xl:text-left xl:flex-row gap-3 absolute top-0 '>
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
            />
          </div>
        </div>
        <div data-aos='fade-left' className='xl:flex-1 lg:pt-16  px-2 xl:pr-12'>
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
