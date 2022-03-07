import React from 'react';
import Card1 from '../../components/Services/Card1';
import Scard2 from '../../components/Services/Scard2';
import Scard3 from '../../components/Services/Scard3';
import Scard4 from '../../components/Services/Scard4';
import styles from '../../styles/Home.module.css';
import NumbersSpeak from '../../components/standard/NumbersSpeak';
import Plateforms from '../../components/standard/Plateforms';
import Campaign2 from '../../components/standard/Campaign2';
function Services() {
  return (
    <div className='relative overflow-hidden'>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/cs-line-1.png'
          alt=''
          className='h-screen w-[100vw] '
        />
      </div>
      <div className='max-w-screen-xl mx-auto  xl:space-y-10'>
        <Card1 />
        <div className='card-width'>
          <Scard2 />
        </div>
        <div className='long-card'>
          <Scard3 />
        </div>
        <div className='card-width'>
          <Scard4 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default Services;
