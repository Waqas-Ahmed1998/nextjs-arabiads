import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Campaign2() {
  return (
    <div className='overflow-hidden'>
      <div className='-left-10 hidden xl:inline-grid absolute  [z-index:-1]'>
        <img src='/standardimages/arrow.png' alt='' className='h-80 w-[8vw] ' />
      </div>
      <div className='right-0 hidden xl:inline-grid absolute -bottom-44 [z-index:-1]'>
        <img
          src='/standardimages/campaignline.png'
          alt=''
          className=' h-[40rem] w-[60vw] '
        />
      </div>
      {
        // <div className='  hidden absolute bottom-0 -right-[30%] xl:inline-grid h-[35rem]  campaign-line  bg-cover w-full  bg-no-repeat bg-center '></div>
        // <div className='hidden xl:inline-grid  absolute h-80 w-80 -left-36 z-10  bg-arrow bg-no-repeat bg-center '></div>
      }
      <div className='mt-10 grid grid-cols-1 mx-auto relative px-5 py-10'>
        <div className=' mx-auto w-[100%] flex flex-col-reverse xl:flex-row lg:p-14 text-center xl:text-justify'>
          <div className='p-5 pr-5  flex-1 space-y-5'>
            <h3 className='text-xl py-8  md:text-[35px] font-semibold'>
              Start a campaign with us!
            </h3>
            <p className='note'>
              Simply write us a message to tell us about your upcoming project!
              Our salesperson will contact you as soon as possible and link you
              to one of our committed specialists in order to experience what
              influencer marketing can be like when you work with the finest!
            </p>
            <Link href='/'>
              <button className=' text-white text-base md:py-4  md:px-6 px-4 py-2 md:inline-grid bg-[linear-gradient(#fdc66e,#ff805e)]   font-semibold  xl:w-60  rounded-full md:text-[20px]'>
                REACH OUT
              </button>
            </Link>
          </div>
          <div className='flex-1 '>
            {
              // <img
              //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/camgaign-img.png'
              //   alt=''
              //   className='lg:w-[80%] mx-auto'
              // />
            }
            <Image
              src='/campaign/pic.png'
              alt=''
              title=''
              width='500'
              height='500'
              // layout='responsive'
              priority
              objectFit='contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign2;
