import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Card5() {
  return (
    <div
      id='card5'
      className=' grid grid-cols-1 md:max-w-[95rem] mt-5 mx-auto relative  '
    >
      <div className='hidden mx-auto  xl:inline-grid  lg:w-[65rem] h-[34rem]'>
        <Image
          data-aos='zoom-in-up'
          data-aos-anchor='#card5'
          src='/home/card5.png'
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
      {
        // mobile view data
        <div
          className={`${styles.mobileCard5} py-5 pb-10 px-2 w-full bg-no-repeat bg-cover xl:hidden flex text-center flex-col items-center`}
        >
          <Image
            data-aos='zoom-in-right'
            data-aos-anchor='#card5'
            src='/home/mobileperson2.png'
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
            data-aos-anchor='#card5'
            className='text-white text-xl md:text-3xl font-bold xl:leading-[48px] mb-5'
          >
            Esports Talents{" "}
            <span className='text-[#020c27] md:text-[#020c27]'>
              and Advertising Services
            </span>{" "}
          </h2>
          <p
            data-aos='zoom-out-left'
            data-aos-anchor='#card5'
            className={`${styles.popins} text-base text-white md:text-lg tracking-wide md:tracking-normal`}
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
      }
      {
        // <img src='/home/mobilebg2.jpg' className='mx-auto w-fit  xl:hidden' />
      }
      <div className='hidden xl:inline-grid absolute [z-index:-1] -top-14 left-[7%] '>
        <img
          className=' animate-spin-slow '
          src='/spinners/bluespinner.png'
          alt=''
        />
      </div>
      <div className='hidden  xl:mt-14 px-5 lg:px-0 items-center lg:w-[75%]  justify-self-center absolute  xl:flex flex-col xl:flex-row  '>
        <div className=' w-[60%] md:w-[40%] '>
          <div className=' '>
            <Image
              data-aos='zoom-in-right'
              data-aos-anchor='#card5'
              src='/home/card5person.png'
              alt=''
              title=''
              width='100%'
              height='100%'
              layout='responsive'
              priority
              quality={100}
            />
          </div>
        </div>

        <div className='lg:py-2 basis-[65%] xl:relative xl:right-10 text-center xl:text-left '>
          <h2
            data-aos='fade-down'
            data-aos-anchor='#card5'
            className='text-white text-xl md:text-3xl font-bold xl:leading-[48px] mb-5'
          >
            Esports Talents{" "}
            <span className='text-[#020c27] md:text-[#020c27]'>
              and Advertising Services
            </span>{" "}
          </h2>
          <p
            data-aos='zoom-out-left'
            data-aos-anchor='#card5'
            className={`${styles.popins} text-base text-white md:text-lg tracking-wide md:tracking-normal`}
          >
            Arabia E-Advertising began its career as one of the first talent
            agencies, representing both established and emerging esports-focused
            broadcasting talent. We assist these specialized talents in
            maximizing the value they ve created by connecting them with
            hundreds of brand partners who trust us.<br></br> <br></br> We can
            assist you whether you are looking to hire an on-air host for an
            event or need representation as a talent
          </p>
          <div
            className={` xl:ml-5  mt-10  ${styles.popins} mx-auto xl:mx-0 relative [z-index:1] after:[z-index:-1] before:[z-index:-1] before:border-5  w-fit lg:btnAnimateBefore lg:before:border-[#91AA76] lg:after:border-[#D3AA35] lg:btnAnimateAfter`}
          >
            <Link href='/esports-services'>
              <button className='text-white text-base px-4 py-2 md:px-6 md:py-[16px]  md:inline-grid bg-[linear-gradient(#3786ed,#1eb5e4)]   font-medium  xl:w-60  rounded-full md:text-[20px]'>
                FIND OUT MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card5;
