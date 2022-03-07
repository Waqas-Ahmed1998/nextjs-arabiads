import React from 'react';
import styles from '../../styles/Home.module.css';
function Plateforms() {
  return (
    <div className='px-5 my-20 mx-auto lg:w-[70%] text-center space-y-10'>
      <h3
        className={`${styles.montserrat} text-[#404040]  text-center text-lg md:text-[40px] tracking-wide [font-weight:700]`}
      >
        OUR PLATFORMS
      </h3>
      <p className='text-base md:text-xl tracking-wide text-gray-600 '>
        With a complementarity between micro and macro-influencers and a
        strategic target on each platform to hit the right target population you
        wish; we can fulfill your social media goals and establish a community
        instead of just take a typical UA approach.
      </p>
    </div>
  );
}

export default Plateforms;
