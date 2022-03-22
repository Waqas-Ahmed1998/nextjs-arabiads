import { useEffect, useState } from "react";
import EventCard from "../../components/case/EventCard";
import Campaign2 from "../../components/standard/Campaign2";
import NumbersSpeak from "../../components/standard/NumbersSpeak";
import Plateforms from "../../components/standard/Plateforms";
import Head from "next/head";
import { motion } from "framer-motion";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { MoonLoader } from "react-spinners";
import AOS from "aos";

function Case() {
  let [eventcard, setEventCard] = useState([]);

  useEffect(() => {
    // setEventCard(user);

    onSnapshot(collection(db, "studies"), (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      setEventCard(users);
    });

    return () => {
      // setEventCard([]);
    };
  }, []);
  return (
    <div className='relative overflow-hidden xl:mt-20  '>
      <Head>
        <title>Case studies-Arabiads</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img src='/case/caseline.png' alt='' className='h-screen w-[100vw] ' />
      </div>
      <div className='right-0 hidden xl:inline-grid absolute top-[15%] [z-index:-1]'>
        <img
          src='/standardimages/casemiddle.png'
          alt=''
          className='h-screen w-[100vw] '
        />
      </div>
      <div className='max-w-screen-xl mx-auto  '>
        <div className='flex small:flex-col md:flex-col my-10   xl:mb-20  md:flex-nowrap  md:space-y-5  md:justify-around justify-center  '>
          <div className='flex mid:justify-around'>
            <img
              src='/case/sony.png'
              alt=''
              className=' m-2 small:w-12  iphone6:w-12    md:w-auto object-contain '
            />
            <img
              src='/case/rocket.png'
              alt=''
              className='m-2 small:w-12 iphone6:w-12 mid:w-16 md:w-auto object-contain '
            />
            <img
              src='/case/spotify.png'
              alt=''
              className=' m-2 small:w-12 iphone6:w-14 mid:w-16   md:w-auto object-contain'
            />

            <img
              src='/case/kfc.png'
              alt=''
              className=' m-2 small:w-12 iphone6:w-16 mid:w-16   md:w-auto object-contain '
            />
            <img
              src='/case/blast.png'
              alt=''
              className=' m-2 small:w-12 iphone6:w-16 mid:w-16  md:w-auto object-contain'
            />
          </div>

          <div className='flex justify-center  md:space-x-5'>
            <img
              src='/case/redbull.png'
              alt=''
              className=' m-2  small:w-20 iphone6:w-20 mid:w-20 md:w-auto object-contain'
            />

            <img
              src='/case/anghami.png'
              alt=''
              className='m-2 small:w-20 iphone6:w-20 mid:w-20 md:w-auto object-contain'
            />
          </div>
          {
            // <img
            //   src='/case/blast.png'
            //   alt=''
            //   className=' m-2 small:w-16 md:w-auto object-contain'
            // />
            // <img
            //   src='/case/anghami.png'
            //   alt=''
            //   className=' m-2 small:w-16 md:w-auto object-contain'
            // />
          }
        </div>
        <div className='2xl:left-[5%] xl:left-[0] hidden xl:inline-grid absolute top-[20%] [z-index:-1]'>
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
        <div className='right-[5%]  hidden xl:inline-grid absolute top-[40%] [z-index:-1]'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 md:mt-10'>
          {eventcard.map((data, index) => (
            <EventCard key={data.id} event={data} index={index} />
          ))}
          {!eventcard.length && (
            <div className='mb-24  p-24 col-span-2 flex justify-center   '>
              {" "}
              <MoonLoader color={"black"} size='30px' />{" "}
            </div>
          )}
        </div>

        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}
export default Case;
