import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

function Scard4() {
  return (
    <>
      <div className='hidden  xl:inline-grid flex-col xl:left-[7%]  relative   xl:mt-10    w-[90%] h-[38rem]'>
        <Image
          src='/service/Scard4.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          quality={100}
          // objectFit='cover'
        />
        <div className='hidden xl:inline-grid absolute xl:top-[14%] xl:left-[20%] 2xl:top-[14%] 2xl:left-[20%] '>
          <img
            className=' animate-spin-slow '
            src='/spinners/smallblue.png'
            alt=''
          />
        </div>
      </div>
      <div className=' h-[80%] xl:absolute  xl:left-[5%] flex top-[10%]  justify-center  xl:w-[90%] '>
        <div className='xl:w-[100%] xl:ml-0 flex flex-col xl:flex-row space-y-5 text-center xl:text-left '>
          <div className=' basis-[48%] relative  '>
            <Image
              className='scale-[1.00] '
              src='/service/Scard4person.png'
              alt=''
              title=''
              width='530'
              height='500'
              priority
              objectFit='cover'
              quality={100}
            />
          </div>
          <div className=' flex-1  xl:py-12 xl:px-9 xl:pr-0  '>
            <h2
              className={` ${styles.montserrat} heading-primary text-[#404b68] xl:text-[30px] mb-5`}
            >
              Talent <span className='text-[#008fcf]'>Management</span>
            </h2>
            <p
              className={` ${styles.popins} text-[#404b68] text-base xl:text-[18px] xl:leading-[29px] xl:pr-5 mb-10`}
            >
              Are you an influencer looking to broaden your reach and
              collaborate with others? We are here to assist you. <br /> <br />{" "}
              Our staff will introduce you to some of the world&apos;s most
              well-known entertainment and technology firms, raising your
              profile and carefully coaching you to become more than an
              influencer, but a brand ambassador with a continuous source of
              income .
            </p>
            <div className=' mx-auto xl:mx-0 xl:ml-5 relative [z-index:1] after:[z-index:-1] before:[z-index:-1]   w-fit lg:btnAnimateBefore lg:btnAnimateAfter'>
              <Link href='/influencer-services'>
                <button
                  className={` ${styles.popins} text-white text-base  md:inline-block bg-[linear-gradient(#fdc66e,#ff805e)]   md:py-[18px]  md:px-5 px-4 py-2 font-medium  xl:w-56  rounded-full md:text-[20px]`}
                >
                  REACH OUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard4;
