import Head from "next/head";

import Card1 from "../components/Home/Card1";
import Card2 from "../components/Home/Card2";
import Card3 from "../components/Home/Card3";
import Card4 from "../components/Home/Card4";
import Card5 from "../components/Home/Card5";
import NumbersSpeak from "../components/standard/NumbersSpeak";
import Plateforms from "../components/standard/Plateforms";
import Campaign from "../components/standard/Campaign";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      locale,
      // Will be passed to the page component as props
    },
  };
}
import { motion } from "framer-motion";

export default function Home(props) {
  console.log(props.locale);
  return (
    <div className='overflow-hidden relative xl:overflow-visible'>
      <Head>
        <title>Arabiads</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img
          src='/standardimages/homeTopline.png'
          alt=''
          className='h-[130rem] w-[100vw] '
        />
      </div>
      {
        // <div className=' flex justify-center xl:h-screen 2xl:h-[93vh] 4xl:h-[75vh] md:max-w-[95rem] 3xl:h-[85vh]  lg:md:max-w-[1440px] mx-auto '>
        //   <Card1 />
        // </div>
      }

      <div className=' hidden left-0 xl:top-[53.5%] 2xl:top-[54%]  xl:block absolute  [z-index:-1]'>
        <img
          src='/standardimages/card5line.png'
          alt=''
          className='   w-[100vw]  '
        />
      </div>
      <div className='max-w-[1400px] xl:mx-auto      '>
        <div className='  '>
          <Card1 />
        </div>
        <div className=' xl:mt-20 '>
          <Card2 />
        </div>
        <div className='w-[100%] relative mx-auto  mt-24   '>
          <Card3 />
        </div>
        <div className=' relative xl:mt-20  '>
          <Card4 />
          {
            <div className='  xl:-right-[5%] 2xl:-right-[10%] hidden xl:inline-grid absolute top-0 [z-index:-1]'>
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
          }
        </div>
        <div className=' xl:mt-28 '>
          <Card5 />
        </div>

        <div className='xl:mt-20'>
          <NumbersSpeak />
          <Plateforms />
        </div>
      </div>
      <Campaign />
    </div>
  );
}
