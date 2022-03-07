import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='relative z-30 bg-[#17214F] py-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col   lg:flex-row gap-5 lg:gap-12 text-center lg:text-justify'>
          <div className='flex flex-col space-y-6 flex-1 items-center px-2  lg:items-start '>
            <img
              className=' w-20 h-20  object-contain'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
              alt=''
            />
            <p className='text-xs xl:text-sm text-white'>
              Arabia E-Advertising helps brands engage and activate audiences
              worldwide through top Arabic influencers.
            </p>
            <div className='flex space-x-3'>
              <a href=''>
                {' '}
                <FontAwesomeIcon
                  className='cursor-pointer'
                  icon={faFacebook}
                  size={'lg'}
                  className='w-5 h-7'
                />
              </a>

              <a href=''>
                {' '}
                <FontAwesomeIcon
                  className='cursor-pointer'
                  icon={faInstagram}
                  size={'lg'}
                  className='w-5 h-7'
                />
              </a>

              <a href=''>
                {' '}
                <FontAwesomeIcon
                  className='cursor-pointer '
                  icon={faTwitter}
                  size={'lg'}
                  className='w-5 h-7'
                />
              </a>

              <a href=''>
                {' '}
                <FontAwesomeIcon
                  className='cursor-pointer'
                  icon={faLinkedin}
                  size={'lg'}
                  className='w-5 h-7'
                />
              </a>
              <a href=''>
                {' '}
                <FontAwesomeIcon
                  className='cursor-pointer'
                  icon={faYoutube}
                  size={'lg'}
                  className='w-5 h-7'
                />
              </a>
            </div>
            <p className='text-sm md:text-base text-white'>
              Arabia E-Advertising © 2006-2021
            </p>
          </div>
          <div className='flex-1  p-5'>
            <p className='font-bold text-sm md:text-lg text-white mb-10'>
              Useful links
            </p>
            <div className='flex justify-center lg:flex  gap-10'>
              <div className='flex flex-col text-white space-y-5 '>
                <Link href='/' className='hover:text-orange-400 '>
                  Home
                </Link>
                <Link
                  className='hover:text-orange-400 '
                  href='/influencer-services'
                >
                  influencer services
                </Link>
                <Link className='hover:text-orange-400 ' href='/influencers'>
                  influencers
                </Link>
                <Link className='hover:text-orange-400 ' href='/case-study'>
                  Case study
                </Link>
              </div>
              <div className='flex flex-col text-white space-y-5'>
                <Link href='/services' className='hover:text-orange-400 '>
                  Services
                </Link>
                <Link className='hover:text-orange-400 ' href='/services'>
                  Esports Services
                </Link>
                <Link className='hover:text-orange-400 ' href='/talents'>
                  Our Comentators
                </Link>
                <Link className='hover:text-orange-400 ' href='/about'>
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className='flex-1 p-5'>
            <p className='font-bold text-lg text-white mb-10'>Get in Touch</p>
            <div className='text-white'>
              <p className=' text-base'>DUBAI OFFICE.</p>
              <p className=' text-base'>163 Shiekh Zayed Road,</p>
              <p className=' text-base'>TECOM, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
