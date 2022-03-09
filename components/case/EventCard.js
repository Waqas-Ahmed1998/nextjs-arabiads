import React from 'react';

function EventCard({ event, index }) {
  return (
    <div className='flex relative lg:w-[90%] p-10 bg-white h-[35rem] rounded-2xl mt-10'>
      <div className=' right-5 flex justify-center items-center -top-8 rounded-full absolute w-[65px] bg-[#ff8f3f] h-[65px]'>
        <span className='text-white text-lg'>{index + 1}</span>
      </div>
      <div className='absolute left-0 -top-3 [z-index:-1] bg-blue-600 w-full rounded-t-full h-5'></div>
      <div className=''>
        <div className='flex space-x-10 items-center'>
          <img src={event.img} alt='' className='w-28' />
          <div className='space-y-5'>
            <h3 className='md:text-3xl font-bold'>{event.name} </h3>
            <p className='text-sm md:text-base'>{event.genre}</p>
          </div>
        </div>
        <p className='md:text-lg text-sm pt-10'>{event.content}</p>
        <div className=' font-bold absolute bottom-10 w-[80%] flex justify-around items-center  '>
          <div>
            <img
              src='/case/views.png'
              alt=''
              className='w-10 h-10 object-contain mx-auto'
            />
            <p className='text-center text-blue-400 font-bold'>
              {event.audience}
            </p>
            <p>{event.role}</p>
          </div>
          <div className='text-center'>
            <img
              src='/case/eye.png'
              alt=''
              className='w-10 h-10 object-contain mx-auto'
            />
            <p className='text-center text-blue-400'>{event.engagement}</p>
            <p>{event.engagementRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
