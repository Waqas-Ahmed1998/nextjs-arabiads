import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { deleteDoc, doc } from "firebase/firestore";

import { useRecoilValue } from "recoil";
import { loggedInUser } from "../../recoil/loggedInUser";
import { adminUsers } from "../../recoil/adminUsers";
import { db } from "../../firebase";

function Profile({ user }) {
  const loggedUser = useRecoilValue(loggedInUser);
  const admin = useRecoilValue(adminUsers);

  const deleteDocument = (id) => {
    const docRef = doc(db, "influencers", id);
    if (confirm("Press ok to remove the item")) {
      deleteDoc(docRef);
      alert("item removed");
    } else {
      return;
    }
  };

  return (
    <div className=' z-20 relative w-[17rem] h-[24rem] rounded-[36px]  my-10'>
      <div className='w-full  bg-[#00A7E5] h-[17%] rounded-t-[36px] flex space-x-3 p-5 text-white'>
        <h3 className='flex-1'>{user.name}</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 bg-transparent'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
        {admin?.includes(loggedUser) && (
          <>
            {" "}
            <svg
              onClick={(e) => deleteDocument(user.id)}
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-4 absolute top-0 right-5 text-black cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </>
        )}

        <p className='text-lg'>{user.followers}</p>
      </div>
      <div className='w-full h-[63%]'>
        {user.image ? (
          <img
            src={user.image}
            alt=''
            className='h-full w-full object-cover '
          />
        ) : (
          <p>no image</p>
        )}
      </div>
      <div className='h-[20%] rounded-b-[36px] bg-white flex items-center space-x-5 '>
        <div className='flex w-full  justify-around items-baseline px-4'>
          {user.twitter && (
            <div className=' '>
              <a className='flex' href={user.twitterLink}>
                <FontAwesomeIcon
                  className='w-4 h-5 mx-auto inline-block'
                  icon={faTwitter}
                  size={"lg"}
                />
              </a>
              <span className='block pt-2 text-[0.7rem]'>{user.twitter}</span>
            </div>
          )}
          {user.instagram && (
            <div className='items-center justify-center '>
              <a className='flex' href={user.instagramLink}>
                <FontAwesomeIcon
                  className='w-4 h-5 mx-auto inline-block'
                  icon={faInstagram}
                  size={"lg"}
                />
              </a>
              <span className='block pt-2 text-[0.7rem]'>{user.instagram}</span>
            </div>
          )}
          {user.youtube && (
            <div className=' items-center justify-center '>
              <a className=' flex' href={user.youtubeLink}>
                <FontAwesomeIcon
                  className='w-4  mx-auto inline-block h-5'
                  icon={faYoutube}
                  size={"lg"}
                />
              </a>

              <span className='block pt-2 text-[0.7rem] text-center'>
                {user.youtube}
              </span>
            </div>
          )}
          {user.youtubeSecond && (
            <div className=' '>
              <a className='flex' href={user.youtubeLink2}>
                <FontAwesomeIcon
                  className='w-4 h-5 mx-auto inline-block'
                  icon={faYoutube}
                  size={"lg"}
                />
              </a>

              <span className='block pt-2 text-[0.7rem] text-center'>
                {user.youtubeSecond}
              </span>
            </div>
          )}
          {user.facebook && (
            <div className=''>
              <a className='flex' href={user.facebookLink}>
                <FontAwesomeIcon
                  className='w-4 h-5 mx-auto inline-block'
                  icon={faFacebook}
                  size={"lg"}
                />
              </a>
              <span className='block pt-2 text-[0.7rem]'>{user.facebook}</span>
            </div>
          )}
          {user.tiktok && (
            <div className=' '>
              <a className=' flex ' href={user.tiktokLink}>
                <FontAwesomeIcon
                  className='w-4 h-[1.1rem] mx-auto inline-block'
                  icon={faTiktok}
                  size={"lg"}
                />
              </a>
              <span className='block pt-2 text-[0.7rem]'>{user.tiktok}</span>
            </div>
          )}
        </div>
        <div className='absolute flex -left-1 justify-self-center [z-index:-1] -bottom-2 h-7  w-[90%] rounded-b-[36px]  bg-[#FD8E3A] '></div>
      </div>
    </div>
  );
}

export default Profile;
