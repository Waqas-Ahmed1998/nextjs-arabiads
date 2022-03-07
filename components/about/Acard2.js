import React from 'react';
import styles from '../../styles/Home.module.css';

function Acard2() {
  return (
    <div className='flex flex-col xl:flex-row-reverse text-center xl:text-left  items-center p-5 xl:p-0'>
      <div className=' flex-1 xl:p-10  '>
        <h3 className='font-bold md:text-xl text-[#365E77] xl:text-4xl'>
          BRANDS TRUST US...
        </h3>
        <p className='mt-5 font-semibold text-sm md:text-xl popins text-[#365E77]'>
          We collaborate with prominent multinational brands and businesses to
          develop and implement cutting-edge influencer marketing strategies and
          campaigns. We specialize in developing and executing bespoke
          influencer marketing plans based on particular goals.
        </p>
        <p
          className={` ${styles.popins} mt-10 text-sm md:text-lg text-gray-600 `}
        >
          Arabia E-Advertising specializes in the development and implementation
          of effective tactics, ranging from brand recognition to
          conversion-driven campaigns.
        </p>
      </div>
      <div className='flex-1'>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/about-img-2.png'
          alt=''
          className=''
        />
      </div>
    </div>
  );
}

export default Acard2;
