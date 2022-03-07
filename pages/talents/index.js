import { useEffect, useState } from 'react';
import Scard2 from '../../components/Services/Scard2';
import Campaign2 from '../../components/standard/Campaign2';
import NumbersSpeak from '../../components/standard/NumbersSpeak';
import Plateforms from '../../components/standard/Plateforms';
import Users from '../../components/Talents/Users';

function Talents() {
  let [users, setUsers] = useState([]);

  let user = [
    {
      id: 1,
      name: ' Ghazi',
      role: ['Caster'],
      tournaments: [
        'Dota 2 International',
        'Battle of the Gamers by BMW',
        'Insomnia',
        'Ooredoo Nation',
      ],
      youtube: '',
      twitter: 'https://twitter.com/gggazyyy',
      instagram: '1.4M',
      tiktok: '13.8M',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2022/02/ghazi.png',
    },
    {
      id: 2,
      name: 'k0de2 ',
      role: ['CASTER', 'ANALYST'],
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      tournaments: [
        'PMGC Grand Finals 20202021',
        'BLAST PRO GLOBAL FINAL BAHRAIN',
        'PMWL West 2020',
        'GET PUBGM 2021',
      ],
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/07/cm-image-2.png',
    },
    {
      id: 3,
      name: 'k0de ',
      role: ['CASTER', 'ANALYST'],
      followers: '25.6M',
      facebook: '54.5K',
      youtube: '2.9M',
      instagram: '1.4M',
      tiktok: '13.8M',
      tournaments: [
        'PMGC Grand Finals 20202021',
        'BLAST PRO GLOBAL FINAL BAHRAIN',
        'PMWL West 2020',
        'GET PUBGM 2021',
      ],
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/07/cm-image-2.png',
    },
  ];
  useEffect(() => {
    setUsers(user);
  }, []);
  return (
    <div className='relative overflow-hidden xl:mt-20'>
      <div className='max-w-screen-xl mx-auto  xl:space-y-10'>
        <Users user={users} />
        <div className='card-width'>
          <Scard2 />
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default Talents;
