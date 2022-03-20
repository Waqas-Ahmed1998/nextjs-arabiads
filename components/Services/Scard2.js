import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Scard2() {
  return (
    <>
      <div className='hidden   xl:inline-grid w-full h-[50rem]'>
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
      <div className='hidden xl:inline-grid absolute [z-index:-1] -top-10 -left-2'>
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
      <div className=' h-[80%] xl:absolute flex top-[5%]  justify-center  xl:w-full '>
        <div className='  xl:w-[100%] xl:ml-20 flex flex-col-reverse xl:flex-row space-y-5 text-center xl:text-left '>
          <div className='  xl:mt-10 flex-1 xl:py-16   xl:ml-12 xl:p-5'>
            <h2
              className={` ${styles.montserrat} heading-primary mb-5 xl:text-white `}
            >
              Reach Millions Through Gaming Influencers
            </h2>
            <p className='xl:text-white text-sm xl:text-[19px] xl:leading-[30px] mb-10 '>
              Gaming Influencers can help you reach new audiences. To maximize
              your outcomes, we work across the full pyramid of influence, from
              the most powerful profiles to micro influencers, including key
              opinion leaders, each with a specific goal in mind. The
              multiplicity of content provided by influencers with a power of
              prescribing driven by proximity to their audience is multiplied
              tenfold by activating smaller talents.
            </p>
            <Link href='/influencer-services'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)] md:py-4  md:px-6 px-5 py-2  font-semibold  xl:w-60  rounded-full md:text-[20px] '>
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className=' basis-[44%]  '>
            <div className=' w-[80%] mx-auto md:w-full xl:ml-8 '>
              <Image
                src='/service/Scard2person.png'
                alt=''
                title=''
                width='550'
                height='707'
                priority
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard2;
