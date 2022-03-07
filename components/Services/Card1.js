import React, { Fragment } from 'react';

function Card1() {
  return (
    <Fragment>
      {
        <div className=' hidden bg-no-repeat   xl:inline-grid absolute services-top w-full   '></div>
      }

      <div className='relative w-[90%] mx-auto '>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/service-page-header-bg.png'
          alt=''
          className='hidden xl:inline-grid  w-full '
        />
        <div className='xl:absolute flex  xl:top-[20%]  justify-center  lg:w-full '>
          <div className='xl:w-[80%] space-y-5 text-center'>
            <h2 className=' heading-primary heading-blue  '>WHAT WE DO...?</h2>
            <p className='words-gray tracking-wide'>
              Arabia E-Advertising is a MENA gaming influencer agency that
              manages influencer marketing campaigns for a variety of clients
              and represents some of the most popular Twitch, YouTube, and
              gaming content creators.
            </p>
            <p className='words-gray tracking-wide'>
              We&apos;re always looking for top-tier and up-and-coming
              influencers to represent. Arabia E-Advertising allows you to
              concentrate on growing your brand and community while we find
              commercial possibilities for you and negotiate the finest terms to
              ensure that you are treated properly. Our esports knowledge is
              unrivaled, from finding you endorsements and sponsorships to
              offering one-on-one advice.
            </p>
            <a href='' className='mt-10 inline-block'>
              {' '}
              <img
                src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/scroll-arrow.svg'
                alt=''
                className='animate-bounce w-7 h-7 mx-auto '
              />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card1;
