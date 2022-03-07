import React from 'react';

function Card2() {
  return (
    <div className='md:my-0 xl:my-40 relative bg-contain bg-no-repeat xl:inline-grid lg:w-[75%]  '>
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/gaming-bg.png'
        alt=''
        className='hidden xl:inline-grid absolute top-0 md:w-[100%]'
      />
      <div className='hidden xl:inline-grid absolute [z-index:-1] -top-5 -left-2'>
        <img
          className=' animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/orange-square.png'
          alt=''
        />
      </div>
      <div className='hidden xl:inline-grid absolute top-5 right-20'>
        <img
          className=' animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/gaming-plus-icon.png'
          alt=''
        />
      </div>

      <div className='lg:absolute  top-0 xl:top-4 flex flex-col-reverse xl:flex-row xl:pt-10 xl:ml-20 text-center xl:text-left'>
        <div className='lg:flex-1 lg:space-y-5 px-5 space-y-5'>
          <h2 className='text-xl xl:text-4xl text-[#167EE0] xl:text-white font-semibold pt-3 xl:leading-tight'>
            One of MENA’s Leading Agency for{' '}
            <span className='text-black'>Influencer Marketing</span>
          </h2>
          <p className='text-base md:text-lg text-gray-600 xl:text-gray-200 tracking-wide'>
            We are a KOL Agency MENA that assures you that our group of experts
            - which includes digital marketing specialists, campaign managers,
            and media buying specialists - will walk your firm step by step to
            achieve its goals and business objectives. This is made possible by
            identifying KPIs, goals, and other needs that may have slipped under
            your radar, we then pass it along to our growing network of
            influencers to implement, track and report results in an honest and
            transparent way that answer all of your burning inquiries.
          </p>
          <button className=' text-white hidden xl:inline-grid btn-contact  py-4 bg-[#FEA366]   w-60  rounded-full text-2xl'>
            What WE DO
          </button>
          <button className=' text-white xl:hidden  px-10 py-3 bg-[#FEA366]    rounded-full text-xl'>
            What WE DO
          </button>
        </div>
        <div className='flex-1 px-6 justify-center mx-auto '>
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/11/MENA-INFLUENCERS.png'
            alt=''
            className='w-[300px] xl:w-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default Card2;
