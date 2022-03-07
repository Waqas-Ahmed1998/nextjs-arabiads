import React, { Fragment } from 'react';

function Scard3() {
  return (
    <Fragment>
      {
        <div className='hidden absolute  -left-[25%] w-[2650px] h-[200vh]  service-mid bg-no-repeat   xl:inline-grid '></div>
      }
      <img
        src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/commentary-bg.png'
        alt=''
        className='hidden xl:inline-grid  w-full '
      />
      <div className='hidden xl:inline-grid absolute   bottom-0 -right-10'>
        <img
          className=' animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/blue-square.png'
          alt=''
        />
      </div>
      <div className='hidden xl:inline-grid absolute top-20 left-[45%] '>
        <img
          className=' animate-spin-slow '
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/plus-blue.png'
          alt=''
        />
      </div>
      <div className=' h-[80%] xl:absolute flex top-[10%]  justify-center  xl:w-full '>
        <div className='xl:w-[100%] w-[90%] xl:ml-5 flex flex-col xl:flex-row space-y-5 text-center items-center xl:text-justify '>
          <div className='flex-1  '>
            <img
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/commentary-people.png'
              alt=''
            />
          </div>
          <div className=' flex-1 xl:py-5 space-y-5 xl:pr-3'>
            <h2 className=' heading-secondary xl:w-[80%]  '>
              Esports Specialized Consultancy, Talents, Events in MENA
            </h2>
            <p className=' text-sm xl:text-base tracking-wide'>
              Gaming Influencers can help you reach new audiences. To maximize
              your outcomes, we work across the full pyramid of influence, from
              the most powerful profiles to micro influencers, including key
              opinion leaders, each with a specific goal in mind. The
              multiplicity of content provided by influencers with a power of
              prescribing driven by proximity to their audience is multiplied
              tenfold by activating smaller talents.
            </p>
            <p className=' text-sm xl:text-base tracking-wide'>
              Whether you&apos;re looking for opportunities or solutions for
              your business, and regardless of your current status, our esports
              consultancy agency is ready to provide you with all the analytics
              you need, as well as a roster of talent for all of your upcoming
              esports events.
            </p>
            <p className=' text-sm xl:text-base tracking-wide'>
              Our experienced play by play caster will level up your events,
              while our MCs & hosts professionally pilot the show. A dream team
              of color commentators is guaranteed to fire up the audience,
              ensuring all the engagement you need. Don&apos;t take our word for
              it, our results speak for themselves. We&apos;re more than
              confident in our ability to upgrade your business in everything
              related to esports, which is why choosing us is the first step
              towards your goal.
            </p>
            <button className='btn-orange btn-blue'>Learn More</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Scard3;
