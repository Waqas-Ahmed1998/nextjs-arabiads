import React from 'react';

function NumbersSpeak() {
  return (
    <div className='mt-10 grid grid-cols-1 md:max-w-[95rem] mx-auto relative px-5 py-10'>
      <div className='mx-auto lg:w-[70%] text-center space-y-5'>
        <h3 className='text-center text-lg md:text-4xl tracking-wide font-bold'>
          LET THE NUMBERS SPEAK
        </h3>
        <p className='text-base md:text-xl tracking-wide text-gray-600 '>
          We have worked with over 40 international known brands, delivering an
          influencer pool of over 70 influencers, and have created a stunning 1
          billion Impressions to this day, with over 30 campaigns signed. Our
          community, as well as our partnerships with prominent businesses, is
          continuously expanding.
        </p>
      </div>
      <div className=' mt-10 flex flex-col lg:flex-row gap-2 md:gap-5 items-center justify-center text-center'>
        <div className=' card-shadow relative bg-white p-5 md:p-8 rounded-2xl w-44 md:h-36 h-28'>
          <h3 className='text-base md:text-2xl text-blue-400 font-bold'>
            200+
          </h3>

          <p className='text-base md:text-xl'>Campaigns</p>
          <div className='absolute -bottom-2 [z-index:-1] border-b rounded-b-xl w-[75%] md:w-[65%]  justify-self-center bg-gray-200 h-5'></div>
        </div>
        <div className='card-shadow relative bg-white p-5 md:p-8 rounded-2xl w-44 md:h-36 h-28'>
          <h3 className='text-base md:text-2xl text-blue-400 font-bold'>40+</h3>

          <p className='text-base md:text-xl'>Brands</p>
          <div className='absolute -bottom-2 [z-index:-1] border-b rounded-b-xl w-[75%] md:w-[65%] justify-self-center bg-gray-200 h-5'></div>
        </div>
        <div className='card-shadow relative bg-white p-5 md:p-8 rounded-2xl w-44 md:h-36 h-28'>
          <h3 className='text-base md:text-2xl text-blue-400 font-bold'>70+</h3>

          <p className='text-base md:text-xl first-line:rounded-2xl'>
            Exclusive Influencers
          </p>
          <div className='absolute -bottom-2 [z-index:-1] border-b rounded-b-xl w-[75%] md:w-[65%]  justify-self-center bg-gray-200 h-5'></div>
        </div>
        <div className='relative card-shadow bg-white p-5 md:p-8 rounded-2xl w-44 md:h-36 h-28'>
          <h3 className='text-base md:text-2xl text-blue-400 font-bold'>50M</h3>

          <p className='text-base md:text-xl'>Monthly Impressions </p>
          <div className='absolute -bottom-2 [z-index:-1] border-b rounded-b-xl w-[75%] md:w-[65%] justify-self-center bg-gray-200 h-5'></div>
        </div>
        <div className='relative card-shadow bg-white p-5 md:p-8 rounded-2xl w-44 md:h-36 h-28'>
          <h3 className='text-base md:text-2xl text-blue-400 font-bold'>27</h3>

          <p className='text-base md:text-xl'>Employees </p>
          <div className='absolute -bottom-2 [z-index:-1] border-b rounded-b-xl w-[75%] md:w-[65%]  justify-self-center bg-gray-200 h-5'></div>
        </div>
      </div>
    </div>
  );
}

export default NumbersSpeak;
