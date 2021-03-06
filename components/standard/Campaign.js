import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";
import { useRecoilState } from "recoil";
import { form } from "../../recoil/form";

function Campaign() {
  const [isForm, setIsForm] = useRecoilState(form);

  return (
    <div className='relative overflow-hidden'>
      <div className='-left-10 hidden xl:inline-grid absolute bottom-[40%]  [z-index:-1]'>
        <img src='/standardimages/arrow.png' alt='' className='h-80 w-[8vw] ' />
      </div>
      <div className='right-0 hidden xl:inline-grid absolute -bottom-44 [z-index:-1]'>
        <img
          src='/standardimages/campaignline.png'
          alt=''
          className=' h-[40rem] w-[60vw] '
        />
      </div>

      <div className='mt-10  grid grid-cols-1 md:max-w-[95rem] mx-auto relative md:px-5 py-10'>
        <div className=' mx-auto w-[90%] flex flex-col-reverse xl:flex-row lg:p-14 text-center xl:text-left'>
          <div
            data-aos='fade-right'
            data-aos-easing='ease-in-out'
            className='lg:p-5 lg:pr-5  items-center xl:pt-16 xl:pr-10 flex-1 '
          >
            <h3
              className={`${styles.montserrat} xl:leading-[49px] xl:w-[70%] text-[#020c27] text-xl  md:text-[35px] font-semibold mb-6`}
            >
              Start a campaign with us!
            </h3>
            <p
              className={` ${styles.popins}  text-basetext-[#404b68] md:text-[18px] mb-10 xl:leading-[29px] text-[#404b68]`}
            >
              Simply write us a message to tell us about your upcoming project!
              Our salesperson will contact you as soon as possible and link you
              to one of our committed specialists in order to experience what
              influencer marketing can be like when you work with the finest!
            </p>
            <div className='mx-auto xl:mt-5 xl:ml-6 relative w-fit lg:btnAnimateBefore lg:btnAnimateAfter'>
              <button
                onClick={() => setIsForm(!isForm)}
                className={` ${styles.popins} text-white text-base md:py-5  md:px-5 px-5 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-medium  xl:w-60  rounded-full md:text-[24px]`}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-easing='ease-in-out'
            className='flex-1 '
          >
            <Image
              src='/campaign/pic.png'
              alt=''
              title=''
              width='500'
              height='500'
              priority
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
        <div className='-right-[5%] hidden xl:inline-grid absolute top-0 [z-index:-1]'>
          <motion.img
            animate={{
              scale: [0.7, 1.2],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            src='/standardimages/pulseblue.png'
            alt=''
          />
        </div>
      </div>
      {isForm && <ContactUs />}
    </div>
  );
}

export default Campaign;
