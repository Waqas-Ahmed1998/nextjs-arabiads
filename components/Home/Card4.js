import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import AOS from "aos";

function Card4() {
  // useEffect(() => {
  //   AOS.init({
  //     disable: "tablet",
  //   });
  //   return () => {};
  // }, []);
  return (
    <div id='triger' className='xl:w-[70%] mx-auto  '>
      <div className='flex flex-col-reverse xl:flex-row text-center xl:text-left '>
        <div className='p-5 flex-1 space-y-5 lg:space-y-7 xl:pt-20'>
          <h2
            data-aos='fade-right'
            data-aos-anchor='#triger'
            className='text-xl md:text-4xl text-[#020c27] font-bold'
          >
            Influencer <span className='text-[#008fcf]'>Management</span>
          </h2>
          <p
            data-aos='zoom-out-right'
            data-aos-anchor='#triger'
            className={`${styles.popins} text-[#404b68] text-sm md:text-lg tracking-wide md:tracking-normal `}
          >
            Are you an influencer looking to broaden your reach and collaborate
            with others? We are here to assist you. Our staff will introduce you
            to some of the worlds most well-known entertainment and technology
            firms, raising your profile and carefully coaching you to become
            more than an influencer, but a brand ambassador with a continuous
            source of income.
          </p>
          <Link href='/influencer-services'>
            <button className=' text-white text-base md:py-4  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
              REACH OUT
            </button>
          </Link>
        </div>

        <div className='flex-1  '>
          <div
            data-aos='zoom-out-left'
            data-aos-anchor='#triger'
            className='hidden xl:block w-auto md:w-[50%]  mx-auto xl:w-auto xl:pl-5 '
          >
            <Image
              className=''
              src='/home/card3person.png'
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
          <div
            data-aos='zoom-out-left'
            data-aos-anchor='#triger'
            className='xl:hidden w-auto md:w-[50%]  mx-auto xl:w-auto xl:pl-5 '
          >
            {
              <Image
                className=''
                src='/home/card4mobileperson.png'
                alt=''
                title=''
                width='600'
                height='400'
                // layout='fill'
                priority
                objectFit='contain'
                quality={100}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
