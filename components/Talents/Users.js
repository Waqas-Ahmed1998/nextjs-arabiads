import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
function Users({ user }) {
  return (
    <div className='w-[100%]  mx-auto p-5'>
      <div className='mx-auto flex justify-center items-center space-x-2'>
        <div className='cursor-pointer hover:text-white rounded-sm text-base hover:bg-blue-500 p-5 xl:text-2xl'>
          All
        </div>
        <div className='cursor-pointer hover:text-white rounded-sm text-base hover:bg-blue-500 p-5 xl:text-2xl'>
          Casters
        </div>
        <div className='cursor-pointer hover:text-white rounded-sm text-base hover:bg-blue-500 p-5 xl:text-2xl'>
          Host
        </div>
        <div className='cursor-pointer hover:text-white rounded-sm  text-base hover:bg-blue-500 p-5 xl:text-2xl'>
          Analyst
        </div>
      </div>
      {
        // left card
      }
      <div className='grid grid-cols-1 xl:grid-cols-2 flex-col xl:flex-row gap-5 mt-10 items-center'>
        {user.map((singleUser, index) =>
          index % 2 == 0 ? (
            <div key={singleUser.id} className='relative  '>
              {
                // <img
                //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/sm-left-bg-1.png'
                //   alt=''
                //   className='w-full'
                // />
              }

              <Image
                className=''
                src='/talents/leftcard.png'
                alt=''
                title=''
                width='100%'
                height='50%'
                layout='responsive'
                priority
                objectFit='contain'
              />

              <div className='w-full  flex absolute top-0'>
                <img src={singleUser.img} alt='' className='w-[35%] ' />
                <div className='ml-5   w-full mt-5 md:space-y-3 relative'>
                  <h3 className=' left-[40%] rounded-b-md absolute text-[0.5rem]  md:text-base font-bold inline-block px-2 bg-[#FAA361] -top-[0.9rem] md:-top-[0.5rem]'>
                    {singleUser.role[0]} {singleUser.role[1]}
                  </h3>
                  <h3 className='text-xs xl:text-base font-bold'>
                    - {singleUser.name}
                  </h3>
                  <p className='text-blue-500 text-xs xl:text-base font-bold'>
                    {' '}
                    Tournaments:
                  </p>
                  <div className='flex  gap-2 md:gap-0 '>
                    <div className='text-center md:px-2 md:space-y-3 border-r border-gray-400'>
                      <p className='text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[0]}
                      </p>
                      <p className=' text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[1]}
                      </p>
                    </div>
                    <div className='text-center md:space-y-3 md:px-2'>
                      <p className='text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[2]}
                      </p>
                      <p className=' text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[3]}
                      </p>
                    </div>
                  </div>
                  <div className=' md:flex w-full justify-evenly justify-self-end absolute bottom-10 hidden '>
                    {singleUser.facebookLink && (
                      <a href={singleUser.facebookLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}

                    {singleUser.twitterLink && (
                      <a href={singleUser.twitterLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.instagramLink && (
                      <a href={singleUser.instagramLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.twitchLink && (
                      <a href={singleUser.twitchLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faTwitch}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.youtubeLink && (
                      <a href={singleUser.youtubeLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.liquipediaLink && (
                      <a
                        href={singleUser.liquipediaLink}
                        className=' flex items-center '
                      >
                        <img
                          src='/talents/liquipedia.png'
                          alt=''
                          className='  w-6 h-6 object-contain   p-[0.3rem] bg-white rounded-full '
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={singleUser.id} className='relative '>
              {
                // <img
                //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/sm-right-bg.png'
                //   alt=''
                //   className='w-full'
                // />
              }
              <Image
                className=''
                src='/talents/rightcard.png'
                alt=''
                title=''
                width='100%'
                height='50%'
                layout='responsive'
                priority
                objectFit='contain'
              />
              <div className='w-full flex flex-row-reverse absolute top-0'>
                <img src={singleUser.img} alt='' className='w-[35%] ' />

                <div className='ml-5 w-full mt-5 md:space-y-3 relative'>
                  <h3 className=' left-[40%] rounded-b-md absolute text-[0.5rem] xl:text-base font-bold inline-block px-2 bg-[#FAA361] -top-[0.9rem] md:-top-[0.7rem]'>
                    {singleUser.role[0]} {singleUser.role[1]}
                  </h3>
                  <h3 className='text-xs xl:text-base font-bold'>
                    - {singleUser.name}
                  </h3>
                  <p className='text-blue-500 text-xs xl:text-base font-bold'>
                    {' '}
                    Tournaments:
                  </p>
                  <div className='flex  gap-2 md:gap-0 '>
                    <div className='text-center md:px-2 md:space-y-3 border-r border-gray-400'>
                      <p className='text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[0]}
                      </p>
                      <p className=' text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[1]}
                      </p>
                    </div>
                    <div className='text-center md:space-y-3 md:px-2'>
                      <p className='text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[2]}
                      </p>
                      <p className=' text-[0.5rem] md:text-xs'>
                        {singleUser.tournaments[3]}
                      </p>
                    </div>
                  </div>
                  <div className=' md:flex w-full justify-evenly justify-self-end absolute bottom-10 hidden '>
                    {singleUser.facebookLink && (
                      <a href={singleUser.facebookLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}

                    {singleUser.twitterLink && (
                      <a href={singleUser.twitterLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.instagramLink && (
                      <a href={singleUser.instagramLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.twitchLink && (
                      <a href={singleUser.twitchLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faTwitch}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.youtubeLink && (
                      <a href={singleUser.youtubeLink}>
                        {' '}
                        {
                          // <img
                          //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/1.svg'
                          //   alt=''
                          // />
                        }
                        <FontAwesomeIcon
                          icon={faYoutube}
                          className='w-6 p-[0.3rem] bg-white rounded-full'
                        />
                      </a>
                    )}
                    {singleUser.liquipediaLink && (
                      <a
                        href={singleUser.liquipediaLink}
                        className=' flex items-center '
                      >
                        <img
                          src='/talents/liquipedia.png'
                          alt=''
                          className='  w-6 h-6 object-contain   p-[0.3rem] bg-white rounded-full '
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        {}
      </div>
    </div>
  );
}

export default Users;
