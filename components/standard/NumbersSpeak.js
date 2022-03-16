import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function NumbersSpeak() {
  return (
    <div className='mt-10 grid grid-cols-1 md:max-w-[95rem] mx-auto relative px-5 py-10'>
      <div className='mx-auto lg:w-[70%] text-center space-y-5 xl:space-y-10'>
        <h3
          className={`${styles.montserrat} text-[#404040]  text-center text-lg  md:text-2xl xl:text-[40px]  [font-weight:700]`}
        >
          LET THE NUMBERS SPEAK
        </h3>
        <p className='text-base xl:text-[22px] xl:leading-[35px]  text-[#040e29] '>
          We have worked with over 40 international known brands, delivering an
          influencer pool of over 70 influencers, and have created a stunning 1
          billion Impressions to this day, with over 30 campaigns signed. Our
          community, as well as our partnerships with prominent businesses, is
          continuously expanding.
        </p>
      </div>
      <div className=' relative mt-10 space-y-10 lg:space-y-0 flex flex-col lg:flex-row gap-2 md:gap-5 items-center justify-center text-center'>
        <div
          className={`flex  justify-evenly flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[20px] rounded-[30px] w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            200+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Campaigns
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>

        <div
          className={`flex justify-evenly flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[20px] rounded-[30px] w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            40+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Brands
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex justify-evenly flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[20px] rounded-[30px] w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            70+
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Exclusive Influencers
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex justify-evenly flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[20px] rounded-[30px] w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            50M
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Monthly Impressions
          </p>
          <div className='absolute left-[12%] -bottom-4 [z-index:-1]  rounded-[35px] w-[75%] md:w-[75%]  justify-self-center bg-[rgba(255,255,255,0.94)] h-12'></div>
        </div>
        <div
          className={`flex justify-evenly flex-col ${styles.cardShadow} relative bg-white pt-[30px] pb-[20px] rounded-[30px] w-56 md:h-48 h-28`}
        >
          <h3
            className={`${styles.montserrat} text-[#316AD8]  text-center text-xl md:text-[40px] tracking-wide [font-weight:700]`}
          >
            27
          </h3>
          <div className='w-[20%] h-[0.1rem] bg-[#FFA408] mx-auto'></div>

          <p
            className={`${styles.popins} text-[#404040] text-xl md:text-[25px] `}
          >
            Employees
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
