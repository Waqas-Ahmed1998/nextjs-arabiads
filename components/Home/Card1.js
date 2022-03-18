import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import CountUp from "react-countup";

function Card1() {
  return (
    <div className=' relative  xl:inline-grid lg:w-[78%] overflow-hidden  '>
      <div className='hidden   xl:inline-grid absolute -top-0 md:w-[99%] h-[49rem]'>
        <Image
          className='hidden bg-contain  xl:inline-grid absolute top-0 '
          src={"/home/card1.png"}
          alt=''
          width='100%'
          height='100%'
          quality={100}
          layout='responsive'
          priority
          objectFit='cover'
        />
      </div>
      <img
        className='xl:hidden w-full h-[90%]'
        src='/home/mobilebg.jpg'
        alt=''
      />
      <div className='absolute  [z-index:1] h-full xl:h-auto top-0    w-full flex flex-col justify-center text-center space-y-2 md:space-y-6  xl:space-y-5 '>
        <h2
          data-aos='fade-down'
          data-aos-delay='300'
          className='text-xl md:text-[44px]  text-white font-semibold pt-3 md:leading-snug'
        >
          Gaming & Esports Talent Agency
        </h2>
        <h3
          data-aos='fade-right'
          data-aos-delay='500'
          // animate={{
          //   x: [-100, 0],
          //   opacity: [0, 1],
          // }}
          // transition={{ duration: 0.4, delay: 0.7 }}
          className='text-base md:text-[30px] text-white '
        >
          #Connect Your Brand With Arabic Millennials.
        </h3>
        <div className='text-sm gap-2  md:text-lg font-bold tracking-wide text-[#FFCE51] px-2 flex justify-center md:gap-10'>
          <div
            data-aos='zoom-in'
            data-aos-delay='600'
            className='space-x-1 md:space-x-2 flex items-center'
          >
            <img src='/home/card1images/user.png' alt='' className='w-8 ' />
            <h3
              className={` ${styles.popins} font-semibold text-base md:text-[22px]`}
            >
              <CountUp end={70} duration={1} delay={1} />+ Talents
            </h3>
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='600'
            className='space-x-2 flex items-center'
          >
            <img src='/home/card1images/earth.png' alt='' className='w-8' />
            <h3
              className={` ${styles.popins} font-semibold text-base md:text-[22px]`}
            >
              <CountUp end={100} duration={1} delay={1} />M Total Reach
            </h3>
          </div>
        </div>

        <div
          data-aos='fade-right'
          data-aos-duration='2000'
          className=' md:space-x-0 px-2 md:px-10 md:mr-10 flex '
        >
          <a href='https://www.pubgmobile.com/ar/home.shtml'>
            <img className='w-30' src='/home/card1images/pubg.png' alt='' />
          </a>
          <a href='https://www.ea.com/'>
            <img className='w-30' src='/home/card1images/ea.png' alt='' />
          </a>
          <a href='https://www.riotgames.com/en'>
            <img className='w-30' src='/home/card1images/riot.png' alt='' />
          </a>
          <a href=''>
            <img
              className='https://www.moonton.com/'
              src='/home/card1images/moon.png'
              alt=''
            />
          </a>
          <a href='https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent'>
            <img className='w-30' src='/home/card1images/huawei.png' alt='' />
          </a>
          <a href='https://global.redmagic.gg/'>
            <img className='w-30' src='/home/card1images/redmagic.png' alt='' />
          </a>
          <a href='https://global.redmagic.gg/'>
            <img className='w-30' src='/home/card1images/muchmore.png' alt='' />
          </a>
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-delay='500'
        className='top-1 xl:left-[20px]  xl:h-[49rem] 2xl:left-[20px] hidden  2xl:h-[49rem] 2xl:w-[95%] h-[100%] xl:inline-grid md:w-[95%] absolute '
      >
        <Image
          className='hidden  xl:inline-grid md:w-[98%] absolute '
          src='/home/home1.png'
          alt=''
          priority
          width='100%'
          height='100%'
          layout='responsive'
          quality={100}
          objectFit='contain'
        />
      </div>
    </div>
  );
}

export default Card1;
