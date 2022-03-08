import Link from 'next/link';
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
              introduce you to some of the world&apos;s most well-known
              entertainment and technology firms, raising your profile and
              carefully coaching you to become more than an influencer, but a
              brand ambassador with a continuous source of income .
            </p>
            <Link href='/'>
              <button className=' text-white text-base  md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)] md:py-4  md:px-6 px-4 py-2  font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                REACH OUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scard4;
