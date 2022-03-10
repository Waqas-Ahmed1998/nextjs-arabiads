import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

function Navbar() {
  const [onClick, setClick] = useState(false);
  const [onContact, setContact] = useState(false);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className=' hidden px-4 xl:flex justify-between items-center py-4 md:font-semibold md:max-w-7xl lg:max-w-screen-2xl mx-auto  '>
        <div className=''>
          {
            <Link href='/'>
              <div>
                <img
                  className='cursor-pointer w-40 h-40 object-contain'
                  src='/standardimages/logo.png'
                  alt=''
                />
              </div>
            </Link>
          }
        </div>

        <div
          className={`  ${styles.popins} flex xl:space-x-7 font-normal text-2xl tracking-wide`}
        >
          <Link href='/'>
            <a className='hover:text-[#FE8936] cursor-pointer'>Home</a>
          </Link>
          <Link href='/services'>
            <a className='hover:text-[#FE8936] cursor-pointer'>Services</a>
          </Link>
          <Link href='/influencers'>
            <a className='hover:text-[#FE8936] cursor-pointer'>Influencers</a>
          </Link>
          <Link href='/talents'>
            <a className='hover:text-[#FE8936] cursor-pointer'>
              On-Air Talents
            </a>
          </Link>
          <Link href='/case'>
            <a className='hover:text-[#FE8936] cursor-pointer'>Case Studies</a>
          </Link>
          <Link href='/about'>
            <a className='hover:text-[#FE8936] cursor-pointer'>About Us</a>
          </Link>
          <Link href='/to'>
            <a className='hover:text-[#FE8936] cursor-pointer'>中国人</a>
          </Link>

          <div className=' cursor-default hidden xl:inline-grid relative group items-center text-sm'>
            Form
            <div className=' space-y-2 w-full top-[100%] left-0 absolute  hidden group-hover:inline-grid'>
              <Link href='/form'>
                <p className=' hover:text-[#FE8936] cursor-pointer'>Talent</p>
              </Link>
              <Link href='/form/influencers'>
                <p className=' hover:text-[#FE8936] cursor-pointer'>
                  Influencers
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className=' text-center'>
          <button
            onClick={(e) => setContact(!onContact)}
            className={` ${styles.btnContact} ${styles.popins}  bg-[linear-gradient(#fdc66e,#ff805e)]  text-white hidden md:inline-grid btn-contact  py-4 bg-[#FEA366]   w-60  rounded-full  text-2xl`}
          >
            Contact Us
          </button>
        </div>
      </div>
      {
        // mobile nav
      }
      <div className=' pr-5 fixed bg-[#f0f5ff] z-50 top-0 mb-10  w-full xl:hidden xl:bg-transparent  flex justify-between p-2 items-center'>
        <Link href='/'>
          <img
            onClick={(e) => setClick(false)}
            className='cursor-pointer w-20 h-20 object-contain'
            src='/standardimages/logo.png'
            alt=''
          />
        </Link>
        <div className=' flex items-center h-10 w-5 cursor-pointer z-50 text-black font-bold'>
          {!onClick && (
            <FontAwesomeIcon
              icon={faStream}
              size={'lg'}
              onClick={(e) => setClick(!onClick)}
            />
          )}
          {onClick && (
            <FontAwesomeIcon
              icon={faTimes}
              size={'lg'}
              onClick={(e) => setClick(!onClick)}
            />
          )}
        </div>
        {onClick && (
          <div className='left-0  absolute text-white items-center justify-evenly top-[100%] z-40 bg-black py-10 xl:hidden flex flex-col space-y-5 overflow-y-auto h-[32rem]  w-full'>
            <Link href='/'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                Home
              </a>
            </Link>
            <Link href='/services'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                Services
              </a>
            </Link>
            <Link href='/influencers'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                Influencers
              </a>
            </Link>

            <Link href='/talents'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                On-Air Talents
              </a>
            </Link>
            <Link href='/case'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                Case Studies
              </a>
            </Link>
            <Link href='/about'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                About Us
              </a>
            </Link>
            <Link href='/'>
              <a
                onClick={(e) => setClick(!onClick)}
                className='hover:text-[#FE8936] cursor-pointer'
              >
                中国人
              </a>
            </Link>
            <button
              onClick={(e) => {
                setContact(!onContact);
                setClick(!onClick);
              }}
              className=' text-white px-4 py-1 text-xs   bg-[#FEA366]   hover:shadow-2xl shadow-orange-700 rounded-full '
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
      {
        // Contact form

        onContact && (
          <>
            <div
              onClick={() => setContact(!onContact)}
              className={`flex items-center ${styles.contactBackground} z-10 h-[100vh] top-0 w-[100vw]  fixed`}
            ></div>

            <div className='  flex justify-center  '>
              <div className='xl:w-[80%] fixed bg-white z-50 max-w-4xl xl:max-w-[90rem] top-0  xl:top-10 2xl:w-[70%] 2xl:top-auto h-fit lg:h-fit mx-auto'>
                <div className='flex h-full  '>
                  <div
                    className={`hidden  xl:flex items-center justify-center ${styles.contactImage} w-[40%]`}
                  >
                    <div
                      className={`${styles.contactBackgroundImage} bg-gradient-to-r object-contain flex items-center justify-center w-full h-full`}
                    >
                      <Link href='/'>
                        <img
                          src='/standardimages/logo.png'
                          alt=''
                          className='w-28 h-36 object-contain cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='relative  flex flex-col justify-center  text-center '>
                    <div className='  p-10 space-y-2 '>
                      <h2 className='text-lg md:text-3xl font-bold'>
                        Looking forward to speak.
                      </h2>
                      <p className='text-sm md:text-base '>
                        Whether you&apos;re an Influencer, an Agency, or a Brand
                        wishing to work with us, please get in touch
                      </p>
                      <form action='' className=' '>
                        <div className='space-y-5 flex flex-col'>
                          <input
                            type='text'
                            className=' focus:outline-none border-none bg-gray-100 px-4 py-2'
                            placeholder='Name'
                          />
                          <input
                            type='email'
                            className=' focus:outline-none border-none bg-gray-100 px-4 py-2'
                            placeholder='Email'
                          />
                          <textarea
                            className='[resize:none] focus:outline-none bg-gray-100 px-4 py-2'
                            placeholder='Message'
                            name=''
                            id=''
                            cols='30'
                            rows='10'
                          ></textarea>
                          <button
                            onClick={submit}
                            className='py-2  md:px-2 md:py-4 bg-[#FEA366] '
                          >
                            Submit Now
                          </button>
                          <p>
                            {' '}
                            You’ll hear back from us within one business day.
                          </p>
                        </div>
                      </form>
                    </div>
                    <button
                      onClick={() => setContact(!onContact)}
                      className='absolute px-2 top-0 right-2 py-1 md:right-0 md:px-4 md:py-2  bg-blue-400'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Navbar;
