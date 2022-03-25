import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

function Plateforms() {
  return (
    <>
      <div
        data-aos='zoom-out'
        className='px-5 my-10 lg:my-20   mx-auto lg:w-[70%] text-center relative'
      >
        <h3
          className={`${styles.montserrat} mb-2 xl:mb-10 text-[#404040] md:text-2xl text-center text-lg xl:text-[40px] [font-weight:700]`}
        >
          OUR PLATFORMS
        </h3>
        <p className='text-base xl:text-[22px] xl:leading-[35px]  text-[#040e29] '>
          With a complementarity between micro and macro-influencers and a
          strategic target on each platform to hit the right target population
          you wish we can fulfill your social media goals and establish a
          community instead of just take a typical UA approach.
        </p>
      </div>
      <div
        data-aos='zoom-out'
        className=' hidden items-center mt-20 mx-auto justify-center max-w-7xl  space-y-10 lg:space-y-0 lg:flex flex-col lg:flex-row gap-2 md:gap-5'
      >
        <div
          className={`flex items-center   flex-col ${styles.cardShadow} relative bg-white pt-[30px] justify-end  pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute  -top-8 w-[35%] md:-top-8 md:w-[50%]'>
            <Image
              src={"/plateforms/instagram.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Instagram
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex items-center  justify-end flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute -top-8 w-[35%] md:-top-8 md:w-[50%]'>
            <Image
              src={"/plateforms/youtube.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            YouTube
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex items-center  justify-end flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute -top-8 w-[35%] md:-top-8  md:w-[50%]'>
            <Image
              src={"/plateforms/tiktok.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            TikTok
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex items-center  justify-end flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute -top-8 w-[35%] md:-top-8 md:w-[50%]'>
            <Image
              src={"/plateforms/twitter.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Twitter
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex items-center  justify-end flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute -top-8 md:-top-8 w-[35%] md:w-[50%]'>
            <Image
              src={"/plateforms/facebook.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Facebook
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex items-center  justify-end flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[40px] rounded-[30px] w-48 md:h-40 h-24`}
        >
          <div className='absolute -top-8 w-[35%] md:-top-8 md:w-[50%]'>
            <Image
              src={"/plateforms/twitch.png"}
              width='500'
              height='500'
              priority
              alt=''
              quality={100}
              objectFit='contain'
            />
          </div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Twitch
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
      </div>
      <div
        className={` lg:hidden grid grid-cols-3 mx-auto  w-[80%] gap-3 justify-center items-center`}
      >
        <div className='flex  justify-center '>
          <Image
            className=''
            src={"/plateforms/twitch.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className=''
            src={"/plateforms/instagram.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className=''
            src={"/plateforms/youtube.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className=''
            src={"/plateforms/facebook.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className=''
            src={"/plateforms/tiktok.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className=''
            src={"/plateforms/twitter.png"}
            width='80'
            height='80'
            priority
            alt=''
            quality={100}
            objectFit='contain'
          />
        </div>
      </div>
    </>
  );
}

export default Plateforms;
