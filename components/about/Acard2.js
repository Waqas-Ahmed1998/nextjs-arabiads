import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function Acard2() {
  return (
    <div className='flex flex-col xl:flex-row-reverse text-center xl:text-left  items-center p-5 xl:p-0'>
      <div className=' flex-1 xl:p-5  '>
        <h3
          className={`${styles.montserrat} font-bold md:text-xl text-[#0d3c5a] xl:text-4xl`}
        >
          BRANDS TRUST US...
        </h3>
        <p
          className={` ${styles.popins} mt-5 text-sm md:text-[21px] md:leading-[34px] text-[#404040] `}
        >
          We collaborate with prominent multinational brands and businesses to
          develop and implement cutting-edge influencer marketing strategies and
          campaigns.<br></br> <br></br> We specialize in developing and
          executing bespoke influencer marketing plans based on particular
          goals.
        </p>
        <p
          className={` ${styles.popins} mt-10 text-sm md:text-[21px] md:leading-[34px] text-[#404040] `}
        >
          Arabia E-Advertising specializes in the development and implementation
          of effective tactics, ranging from brand recognition to
          conversion-driven campaigns.
        </p>
      </div>
      <div className='flex-1'>
        {
          // <img
          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/about-img-2.png'
          //   alt=''
          //   className=''
          // />
        }
        <Image
          src='/about/about2.png'
          alt=''
          title=''
          width='600'
          height='600'
          // layout='responsive'
          priority
          objectFit='contain'
          quality={100}
        />
      </div>
    </div>
  );
}

export default Acard2;
