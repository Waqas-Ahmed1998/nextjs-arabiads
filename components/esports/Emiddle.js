import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Emiddle() {
  return (
    <div className='grid my-12 relative mb-24 grid-cols-1  justify-center lg:grid-cols-2 gap-4 lg:gap-0 px-5 '>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 '>
          <div className='text-center space-y-5 rounded-[36px] mt-5  bg-white lg:w-[35rem] p-5 pt-[5px]  relative  pb-16 flex flex-col items-center  '>
            <Image
              className='object-contain '
              src='/esports-services/middle1.png'
              alt=''
              width='300'
              height='200'
              objectFit='contain'
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              TALENT AGENCY
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins}  text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2  `}
            >
              {" "}
              Arabia E-Advertising can supply you with the best esports talent,
              including hosts, presenters, commentators, and personalities, for
              your shows and events. We also have experienced esports production
              team members on our books.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white lg:w-[35rem] pt-[5px]   relative p-5 pb-16 flex flex-col items-center justify-center '>
            <Image
              className='object-contain '
              src='/esports-services/middle2.png'
              alt=''
              width='300'
              height='200'
              objectFit='contain'
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              EVENTS
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Take use of Arabia E-expertise Advertising&apos;s on how to build
              tournaments (such as qualifiers, regional qualifiers, brackets,
              ladders, and leagues) and much more if you&apos;re planning a
              one-off or long-term esports event with the help of our sister
              brands such as ESME and more.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white lg:w-[35rem]   pt-[5px] relative p-5 pb-16 flex flex-col items-center justify-center '>
            <Image
              className='object-contain '
              src='/esports-services/middle3.png'
              alt=''
              width='300'
              height='200'
              objectFit='contain'
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              TV & ONLINE BROADCASTING
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Arabia E-Advertising has a wealth of experience in all aspects of
              broadcasting, having assisted in the production of over 100 shows
              for online broadcast via IPTV or Twitch, as well as traditional
              satellite or cable television broadcast on channels such as Sky
              Sports, Sky One, ESPN, Eurosport, and DirecTV.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
          <div className='text-center space-y-5 rounded-[36px]  mt-5 bg-white lg:w-[35rem] pt-[5px]   relative p-5 pb-16 flex flex-col items-center justify-center '>
            <Image
              className='object-contain '
              src='/esports-services/middle4.png'
              alt=''
              width='300'
              height='200'
              objectFit='contain'
            />
            <h2
              className={` ${styles.montserrat} text-base md:text-[22px] font-bold text-[#2b4474]`}
            >
              ESPORTS CONSULTANCY
            </h2>
            <div className='w-8 h-[2px] bg-[#FFAA47]'></div>
            <p
              className={`${styles.popins} text-sm text-[#505673] lg:text-[18px] xl:leading-[29px] px-2 `}
            >
              {" "}
              Arabia E-Advertising is your strategic partner for growing
              business around eSports as an independent consultant. We have the
              knowledge, insights, and professional network to assist you with
              strategic planning, project management, and execution with our
              eSports project expertise.
            </p>
            <div className='absolute -bottom-4 bg-[#009CDA] w-[90%] rounded-b-[36px] h-8 [z-index:-1]'></div>
          </div>
        </div>
      </div>

      <Link href='/talents'>
        <button className='  absolute -bottom-20 justify-self-center text-white text-base md:py-5  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
          CASTERS LIST
        </button>
      </Link>
    </div>
  );
}

export default Emiddle;
