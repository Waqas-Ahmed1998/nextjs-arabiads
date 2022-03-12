import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

function Scard4() {
  return (
    <>
      {
        // <img
        //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/management-2-bg-1.png'
        //   alt=''
        //   className='hidden xl:inline-grid  w-full '
        // />
      }
      <div className='hidden xl:left-9 relative  xl:mt-10   xl:inline-grid w-[90%] h-[38rem]'>
        <Image
          src='/service/Scard4.png'
          alt=''
          title=''
          width='100%'
          height='100%'
          layout='responsive'
          priority
          // objectFit='cover'
        />
      </div>
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-[90%] '>
        <div className='xl:w-[100%] xl:ml-0 flex flex-col xl:flex-row space-y-5 text-center xl:text-left '>
          <div className=' basis-[46%] relative '>
            {
              // <img
              //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/m-s-2-img.png'
              //   alt=''
              //   className='w-[90%]'
              // />
            }
            <Image
              src='/service/Scard4person.png'
              alt=''
              title=''
              width='500'
              height='480'
              // layout='responsive'
              priority
              objectFit='cover'
            />
          </div>
          <div className=' flex-1 xl:py-12 xl:px-10 space-y-5 '>
            <h2
              className={` ${styles.montserrat} heading-primary text-[#404b68] xl:text-[30px]`}
            >
              Talent <span className='text-[#008fcf]'>Management</span>
            </h2>
            <p
              className={` ${styles.popins} text-[#404b68] text-sm xl:text-[18px] xl:leading-[29px] xl:pr-5`}
            >
              Are you an influencer looking to broaden your reach and
              collaborate with others? We are here to assist you. Our staff will
              introduce you to some of the world&apos;s most well-known
              entertainment and technology firms, raising your profile and
              carefully coaching you to become more than an influencer, but a
              brand ambassador with a continuous source of income .
            </p>
            <Link href='/'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)] md:py-4  md:px-6 px-4 py-2  font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                REACH OUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard4;
