import React from 'react';

function Scard2() {
  return (
    <>
      {' '}
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/gaming-bg.png'
        alt=''
        className='hidden xl:inline-grid  w-full '
      />
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] xl:ml-20 flex flex-col-reverse xl:flex-row space-y-5 text-center xl:text-justify '>
          <div className=' flex-1 xl:py-16 space-y-5'>
            <h2 className=' heading-primary xl:text-white '>
              Reach Millions Through Gaming Influencers
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
            <button className='btn-orange'>Learn More</button>
          </div>
          <div className='flex-1  '>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/arabic-influencers.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard2;
