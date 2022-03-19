import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { useRecoilState } from "recoil";
import { form } from "../../recoil/form";

function ContactUs() {
  const [isForm, setIsForm] = useRecoilState(form);
  const [onContact, setContact] = useState(true);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    isForm && (
      <>
        <div
          onClick={() => {
            setIsForm(!isForm);
          }}
          className={`flex items-center ${styles.contactBackground} z-10  h-[100vh] left-0 top-0 w-[100vw]  fixed`}
        ></div>
        {
          <div className='  flex justify-center  '>
            <div className='xl:w-[80%] fixed bg-white z-50 max-w-4xl xl:max-w-[90rem] top-0  xl:top-10 2xl:top-20 2xl:w-[70%] 2xl:bottom-10 h-fit lg:h-fit mx-auto'>
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
                          {" "}
                          You’ll hear back from us within one business day.
                        </p>
                      </div>
                    </form>
                  </div>
                  <button
                    onClick={() => setIsForm(false)}
                    className='absolute px-2 top-0 right-2 py-1 md:right-0 md:px-4 md:py-2  bg-blue-400'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    )
  );
}

export default ContactUs;
