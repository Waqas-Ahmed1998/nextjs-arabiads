import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

function Card4() {
  return (
    <div className='lg:w-[70%] mx-auto '>
      <div className='flex flex-col-reverse lg:flex-row text-center lg:text-left'>
        <div className='p-5 flex-1 space-y-5 lg:space-y-7 xl:pt-20'>
          <h2 className='text-xl md:text-4xl text-[#020c27] font-bold'>
            Influencer <span className='text-[#008fcf]'>Management</span>
          </h2>
          <p
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
        <div className='flex-1   '>
          <div className=' w-auto  '>
            <Image
              src='/home/card3person.png'
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
      </div>
    </div>
  );
}

export default Card4;
