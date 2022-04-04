import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { MoonLoader } from "react-spinners";
import { loggedInUser } from "../../recoil/loggedInUser";
import { adminUsers } from "../../recoil/adminUsers";
import { useRecoilValue } from "recoil";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Users({ user }) {
  const [filter, setFilter] = useState("");

  const loggedUser = useRecoilValue(loggedInUser);
  const admin = useRecoilValue(adminUsers);

  const deleteDocument = (id) => {
    const docRef = doc(db, "talents", id);
    if (confirm("Press ok to remove the item")) {
      deleteDoc(docRef);
      alert("item removed");
    } else {
      return;
    }
  };

  return (
    <div className={`${styles.montserrat} w-[100%]  mx-auto p-5`}>
      <div
        className={`${styles.popins}  xl:tracking-widest mx-auto flex justify-around xl:justify-center items-center space-x-2`}
      >
        <div className='   cursor-pointer hover:text-white  text-sm  xl:text-2xl'>
          <button
            onClick={() => setFilter("")}
            className={`${
              !filter && "bg-[#01A3E6] text-white"
            } p-3 xl:p-5  hover:bg-[#01A3E6] rounded-md active:bg-[#1f84ac] focus:outline-none focus:ring-violet-300 focus:bg-[#01A3E6] focus:text-white`}
          >
            All
          </button>
        </div>
        <div className='  cursor-pointer hover:text-white  text-sm xl:text-2xl'>
          <button
            onClick={() => setFilter("caster")}
            className='p-3 xl:p-5  hover:bg-[#01A3E6] rounded-md active:bg-[#1f84ac] focus:outline-none focus:ring-violet-300 focus:bg-[#01A3E6] focus:text-white'
          >
            Caster
          </button>
        </div>
        <div className='  cursor-pointer hover:text-white  text-sm  xl:text-2xl'>
          <button
            onClick={() => setFilter("host")}
            className='p-3 xl:p-5  hover:bg-[#01A3E6] rounded-md active:bg-[#1f84ac] focus:outline-none focus:ring-violet-300 focus:bg-[#01A3E6] focus:text-white'
          >
            Host
          </button>
        </div>
        <div className='  cursor-pointer hover:text-white  text-sm xl:text-2xl'>
          <button
            onClick={() => setFilter("analyst")}
            className='p-3 xl:p-5  hover:bg-[#01A3E6] rounded-md active:bg-[#1f84ac] focus:outline-none focus:ring-violet-300 focus:bg-[#01A3E6] focus:text-white'
          >
            Analyst
          </button>
        </div>
      </div>
      {
        // left card
      }
      <div className='grid grid-cols-1 lg:grid-cols-2 flex-col xl:flex-row gap-5 mt-10 items-center'>
        {!user.length && (
          <div className='mb-24 h-10 p-24 col-span-2 flex justify-center  '>
            {" "}
            <MoonLoader color={"black"} size='30px' />{" "}
          </div>
        )}
        {user
          .filter((value) => {
            if (!filter) {
              return value;
            }
            if (value?.role.toLowerCase().includes(filter.toLowerCase())) {
              return value;
            }
          })

          .map((singleUser, index) =>
            index % 2 == 0 ? (
              <motion.div layout key={singleUser.id} className='relative  '>
                {
                  // <Image
                  //   className=''
                  //   src='/talents/card.png'
                  //   alt=''
                  //   title=''
                  //   width='100%'
                  //   height='50%'
                  //   layout='responsive'
                  //   priority
                  //   objectFit='contain'
                  //   quality={100}
                  // />
                }
                {}
                <img
                  src='/talents/card2.svg'
                  alt=''
                  className='w-full height-[50%] '
                />
                {
                  // trash icon
                }
                {admin?.includes(loggedUser) && (
                  <>
                    {" "}
                    <svg
                      onClick={(e) => deleteDocument(singleUser.id)}
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
                <div className='w-full h-full flex absolute top-[1px] '>
                  <img
                    src={singleUser.image}
                    alt=''
                    className='ml-[5px] mt-[5px] h-[90%] object-cover rounded-l-[15px] md:rounded-l-[29px] small:w-[33.5%] md:w-[34.5%] md:rounded-bl-[29px]'
                  />
                  <div className='ml-1 mr-1 pl-2  bg-[#F2F6FE] h-[90%]  mt-[5px]  xl:pt-6    mid:pt-2 mid:space-y-2 w-full  rounded-r-[20px] md:rounded-r-[30px] md:space-y-3 relative xl:px-2 iphone6:pt-2 iphone6:space-y-2 small:pt-3'>
                    {
                      // <h3
                      //   className={` ${styles.montserrat}   left-[40%]  rounded-b-md absolute text-[0.5rem]  md:text-sm font-bold inline-block px-2 bg-[#FAA361] top-0 `}
                      // >
                    }
                    <div className='text-center absolute  -top-[2px] w-[96%]'>
                      <h3
                        className={` ${styles.montserrat} mx-auto  text-center rounded-b-md text-[0.5rem] relative -top-[7px]   md:text-sm font-bold inline-block px-2 bg-[#FAA361]  md:-top-[1px] `}
                      >
                        {singleUser.role}
                      </h3>
                    </div>
                    <h3
                      className={`${styles.montserrat} text-xs xl:text-lg font-bold`}
                    >
                      - {singleUser.name}
                    </h3>
                    <p className='text-blue-500 text-xs xl:text-base font-bold'>
                      {" "}
                      Tournaments:
                    </p>
                    {singleUser.tournaments?.includes(",") ? (
                      <div
                        className={` flex   mid:w-[90%] md:w-full flex-col md:flex-row w-full flex-wrap justify-between gap-2 md:gap-0 xl:text-center font-medium`}
                      >
                        <p
                          className={`small:text-[0.5rem] mid:text-[10px] lg:text-[12px]  md:text-sm md:w-[46%] md:mt-[10px] `}
                        >
                          {" "}
                          {singleUser.tournaments.split(",")[0]}
                        </p>
                        <div className='w-[1px] bg-[#97aabd] xl:mt-[10px] h-auto hidden md:inline-grid '></div>
                        <p
                          className={`small:text-[0.5rem] mid:text-[10px] lg:text-[12px]  md:text-sm md:w-[46%] md:mt-[10px] `}
                        >
                          {" "}
                          {singleUser.tournaments.split(",")[1]}
                        </p>
                        <p
                          className={`small:text-[0.5rem] mid:text-[10px] lg:text-[12px]  md:text-sm md:w-[46%] md:mt-[10px] `}
                        >
                          {" "}
                          {singleUser.tournaments.split(",")[2]}
                        </p>
                        <div className='hidden md:inline-grid w-[1px] bg-[#97aabd] xl:mt-[10px] h-auto'></div>

                        <p
                          className={`small:text-[0.5rem] mid:text-[10px] lg:text-[12px]  md:text-sm md:w-[46%] md:mt-[10px] `}
                        >
                          {" "}
                          {singleUser.tournaments.split(",")[3]}
                        </p>
                      </div>
                    ) : (
                      <div className='flex  gap-2 md:gap-0 '>
                        <div className='text-center md:px-2 md:space-y-3 border-r border-gray-400'>
                          <p className='text-[0.5rem] md:text-xs lg:text-[12px] xl:text-sm'>
                            {singleUser.tournaments}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className=' hidden relative top-2  md:flex items-center justify-center space-x-3  md:top-2 lg:-top-0 xl:top-2'>
                      {singleUser.facebookLink && (
                        <a href={singleUser.facebookLink}>
                          {" "}
                          {
                            // <FontAwesomeIcon
                            //   icon={faFacebook}
                            //   className='  w-4 h-4 p-[1px] md:w-7 md:h-[1.7rem]  object-contain   md:p-[0.3rem] bg-white rounded-[30px] '
                            //   // className='w-5 md:w-7 p-[0.3rem] bg-white rounded-full'
                            // />
                          }
                          <img
                            src='/talents/fac.svg'
                            alt=''
                            className='w-[42px] h-[42px]  '
                          />
                        </a>
                      )}

                      {singleUser.twitterLink && (
                        <a href={singleUser.twitterLink}>
                          <img
                            src='/talents/twit.svg  '
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.instagramLink && (
                        <a href={singleUser.instagramLink}>
                          {" "}
                          <img
                            src='/talents/insta.svg'
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.twitchLink && (
                        <a href={singleUser.twitchLink}>
                          <img
                            src='/talents/twi.svg'
                            alt=''
                            className='w-[42px] h-[42px]'
                          />
                        </a>
                      )}
                      {singleUser.youtubeLink && (
                        <a href={singleUser.youtubeLink}>
                          {" "}
                          <img
                            src='/talents/you.svg'
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.liquipediaLink && (
                        <a href={singleUser.liquipediaLink} className=' '>
                          <img
                            src='/talents/liq.svg'
                            alt=''
                            className='w-[42px] h-[42px]'
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div layout key={singleUser.id} className='relative '>
                {
                  // <img
                  //   src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/sm-right-bg.png'
                  //   alt=''
                  //   className='w-full'
                  // />
                }
                {
                  // <Image
                  //   className=''
                  //   src='/talents/card.png'
                  //   alt=''
                  //   title=''
                  //   width='100%'
                  //   height='50%'
                  //   layout='responsive'
                  //   priority
                  //   objectFit='contain'
                  //   quality={100}
                  // />
                }
                <img
                  src='/talents/card2.svg'
                  alt=''
                  className='w-full height-[50%] '
                />
                {admin?.includes(loggedUser) && (
                  <>
                    {" "}
                    <svg
                      onClick={(e) => deleteDocument(singleUser.id)}
                      xmlns='http://www.w3.org/2000/svg'
                      className='z-10 h-6 w-4 absolute bottom-8  left-5 text-black cursor-pointer'
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
                <div className='w-full h-full  flex flex-row-reverse absolute  top-[1px] '>
                  <img
                    src={singleUser.image}
                    alt=''
                    className='mr-[5px] mt-[5px]  h-[90%] object-cover rounded-r-[15px] md:rounded-r-[29px] small:w-[33.5%] md:w-[34.5%] md:rounded-br-[29px] '
                  />

                  <div className='ml-1 mr-1 pl-3  rounded-l-[20px]  md:rounded-l-[30px] h-[90%]  mt-[5px] bg-[#F2F6FE]   xl:pt-6  w-full  mid:pt-2 mid:space-y-2  md:space-y-3 relative md:pr-2 iphone6:pt-2 iphone6:space-y-2 small:pt-2 '>
                    {
                      // <h3
                      //   className={` ${styles.montserrat}   small:left-[35%] mid:left-[35%] rounded-b-md absolute text-[0.5rem]  md:text-sm font-bold inline-block px-2 bg-[#FAA361] top-0   `}
                      // >
                      //   {singleUser.role}
                      // </h3>
                    }
                    <div className='text-center absolute w-[95%] -top-[2px] '>
                      <h3
                        className={` ${styles.montserrat} mx-auto  text-center rounded-b-md text-[0.5rem] relative -top-[7px]   md:text-sm font-bold inline-block px-2 bg-[#FAA361]  md:-top-[1px] `}
                      >
                        {singleUser.role}
                      </h3>
                    </div>
                    <h3
                      className={`${styles.montserrat} text-xs xl:text-lg font-bold`}
                    >
                      - {singleUser.name}
                    </h3>
                    <p className='text-blue-500 text-xs xl:text-base font-bold'>
                      {" "}
                      Tournaments:
                    </p>
                    {singleUser.tournaments?.includes(",") ? (
                      <div className='flex  flex-col mid:w-[100%]  md:flex-row w-full flex-wrap justify-between gap-2 md:gap-0 xl:text-center font-medium'>
                        <p className='small:text-[0.5rem] mid:text-[10px] md:text-sm   md:w-[46%] md:mt-[10px] lg:text-[12px] '>
                          {" "}
                          {singleUser.tournaments.split(",")[0]}
                        </p>
                        <div className='w-[1px] bg-[#97aabd] xl:mt-[10px] h-auto hidden md:inline-grid '></div>
                        <p className='small:text-[0.5rem] mid:text-[10px] md:text-sm  md:w-[46%] md:mt-[10px] lg:text-[12px] '>
                          {" "}
                          {singleUser.tournaments.split(",")[1]}
                        </p>
                        <p className='small:text-[0.5rem] mid:text-[10px] md:text-sm  md:w-[46%] md:mt-[10px] lg:text-[12px] '>
                          {" "}
                          {singleUser.tournaments.split(",")[2]}
                        </p>
                        <div className='hidden md:inline-grid w-[1px] bg-[#97aabd] xl:mt-[10px] h-auto'></div>

                        <p className='small:text-[0.5rem] mid:text-[10px] md:text-sm  md:w-[46%] md:mt-[10px] lg:text-[12px] '>
                          {" "}
                          {singleUser.tournaments.split(",")[3]}
                        </p>
                      </div>
                    ) : (
                      <div className='flex  gap-2 md:gap-0 '>
                        <div className='text-center md:px-2 md:space-y-3 border-r border-gray-400'>
                          <p className='text-[0.5rem] md:text-xs'>
                            {singleUser.tournaments}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className=' hidden relative md:top-2 lg:-top-0  md:flex items-center justify-center space-x-3'>
                      {singleUser.twitterLink && (
                        <a href={singleUser.facebookLink}>
                          {" "}
                          {
                            // <FontAwesomeIcon
                            //   icon={faFacebook}
                            //   className='  w-4 h-4 p-[1px] md:w-7 md:h-[1.7rem]  object-contain   md:p-[0.3rem] bg-white rounded-[30px] '
                            //   // className='w-5 md:w-7 p-[0.3rem] bg-white rounded-full'
                            // />
                          }
                          <img
                            src='/talents/fac.svg'
                            alt=''
                            className='w-[42px] h-[42px]  '
                          />
                        </a>
                      )}
                      {singleUser.twitterLink && (
                        <a href={singleUser.twitterLink}>
                          <img
                            src='/talents/twit.svg  '
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.instagramLink && (
                        <a href={singleUser.instagramLink}>
                          {" "}
                          <img
                            src='/talents/insta.svg'
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.twitchLink && (
                        <a href={singleUser.twitchLink}>
                          <img
                            src='/talents/twi.svg'
                            alt=''
                            className='w-[42px] h-[42px]'
                          />
                        </a>
                      )}
                      {singleUser.youtubeLink && (
                        <a href={singleUser.youtubeLink}>
                          {" "}
                          <img
                            src='/talents/you.svg'
                            alt=''
                            className='w-[42px] h-[42px] '
                          />
                        </a>
                      )}
                      {singleUser.liquipediaLink && (
                        <a href={singleUser.liquipediaLink} className=' '>
                          <img
                            src='/talents/liq.svg'
                            alt=''
                            className='w-[42px] h-[42px]'
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        {}
      </div>
    </div>
  );
}

export default Users;
