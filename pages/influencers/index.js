import React, { useEffect, useState } from 'react';
import Icard1 from '../../components/Influencers/Icard1';
import Profile from '../../components/Influencers/Profile';
import Campaign2 from '../../components/standard/Campaign2';
import NumbersSpeak from '../../components/standard/NumbersSpeak';
import Plateforms from '../../components/standard/Plateforms';

function Influencers() {
  let [users, setUsers] = useState([]);

  let user = [
    {
      id: 1,
      name: 'Nour Mar5 ',
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/10/Nour-Mar5.jpg',
    },
    {
      id: 2,
      name: 'Nour Mar5 ',
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/10/Nour-Mar5.jpg',
    },
    {
      id: 3,
      name: 'Nour Mar5 ',
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/10/Nour-Mar5.jpg',
    },
    {
      id: 4,
      name: 'Nour Mar5 ',
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/10/Nour-Mar5.jpg',
    },
    {
      id: 5,
      name: 'Givara ',
      followers: '4.6M',
      facebook: '380K',
      youtube: '4M',
      instagram: '200K',
      twitter: '',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/09/givara.jpg',
    },
    {
      id: 6,
      name: 'Tarboun ',
      followers: '9.7M',
      facebook: '4.6M',
      youtube: '1.8M',
      instagram: '1.2M',
      twitter: '2M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/07/8.jpg',
    },
  ];
  useEffect(() => {
    setUsers(user);
  }, []);
  return (
    <div className='relative overflow-hidden xl:mt-20 mt-10'>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/cs-line-1.png'
          alt=''
          className='h-screen w-[100vw] '
        />
      </div>
      <div className='max-w-screen-xl mx-auto  xl:space-y-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 '>
          {users.map((singleUser) => (
            <div key={singleUser.id} className='flex mx-auto'>
              {' '}
              <Profile user={singleUser} />{' '}
            </div>
          ))}
        </div>
        <div className='card-width'>
          <Icard1 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default Influencers;
