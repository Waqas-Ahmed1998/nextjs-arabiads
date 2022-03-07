import React from 'react';

function Icard1() {
  return (
    <>
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/content-box-4.png'
        alt=''
        className='hidden xl:inline-grid  w-full '
      />
      <div className='hidden xl:inline-grid absolute  [z-index:-1]  -top-10 -left-20'>
        <img
          className=' animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/blue-square.png'
          alt=''
        />
      </div>
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] xl:ml-20 flex flex-col-reverse xl:flex-row space-y-5 items-center text-center xl:text-justify '>
          <div className=' flex-1 xl:py-5 space-y-5'>
            <h2 className=' heading-primary xl:text-white '>
              Esports Talents and{' '}
              <span className='text-black'> Advertising Services</span>
            </h2>
            <p className='xl:text-white text-sm xl:text-xl tracking-wide'>
              Gaming Influencers can help you reach new audiences. To maximize
              your outcomes, we work across the full pyramid of influence, from
              the most powerful profiles to micro influencers, including key
              opinion leaders, each with a specific goal in mind. The
              multiplicity of content provided by influencers with a power of
              prescribing driven by proximity to their audience is multiplied
              tenfold by activating smaller talents.
            </p>
            <button className='btn-orange btn-blue'>Learn More</button>
          </div>
          <div className='flex-1  '>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/escort-img.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Icard1;
