import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import useInView from "react-cool-inview";
import { useTranslation } from "next-i18next";

function NumbersSpeak() {
  const { observe, inView, scrollDirection, unobserve } = useInView({
    threshold: 0.25,
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target enters the viewport
      unobserve();
    },
  });
  const { t } = useTranslation("common");

  return (
    <div
      data-aos='zoom-out'
      className=' mt-0 xl:mt-10 grid grid-cols-1 md:max-w-[95rem] mx-auto relative px-5 py-10'
    >
      <div className='mx-auto lg:w-[70%] text-center space-y-2 xl:space-y-10'>
        <h3
          className={`${styles.montserrat} text-[#404040]  text-center text-lg  md:text-2xl xl:text-[40px]  [font-weight:700]`}
        >
          {
            // LET THE NUMBERS SPEAK
          }
          {t("common:numbers_speak")}
        </h3>
        <p className='text-base xl:text-[22px] xl:leading-[35px]  text-[#040e29] '>
          {
            // We have worked with over 40 international known brands, delivering an
            // influencer pool of over 70 influencers, and have created a stunning 1
            // billion Impressions to this day, with over 30 campaigns signed. Our
            // community, as well as our partnerships with prominent businesses, is
            // continuously expanding.
          }
          {t("common:numb_para")}
        </p>
      </div>
      <div
        ref={observe}
        className=' relative mt-10  md:space-y-0 grid grid-cols-2  md:flex  md:flex-wrap md:flex-row gap-2 md:gap-5 items-center justify-center text-center'
      >
        {
          // className=' relative mt-10 space-y-10 lg:space-y-0 flex flex-col lg:flex-row gap-2 md:gap-5 items-center justify-center text-center'
        }
        <div
          className={`flex  space-y-1 px-3 md:px-0 pt-4  md:space-y-4   flex-col mb-5 md:mb-0 xl:mb-auto  ${styles.cardShadow} relative bg-white md:pt-[35px] md:pb-[0px] rounded-[30px] md:w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            {inView && <CountUp end={200} duration={1} />}+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} leading-snug text-[#404040] text-xl md:text-[25px] `}
          >
            {t("common:numb_camp")}
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>

        <div
          className={`flex space-y-1 px-3 md:px-0 pt-4  md:space-y-4   flex-col mb-5 md:mb-0 xl:mb-auto  ${styles.cardShadow} relative bg-white md:pt-[35px] md:pb-[0px] rounded-[30px] md:w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            {inView && <CountUp end={40} duration={1} />}+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} leading-snug text-[#404040] text-xl md:text-[25px] `}
          >
            {t("common:numb_brands")}
          </p>
          <div className='absolute left-[12%]  -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex space-y-1 px-3 md:px-0 pt-4  md:space-y-4  flex-col mb-5 md:mb-0 xl:mb-auto  ${styles.cardShadow} relative bg-white md:pt-[35px] md:pb-[0px] rounded-[30px] md:w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            {inView && <CountUp end={70} duration={1} />}+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} leading-snug text-[#404040] text-xl md:text-[25px] `}
          >
            {t("common:numb_excl")}
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex space-y-1 px-3 md:px-0 pt-4 md:space-y-4  flex-col mb-5 md:mb-0 xl:mb-auto  ${styles.cardShadow} relative bg-white md:pt-[35px]  rounded-[30px] md:w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            {inView && <CountUp end={50} duration={1} />}M
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} leading-snug text-[#404040] text-xl md:text-[25px] `}
          >
            {t("common:numb_mont")}
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex small:hidden md:block  md:space-y-4  flex-col mb-5 md:mb-0 xl:mb-auto  ${styles.cardShadow} relative bg-white md:pt-[35px] md:pb-[0px] rounded-[30px] md:w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            {inView && <CountUp end={27} duration={1} />}
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins}  leading-snug text-[#404040] text-xl md:text-[25px] `}
          >
            {t("common:numb_empl")}
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div className='-left-[10%]  hidden xl:inline-grid absolute -bottom-[100%] [z-index:-1]'>
          <motion.img
            animate={{
              scale: [0.7, 1.2],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            src='/standardimages/pulseorange.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default NumbersSpeak;
