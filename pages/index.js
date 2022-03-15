import Head from 'next/head';
import Image from 'next/image';
import Card1 from '../components/Home/Card1';
import Card2 from '../components/Home/Card2';
import Card3 from '../components/Home/Card3';
import Card4 from '../components/Home/Card4';
import Card5 from '../components/Home/Card5';
import NumbersSpeak from '../components/standard/NumbersSpeak';
import Plateforms from '../components/standard/Plateforms';
import Campaign from '../components/standard/Campaign';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
// import { collection, onSnapshot, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useSetRecoilState } from 'recoil';
// import { adminUsers } from '../recoil/adminUsers';
// import { useEffect } from 'react';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Arabiads</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img
          src='/standardimages/homeTopline.png'
          alt=''
          className='h-[130rem] w-[100vw] '
        />
      </div>
      {
        // <div
        //   className={` hidden absolute  -left-[0%] w-[2650px] h-[200vh]  ${styles.serviceMid} bg-no-repeat   xl:inline-grid `}
        // ></div>
      }

      <div className='flex justify-center md:h-screen 2xl:h-[93vh] md:max-w-[95rem] lg:md:max-w-[1440px] mx-auto '>
        <Card1 />
      </div>
      <div className='flex justify-center xl:mt-20 2xl:mt-0 lg:h-screen 2xl:h-[93vh]  lg:max-w-[95rem] mx-auto relative'>
        <Card2 />
      </div>
      <div className='mt-10 lg:mt-28 xl:mt-20 2xl:mt-0 flex justify-center xl:h-[80vh] 2xl:h-[75vh]  lg:max-w-[95rem] mx-auto relative'>
        <Card3 />
      </div>
      <div className=' xl:mt-20 2xl:mt-0 grid grid-cols-1 md:max-w-[95rem] mx-auto relative'>
        <Card4 />
        <div className='right-20 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
          <motion.img
            animate={{
              scale: [0.7, 1.2],
              opacity: [0, 0.8, 0],
              // rotate: [0, 0, 270, 270, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            src='/standardimages/pulseblue.png'
            alt=''
            // className='  animate-animate-pulse  '
          />
        </div>
      </div>

      <div className={`md:my-40 relative  bg-no-repeat bg-center mx-auto`}>
        <div className='right-0 hidden xl:inline-grid absolute -top-20  [z-index:-1]'>
          <img
            src='/standardimages/card5line.png'
            alt=''
            className='w-[100vw] '
          />
        </div>
        <Card5 />
      </div>

      <NumbersSpeak />
      <Plateforms />
      <Campaign />
    </div>
  );
}
