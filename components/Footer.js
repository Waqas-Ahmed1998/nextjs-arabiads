import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className='relative z-30 bg-[#17214F] py-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col   lg:flex-row gap-5 lg:gap-12 text-center lg:text-left'>
          <div className='flex flex-col space-y-6 flex-1 items-center px-2  lg:items-start '>
            <img
              className=' w-20 h-20  object-contain'
              src='/standardimages/logo.png'
              alt=''
            />
            <p className='text-xs xl:text-sm text-white'>
              Arabia E-Advertising helps brands engage and activate audiences
              worldwide through top Arabic influencers.
            </p>
            <div className='flex space-x-3'>
              <a href=''>
                <FontAwesomeIcon
                  className='cursor-pointer w-5 h-7 text-blue-400'
                  icon={faFacebook}
                />
              </a>

              <a href=''>
                <FontAwesomeIcon
                  className='cursor-pointer w-5 h-7 text-blue-400'
                  icon={faInstagram}
                />
              </a>

              <a href=''>
                <FontAwesomeIcon
                  className='cursor-pointer w-5 h-7 text-blue-400 '
                  icon={faTwitter}
                />
              </a>

              <a href=''>
                <FontAwesomeIcon
                  className='cursor-pointer w-5 h-7 text-blue-400'
                  icon={faLinkedin}
                />
              </a>
              <a href=''>
                <FontAwesomeIcon
                  className='cursor-pointer w-5 h-7 text-blue-400'
                  icon={faYoutube}
                />
              </a>
            </div>
            <p className='text-sm md:text-base text-white'>
              Arabia E-Advertising ?? 2006-2021
            </p>
          </div>
          <div className='flex-1  p-5'>
            <p className='font-bold text-sm md:text-lg text-white mb-10'>
              Useful links
            </p>
            <div className='flex justify-center xl:justify-start lg:flex  gap-10'>
              <div className='flex flex-col text-white space-y-5 '>
                <Link href='/'>
                  <a className='hover:text-orange-400 ' href=''>
                    Home
                  </a>
                </Link>
                <Link
                  className='hover:text-orange-400 '
                  href='/influencer-services'
                >
                  <a className='hover:text-orange-400 ' href=''>
                    Influencer services
                  </a>
                </Link>
                <Link className='hover:text-orange-400 ' href='/influencers'>
                  <a className='hover:text-orange-400 ' href=''>
                    Influencers
                  </a>
                </Link>
                <Link className='hover:text-orange-400 ' href='/case'>
                  <a className='hover:text-orange-400 ' href=''>
                    Case study
                  </a>
                </Link>
              </div>
              <div className='flex flex-col text-white space-y-5'>
                <Link href='/services' className='hover:text-orange-400 '>
                  <a className='hover:text-orange-400 ' href=''>
                    Services
                  </a>
                </Link>
                <Link
                  className='hover:text-orange-400 '
                  href='/esports-services'
                >
                  <a className='hover:text-orange-400 ' href=''>
                    Esports Services
                  </a>
                </Link>
                <Link className='hover:text-orange-400 ' href='/talents'>
                  <a className='hover:text-orange-400 ' href=''>
                    Our Comentators
                  </a>
                </Link>
                <Link className='hover:text-orange-400 ' href='/about'>
                  <a className='hover:text-orange-400 ' href=''>
                    About Us
                  </a>
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
