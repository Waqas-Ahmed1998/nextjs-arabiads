import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';

function Navbar() {
  const [onClick, setClick] = useState(true);
  const [onContact, setContact] = useState(false);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='hidden  xl:flex justify-between items-center py-4 md:font-semibold md:max-w-7xl lg:max-w-screen-2xl mx-auto  '>
        <div className=''>
          {
            <Link href='/'>
              <div>
                <img
                  className='cursor-pointer w-40 h-40 object-contain'
                  src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
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
        </div>

        <div className=' text-center'>
          <button
            onClick={(e) => setContact(!onContact)}
            className={` ${styles.btnContact} ${styles.popins} bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline-grid btn-contact  py-4 bg-[#FEA366]   w-60  rounded-full  text-2xl`}
          >
            Contact Us
          </button>
        </div>
      </div>
      {
        // mobile nav
      }
      <div className=' pr-5 mb-10 relative xl:hidden bg-transparent  flex justify-between p-2 items-center'>
        <Link href='/'>
          <img
            onClick={(e) => setClick(!onClick)}
            className='cursor-pointer w-20 h-20 object-contain'
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
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
          <div className='left-0 absolute text-white items-center justify-evenly top-[100%] z-40 bg-black xl:hidden flex flex-col space-y-5 h-screen w-full'>
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

            <div className='  flex justify-center '>
              <div className=' fixed  z-50 max-w-4xl  top-0 xl:top-auto bg-white h-screen lg:h-fit mx-auto'>
                <div className='flex h-full  '>
                  <div className='hidden  xl:flex items-center justify-center contact-image w-[40%]'>
                    <div className='contact-color object-contain flex items-center justify-center w-full h-full'>
                      <Link href='/'>
                        <img
                          src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
                          alt=''
                          className='w-28 h-28 object-contain'
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
                            className='px-2 py-4 bg-[#FEA366] '
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
                      className='absolute top-0 right-4 md:right-0 px-4 py-2  bg-blue-400'
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
