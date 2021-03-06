import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import CountUp from "react-countup";
import CarouselComponent from "../standard/Carousel";
import { useRecoilValue } from "recoil";
import { headerImageRecoil } from "../../recoil/headerImageRecoil";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Card1() {
  const router = useRouter();

  const { t } = useTranslation("home");
  const triggerImageChange = useRecoilValue(headerImageRecoil);
  // useEffect(() => {
  //   return () => {};
  // }, []);
  return (
    <div
      id='header-card'
      className='  relative  xl:block xl:w-[80%] mx-auto overflow-hidden xl:overflow-visible   '
    >
      <div className='hidden xl:h-[49rem]   xl:inline-grid -top-0 md:w-[99%] 2xl:h-[49rem]'>
        <Image
          className='hidden bg-contain  xl:inline-grid absolute top-0'
          src={"/home/card1.png"}
          alt=''
          width='100%'
          height='100%'
          quality={100}
          layout='responsive'
          priority
          objectFit='contain'
        />
      </div>
      {
        //*********** */ mobile view
        <div
          className={`${styles.mobileCard1}  mb-5 md:mb-10  md:h-[70vh] px-2 py-5  w-full bg-no-repeat bg-cover xl:hidden flex text-center flex-col lg:flex-row lg:flex-wrap items-center justify-evenly space-y-5 `}
        >
          <h2
            data-aos='fade-down'
            data-aos-delay='300'
            className='text-xl md:text-[44px]  text-white font-semibold pt-3 md:leading-snug'
          >
            {t("home:card1_heading")}
          </h2>
          <h3
            data-aos='fade-right'
            data-aos-delay='500'
            className='text-base md:text-[30px] text-white '
          >
            #{t("home:card1_smallHeading")}.
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
                <CountUp end={70} duration={1} delay={1} />+{" "}
                {t("home:card1_talents")}
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
                <CountUp end={100} duration={1} delay={1} />
                {t("home:card1_reach")}
              </h3>
            </div>
          </div>

          <div
            data-aos='fade-right'
            data-aos-duration='2000'
            className=' md:space-x-0   md:px-10 md:mr-10 flex flex-wrap justify-center items-center'
          >
            <a href='https://www.pubgmobile.com/ar/home.shtml '>
              <img
                className='w-20 object-cover m-1'
                src='/home/card1images/pubg.png'
                alt=''
              />
            </a>
            <a href='https://www.ea.com/'>
              <img className='w-20 m-1' src='/home/card1images/ea.png' alt='' />
            </a>
            <a href='https://www.riotgames.com/en'>
              <img
                className='w-20 m-1'
                src='/home/card1images/riot.png'
                alt=''
              />
            </a>
            <a href='https://www.moonton.com/'>
              <img
                className='w-20 m-1'
                src='/home/card1images/moon.png'
                alt=''
              />
            </a>
            <a href='https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent'>
              <img
                className='w-20 m-1'
                src='/home/card1images/huawei.png'
                alt=''
              />
            </a>
            <a href='https://global.redmagic.gg/'>
              <img
                className='w-20 m-1'
                src='/home/card1images/redmagic.png'
                alt=''
              />
            </a>
            {router.locale === "zh" ? (
              <a href='https://global.redmagic.gg/'>
                <img
                  className='w-20'
                  src='/home/card1images/more-brands.png'
                  alt=''
                />
              </a>
            ) : (
              <img
                className='w-20'
                src='/home/card1images/muchmore.png'
                alt=''
              />
            )}
          </div>
        </div>
      }
      {
        //  mobile view end
      }
      <div className='  hidden absolute  [z-index:1] h-full xl:h-auto top-0    w-full xl:flex flex-col justify-center text-center space-y-2 md:space-y-6  xl:space-y-5 '>
        <h2
          data-aos='fade-down'
          data-aos-delay='300'
          className='text-xl md:text-[44px]  text-white font-semibold pt-3 md:leading-snug'
        >
          {
            // Gaming & Esports Talent Agency
          }

          {t("home:card1_heading")}
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
          {
            // #Connect Your Brand With Arabic Millennials.
          }
          #{t("home:card1_smallHeading")}.
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
              <CountUp end={70} duration={1} delay={1} />+{" "}
              {t("home:card1_talents")}
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
              <CountUp end={100} duration={1} delay={1} />
              {t("home:card1_reach")}
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
          {router.locale === "zh" ? (
            <a href='https://global.redmagic.gg/'>
              <img
                className='w-30 object-contain'
                src='/home/card1images/more-brands.png'
                alt=''
              />
            </a>
          ) : (
            <a>
              <img
                className='w-30'
                src='/home/card1images/muchmore.png'
                alt=''
              />
            </a>
          )}
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-delay='500'
        className='top-1 xl:left-[20px]  xl:h-[49rem] 2xl:left-[20px] hidden  2xl:h-[49rem] 2xl:w-[95%] h-[100%] xl:inline-grid md:w-[95%] absolute '
      >
        {
          // <Image
          //   className='hidden  xl:inline-grid md:w-[98%] absolute '
          //   src='/home/home1.png'
          //   alt=''
          //   priority
          //   width='100%'
          //   height='100%'
          //   layout='responsive'
          //   quality={100}
          //   objectFit='contain'
          // />
          // <div className='hidden  xl:block md:w-[100%] absolute bottom-0 bg-black '>
          //   <CarouselComponent />
          // </div>
        }

        {!triggerImageChange && (
          <div>
            {
              // <Image
              //   className='hidden  xl:inline-grid md:w-[98%] absolute '
              //   src='/home/home1.png'
              //   alt=''
              //   priority
              //   width='100%'
              //   height='100%'
              //   layout='responsive'
              //   quality={100}
              //   objectFit='contain'
              // />
              <img
                src='/home/home1.png'
                alt=''
                className={`hidden transition-all ease-in-out duration-1000   xl:inline-grid md:w-[100%] absolute`}
              />
            }{" "}
          </div>
        )}
        {triggerImageChange && (
          <img
            src='/home/carouselImages/maskgroup.png'
            alt=''
            className='hidden trasition-all xl:inline-grid md:w-[100%] bottom-7 absolute'
          />
        )}

        {
          // <div>
          //   <CarouselComponent />
          // </div>
        }
        {
          // <img
          //   src='/home/home1.png'
          //   alt=''
          //   className='hidden  xl:inline-grid md:w-[100%] absolute'
          // />
        }
      </div>
    </div>
  );
}

export default Card1;
