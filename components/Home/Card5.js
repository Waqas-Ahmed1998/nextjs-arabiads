import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Card5() {
  return (
    <div className=' grid grid-cols-1 md:max-w-[95rem] mx-auto relative  '>
      <div className='hidden mx-auto  xl:inline-grid  lg:w-[65rem] h-[34rem]'>
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
      <img src='/home/mobilebg2.jpg' className='mx-auto w-fit  xl:hidden' />
      <div className='hidden xl:inline-grid absolute [z-index:-1] -top-14 left-[10%]'>
        <img
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className='xl:mt-24 px-5 lg:px-0 items-center lg:w-[70%]  justify-self-center absolute  flex flex-col xl:flex-row  '>
        <div className=' w-[60%] md:w-[35%] '>
          <div className=' pl-10'>
            <Image
              src='/home/card5person.png'
              alt=''
              title=''
              width='100%'
              height='100%'
              layout='responsive'
              priority
            />
          </div>
        </div>

        <div className='lg:py-2 flex-1  text-center xl:text-left lg:pr-10 '>
          <h2 className='text-white text-xl md:text-3xl font-bold xl:leading-[48px] mb-5'>
            Esports Talents{" "}
            <span className='text-[#020c27] md:text-[#020c27]'>
              and Advertising Services
            </span>{" "}
          </h2>
          <p
            className={`${styles.popins} text-sm text-white md:text-lg tracking-wide md:tracking-normal`}
          >
            Arabia E-Advertising began its career as one of the first talent
            agencies, representing both established and emerging esports-focused
            broadcasting talent. We assist these specialized talents in
            maximizing the value they ve created by connecting them with
            hundreds of brand partners who trust us. We can assist you whether
            you are looking to hire an on-air host for an event or need
            representation as a talent
          </p>
          <Link href='/esports-services'>
            <button className=' text-white text-base px-4 py-2 md:px-6 md:py-4  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]   font-semibold  xl:w-60  rounded-full md:text-[20px] mt-10 '>
              FIND OUT MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card5;
