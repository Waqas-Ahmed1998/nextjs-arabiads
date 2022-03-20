import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { loggedInUser } from "../../recoil/loggedInUser";
import { adminUsers } from "../../recoil/adminUsers";
import { db } from "../../firebase";
import styles from "../../styles/Home.module.css";

function EventCard({ event, index }) {
  const loggedUser = useRecoilValue(loggedInUser);
  const admin = useRecoilValue(adminUsers);

  const deleteDocument = (id) => {
    const docRef = doc(db, "studies", id);
    if (confirm("Press ok to remove the item")) {
      deleteDoc(docRef);
      alert("item removed");
    } else {
      return;
    }
  };
  return (
    <div className='flex relative mx-auto w-[90%] p-5 lg:p-10 h-[30rem] bg-white md:h-[35rem] rounded-2xl mt-10'>
      {admin?.includes(loggedUser) && (
        <>
          {" "}
          <svg
            onClick={(e) => deleteDocument(event.id)}
            xmlns='http://www.w3.org/2000/svg'
            className='z-10 h-6 w-4 absolute bottom-8  right-5 text-black cursor-pointer'
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
      <div className=' right-5 flex justify-center items-center -top-8 rounded-full absolute w-[65px] bg-[#ff8f3f] h-[65px]'>
        <span className='text-white text-lg'>{index + 1}</span>
      </div>
      <div className='absolute left-0 -top-3 [z-index:-1] bg-blue-600 w-full rounded-t-full h-5'></div>
      <div className={`${styles.popins}`}>
        <div className='flex space-x-10 items-center'>
          <img
            src={event.image}
            alt=''
            className='w-28 h-28 object-cover  rounded-2xl'
          />
          <div className='space-y-5'>
            <h3 className='md:text-3xl font-bold'>{event.name} </h3>
            <p className='text-sm md:text-base'>{event.genre}</p>
          </div>
        </div>
        <p className='md:text-lg text-sm pt-10'>{event.content}</p>
        <div className=' text-[18px] absolute bottom-10 w-[80%] flex justify-around items-center  '>
          <div>
            <img
              src='/case/views.png'
              alt=''
              className='w-10 h-10 object-contain mx-auto'
            />
            <p className='text-center text-sm md:text-base text-blue-400 font-bold'>
              {event.audience}
            </p>
            <p className={`${styles.popins} text-sm md:text-base`}>
              {event.role}
            </p>
          </div>
          <div className='text-center'>
            <img
              src='/case/eye.png'
              alt=''
              className='w-10 h-10 object-contain mx-auto'
            />
            <p className='text-center  text-sm md:text-base text-blue-400 font-bold'>
              {event.engagement}
            </p>
            <p className={`${styles.popins} text-sm md:text-base `}>
              {event.engagementRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
