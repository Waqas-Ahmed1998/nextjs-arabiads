import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
function Profile({ user }) {
  return (
    <div className='relative w-[17rem] h-[24rem] rounded-[36px]  my-10'>
      <div className='w-full bg-[#00A7E5] h-[17%] rounded-t-[36px] flex space-x-3 p-5 text-white'>
        <h3 className='flex-1'>{user.name}</h3>
        <img
          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/group.png'
          alt=''
          className='w-7 h-7'
        />
        <p className='text-lg'>{user.followers}</p>
      </div>
      <div className='w-full h-[63%]'>
        {user.img ? (
          <img src={user.img} alt='' className='h-full ' />
        ) : (
          <p>no image</p>
        )}
      </div>
      <div className='h-[20%] rounded-b-[36px] bg-white flex items-center justify-evenly space-x-5 '>
        {user.twitter && (
          <div className='w-5'>
            <a className='rounded-full' href=''>
              <FontAwesomeIcon icon={faTwitter} size={'lg'} />
            </a>
            <span className='block pt-2 text-xs'>{user.twitter}</span>
          </div>
        )}
        {user.instagram && (
          <div className='w-5'>
            <a className='rounded-full' href=''>
              <FontAwesomeIcon icon={faInstagram} size={'lg'} />
            </a>
            <span className='block pt-2 text-xs'>{user.instagram}</span>
          </div>
        )}
        {user.youtube && (
          <div className=' w-5'>
            <a className='rounded-full ' href=''>
              <FontAwesomeIcon icon={faYoutube} size={'sm'} />
            </a>
            <span className='block pt-2 text-xs text-center'>
              {user.youtube}
            </span>
          </div>
        )}
        {user.facebook && (
          <div className='w-5'>
            <a className='rounded-full' href=''>
              <FontAwesomeIcon icon={faFacebook} size={'lg'} />
            </a>
            <span className='block pt-2 text-xs'>{user.facebook}</span>
          </div>
        )}
        {user.tiktok && (
          <div className=''>
            <a className='rounded-full' href=''>
              <FontAwesomeIcon icon={faTiktok} size={'lg'} />
            </a>
            <span className='block pt-2 text-xs'>{user.tiktok}</span>
          </div>
        )}
      </div>
      <div className='absolute flex left-4 justify-self-center [z-index:-1] -bottom-2 h-7  w-[90%] rounded-b-[36px]  bg-[#FD8E3A] '></div>
    </div>
  );
}

export default Profile;
