import Image from 'next/image';
import React from 'react';

function Card1() {
  return (
    <div className=' relative  xl:inline-grid lg:w-[75%]  '>
      {
        //   <img
        //   className='hidden xl:inline-grid absolute top-0 md:w-[100%]'
        //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/header-bg.png'
        //   alt=''
        // />
      }
      <div className='hidden xl:inline-grid absolute -top-5 md:w-[100%] h-[100%]'>
        {
          //  <Image
          //      className='hidden bg-contain  xl:inline-grid absolute top-0 '
          //      src={'/home/card1.png'}
          //      alt=''
          //      width={600}
          //      height={600}
          //      quality={100}
          //      priority
          //    />
        }
        <Image
          className='hidden bg-contain  xl:inline-grid absolute top-0 '
          src={'/home/card1.png'}
          alt=''
          width='100%'
          height='100%'
          quality={100}
          layout='responsive'
          priority
        />
      </div>
      <img
        className='xl:hidden w-full h-[90%]'
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/header-bg-mobile.jpg'
        alt=''
      />
      <div className='absolute  h-full xl:h-auto top-0  w-full flex flex-col justify-center text-center space-y-2 md:space-y-10 '>
        <h2 className='text-xl md:text-[44px] text-white font-semibold pt-3 md:leading-snug'>
          Gaming & Esports Talent Agency
        </h2>
        <h3 className='text-base md:text-[30px] text-white'>
          #Connect Your Brand With Arabic Millennials.
        </h3>
        <div className='text-sm gap-2 md:text-lg font-bold tracking-wide text-[#FFCE51] px-2 flex justify-center md:gap-5'>
          <div className='space-x-1 md:space-x-3 flex items-center'>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/06/user.png'
              alt=''
              className='w-8'
            />
            <h3 className='text-base md:text-lg'>70 + Talents</h3>
          </div>
          <div className='space-x-3 flex items-center'>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/06/earth-globe.png'
              alt=''
              className='w-8'
            />
            <h3 className=''>100M Total Reach</h3>
          </div>
        </div>
        <div className=' md:space-x-5 px-2 md:px-5 flex '>
          <a href='https://www.pubgmobile.com/ar/home.shtml'>
            <img
              className='w-30'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_01.png'
              alt=''
            />
          </a>
          <a href='https://www.ea.com/'>
            <img
              className='w-30'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_02.png'
              alt=''
            />
          </a>
          <a href='https://www.riotgames.com/en'>
            <img
              className='w-30'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_03.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              className='https://www.moonton.com/'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/logos_04.png'
              alt=''
            />
          </a>
          <a href='https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent'>
            <img
              className='w-30'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/11/redmagic-phone.png'
              alt=''
            />
          </a>
          <a href='https://global.redmagic.gg/'>
            <img
              className='w-30'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/11/and-much-more.png'
              alt=''
            />
          </a>
        </div>
      </div>
      {
        //   <img
        //   className='hidden xl:inline-grid md:w-[98%] absolute '
        //   src='https://influencers.ar-ad.com/wp-content/uploads/2022/02/arabic-gamers.png'
        //   alt=''
        // />
      }
      <div className='hidden h-[100%] xl:inline-grid md:w-[98%] absolute '>
        <Image
          className='hidden xl:inline-grid md:w-[98%] absolute '
          src='/home/home1.png'
          alt=''
          priority
          width='100%'
          height='100%'
          layout='responsive'
          quality={100}
        />
      </div>
    </div>
  );
}

export default Card1;
