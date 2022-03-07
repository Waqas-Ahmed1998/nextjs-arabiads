import React from 'react';

function Scard4() {
  return (
    <>
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/management-2-bg-1.png'
        alt=''
        className='hidden xl:inline-grid  w-full '
      />
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] xl:ml-0 flex flex-col xl:flex-row space-y-5 text-center xl:text-justify '>
          <div className='flex-1  '>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/m-s-2-img.png'
              alt=''
              className='w-[90%]'
            />
          </div>
          <div className=' flex-1 xl:py-0 space-y-5 '>
            <h2 className=' heading-primary '>
              Talent <span className='heading-blue'>Management</span>
            </h2>
            <p className='text-sm xl:text-base tracking-wide xl:pr-5'>
              Are you an influencer looking to broaden your reach and
              collaborate with others? We are here to assist you. Our staff will
              introduce you to some of the world's most well-known entertainment
              and technology firms, raising your profile and carefully coaching
              you to become more than an influencer, but a brand ambassador with
              a continuous source of income .
            </p>
            <button className='btn-orange'>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard4;
