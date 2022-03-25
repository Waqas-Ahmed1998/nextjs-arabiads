import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Middle() {
  return (
    <div
      id='influencer-services'
      className='grid  relative mb-24 grid-cols-1  justify-center lg:grid-cols-2  gap-4 lg:gap-0 px-5 '
    >
      <div className='lg:-left-[10%] 2xl:-left-[17%] hidden xl:inline-grid absolute top-[53%] [z-index:-1]'>
        <motion.img
          animate={{
            scale: [0.7, 1.2],
            opacity: [0, 0.8, 0],
            // rotate: [0, 0, 270, 270, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          src='/standardimages/pulseorange.png'
          alt=''
          // className='  animate-animate-pulse  '
        />
      </div>
      <div className=' lg:col-span-2 flex flex-col lg:flex-row justify-center '>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-10 '>
          <div className='text-center space-y-5 rounded-[36px] mt-5   bg-white p-5 pt-5  relative  pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/influencer-services/image1.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Influencer Marketing Strategies
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins}  text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2  `}
            >
              {" "}
              We develop innovative influencer marketing strategies with
              long-term potential and influencers at their core.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white pt-5  relative p-5 pb-16 flex flex-col items-center justify-center '>
            <Image
              className='object-contain '
              src='/influencer-services/image2.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Influencer Matchmaking
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              For every brand there’s a perfect influencer and we always know
              where to find them. We connect you with influencers who get people
              talking, and acting.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white   pt-5 relative p-5 pb-16 flex flex-col items-center justify-center '>
            <Image
              className='object-contain '
              src='/influencer-services/image3.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Content Strategies
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Our content strategies give influencers the freedom to be
              authentic on the platforms where they have most power. It’s not
              advertising - it’s storytelling.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center '>
            <Image
              className='object-contain '
              src='/influencer-services/image4.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Campaign Management
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Our dedicated team of campaign and influencer managers offers
              hands-on support during the execution of your campaign.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center '>
            <Image
              className='object-contain '
              src='/influencer-services/image5.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Tracking & Measurement
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              We set goal-oriented and data-driven KPIs before the start of
              every campaign. That’s how we guarantee success. We measure
              progress from start to finish and provide you with transparent,
              tangible insights.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/influencer-services/image6.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Social Media Advertising
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Our digital marketing team uses paid media to support your
              influencer marketing campaign, ensuring the best possible results
              for your brand.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/influencer-services/image7.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Production & Content Creation
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              By combining traditional productions with influencers, we are able
              to elevate your content creation to the next level.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/influencer-services/image8.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Legal & Compliance
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Our team of legal experts advice brands and influencers on
              relevant partnership disclosure regulations and ensures our
              influencer contracts cover the full scope of the collaboration.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white  pt-5   relative p-5 pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/influencer-services/image9.png'
              alt=''
              width='300'
              height='180'
              objectFit='contain'
              quality={100}
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              Payment & Transaction Services
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Our finance department takes care of all financial administration
              with influencers.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
        </div>
      </div>
      {
        // <Link href='/influencers'>
        //   <button className='  absolute -bottom-20 justify-self-center text-white text-base md:py-5  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
        //     INFLUENCERS LIST
        //   </button>
        // </Link>
      }
      <div className='absolute -bottom-20 mx-auto flex justify-center w-full '>
        <div className=' mx-auto xl:mx-0 relative [z-index:1] after:[z-index:-1] before:[z-index:-1]   w-fit lg:btnAnimateBefore  lg:btnAnimateAfter'>
          <Link href='/influencers'>
            <button
              className={` ${styles.popins} text-white text-base  md:inline-block bg-[linear-gradient(#fdc66e,#ff805e)]   md:py-5  md:px-12 px-4 py-2 font-medium    rounded-full md:text-[20px]`}
            >
              INFLUENCERS LIST
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Middle;
