import React, { Fragment } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
// import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
function Card1() {
  return (
    <Fragment>
      {
        <div className=' hidden bg-no-repeat   xl:inline-grid absolute services-top w-full   '></div>
      }

      <div className='relative w-[90%] mx-auto '>
        {
          // <img
          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/service-page-header-bg.png'
          //   alt=''
          //   className='hidden xl:inline-grid  w-full '
          // />
        }
        <div className='hidden  h-[35rem] xl:inline-grid w-full'>
          <Image
            src='/service/Scard1.png'
            alt=''
            title=''
            width='100%'
            height='100%'
            layout='responsive'
            priority
            // objectFit='cover'
          />
        </div>
        <div className='xl:absolute flex  xl:top-[20%]  justify-center  lg:w-full '>
          <div className='xl:w-[80%] space-y-5 text-center'>
            <h2 className=' heading-primary heading-blue xl:text-[#006AFF] xl:text-[40px]  '>
              WHAT WE DO...?
            </h2>
            <p className='words-gray xl:text-[17px] xl:leading-[32px] text-[#404b68]'>
              Arabia E-Advertising is a MENA gaming influencer agency that
              manages influencer marketing campaigns for a variety of clients
              and represents some of the most popular Twitch, YouTube, and
              gaming content creators.
            </p>
            <p className='words-gray xl:text-[17px] xl:leading-[32px]  text-[#404b68]'>
              We&apos;re always looking for top-tier and up-and-coming
              influencers to represent. Arabia E-Advertising allows you to
              concentrate on growing your brand and community while we find
              commercial possibilities for you and negotiate the finest terms to
              ensure that you are treated properly. Our esports knowledge is
              unrivaled, from finding you endorsements and sponsorships to
              offering one-on-one advice.
            </p>

            <a href='' className='mt-10 inline-block'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-[5rem]  animate-bounce text-blue-500 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
                />
              </svg>
              {
                // <img
                //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/scroll-arrow.svg'
                //   alt=''
                //   className='animate-bounce w-7 h-7 mx-auto '
                // />
              }
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card1;
