import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Icard1() {
  return (
    <>
      <div
        id='trigger'
        className='hidden   relative top-5 xl:inline-grid  w-[95%] h-[35rem]'
      >
        <Image
          data-aos='zoom-in-up'
          data-aos-anchor='#trigger'
          src='/home/card5.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
        />
      </div>
      <div className='hidden xl:inline-grid absolute  [z-index:-1]  -top-10 -left-20'>
        <img
          data-aos='zoom-in'
          data-aos-anchor='#trigger'
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className=' h-[80%]  xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] xl:ml-3 flex flex-col-reverse xl:flex-row space-y-5 items-center text-center xl:text-left '>
          <div className=' flex-1 xl:py-5 xl:px-5 '>
            <h2
              data-aos='zoom-out-right'
              data-aos-anchor='#trigger'
              className=' heading-primary xl:text-white xl:text-[28px] mb-5 font-bold'
            >
              Esports Talents{" "}
              <span className='text-black'>and Advertising Services</span>
            </h2>
            <p
              data-aos='zoom-out-right'
              data-aos-anchor='#trigger'
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
            <div
              className={` xl:ml-5  mt-10  ${styles.popins} mx-auto xl:mx-0 relative [z-index:1] after:[z-index:-1] before:[z-index:-1] before:border-5  w-fit lg:btnAnimateBefore lg:before:border-[#91AA76] lg:after:border-[#D3AA35] lg:btnAnimateAfter`}
            >
              <Link href='/esports-services'>
                <button className='text-white text-base px-4 py-2 md:px-6 md:py-[16px]  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]   font-medium  xl:w-60  rounded-full md:text-[20px]'>
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-1  px-10 '>
            <Image
              data-aos='zoom-in-left'
              data-aos-anchor='#trigger'
              data-aos-delay='300'
              src='/home/card5person.png'
              alt=''
              title=''
              width='400'
              height='450'
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
