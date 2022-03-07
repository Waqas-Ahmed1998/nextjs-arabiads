import { useEffect, useState } from 'react';
import EventCard from '../../components/case/EventCard';
import Campaign2 from '../../components/standard/Campaign2';
import NumbersSpeak from '../../components/standard/NumbersSpeak';
import Plateforms from '../../components/standard/Plateforms';

function Case() {
  let [eventcard, setEventCard] = useState([]);

  let user = [
    {
      id: 1,
      name: 'Esports ',
      engagement: 48,
      genre: 'Event & Tournaments',
      content:
        'Since 2020, we were honored to host and present various esports tournaments (LAN/Online), thanks to our esports broadcasting talents.',
      role: 'Casters/Analysts',
      audience: 13,
      engagementRole: 'Events',
      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/09/arab-esports.png',
    },
    {
      id: 2,
      name: 'Redmagic ',
      engagement: '1.8M',
      genre: 'Gaming Smartphone',
      content:
        'We chose a few content creators and sent them a sample of the gaming smartphone "Redmagic 6 Pro" for review and video game play to demonstrate the devices strength and potential.',
      role: 'Gamers',
      audience: 8,
      engagementRole: 'Total Views',

      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/08/Redmagic-6-Pro.png',
    },
    {
      id: 3,
      name: 'Valorant',
      engagement: '550K',
      genre: 'FPS Game',
      content:
        "We selected a few content creators and worked on films to promote Riot Games' fresh new FPS title, Valorant.  ",
      role: 'Content Creators',
      audience: 8,
      engagementRole: 'Engagement',

      img: 'https://influencers.ar-ad.com/wp-content/uploads/2021/08/valorant.png',
    },
  ];
  useEffect(() => {
    setEventCard(user);
  }, []);
  return (
    <div className='relative overflow-hidden xl:mt-20'>
      <div className='right-0 hidden xl:inline-grid absolute top-0 [z-index:-1]'>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/08/cs-line-1.png'
          alt=''
          className='h-screen w-[100vw] '
        />
      </div>
      <div className='max-w-screen-xl mx-auto  xl:space-y-10'>
        <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row md:justify-around justify-center items-center'>
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/SONY-PICTURES.png'
            alt=''
          />
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/RocketLeagueChampionship.png'
            alt=''
          />
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/spotify-logo.png'
            alt=''
          />
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/RedBull.png'
            alt=''
          />
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/KFC.png'
            alt=''
          />
          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/blast-esports.png'
            alt=''
          />

          <img
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/10/anghami.png'
            alt=''
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
          {eventcard.map((data, index) => (
            <EventCard key={data.id} event={data} index={index} />
          ))}
        </div>
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}
export default Case;
