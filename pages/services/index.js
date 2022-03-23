import React from "react";
import Card1 from "../../components/Services/Card1";
import Scard2 from "../../components/Services/Scard2";
import Scard3 from "../../components/Services/Scard3";
import Scard4 from "../../components/Services/Scard4";
import styles from "../../styles/Home.module.css";
import NumbersSpeak from "../../components/standard/NumbersSpeak";
import Plateforms from "../../components/standard/Plateforms";
import Campaign2 from "../../components/standard/Campaign2";
import Head from "next/head";

function Services() {
  return (
    <div className='relative overflow-hidden xl:overflow-visible'>
      <Head>
        <title>Services-Arabiads</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='right-0  hidden xl:inline-grid absolute -top-[2%] [z-index:-1]'>
        <img
          src='/standardimages/serviceTop.png'
          alt=''
          className='  h-[45rem] w-[100vw] '
        />
      </div>

      <div className='right-0  hidden xl:inline-grid absolute top-[36%] [z-index:-1]'>
        <img
          src='/standardimages/servicemiddle.png'
          alt=''
          className='  h-[75rem] w-[100vw]  '
        />
      </div>
      {
        // <img
        //   src='/standardimages/servicemiddle.png'
        //   alt=''
        //   className='hidden xl:inline-grid absolute object-cover xl:top-[40%] scale-[1.5] xl:-right-[20%]  2xl:scale-[1.5] 2xl:top-[35%] '
        // />
      }
      <div className='max-w-[1400px] mx-auto   '>
        <Card1 />
        <div className='  card-width mt-10'>
          <Scard2 />
        </div>
        <div className='w-[95%] relative '>
          <Scard3 />
        </div>
        <div className='card-width mt-10 '>
          <Scard4 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default Services;
