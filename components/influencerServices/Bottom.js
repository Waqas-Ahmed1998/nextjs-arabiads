import React from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Bottom() {
  return (
    <div className='mt-[10rem]'>
      <div className=' text-center'>
        <h2 className=' heading-primary heading-blue font-bold text-[#040e29] xl:text-[36px] mb-4 '>
          HOW IT WORKS
        </h2>
        <p
          className={`${styles.tajawal} words-gray xl:text-[21px] xl:leading-[34px] xl:px-14  text-[#040e29]`}
        >
          Our knowledgeable team is ready to walk you and your company through
          the influencer marketing process. We follow several predetermined
          procedures to define your KPIs and audience in order to design a
          successful campaign. We identify influencers that can help you reach
          your goals after we've determined your target audience. A step-by-step
          description of your next influencer campaign with us can be found
          below:{" "}
        </p>
      </div>
      {
        // bottom orange line
      }
      <div className='relative mt-10 xl:mt-0 '>
        <div className='lg:-right-[10%] 2xl:-right-[15%] hidden xl:inline-grid absolute top-5 [z-index:-1]'>
          <motion.img
            animate={{
              scale: [0.7, 1.2],
              opacity: [0, 0.8, 0],
              // rotate: [0, 0, 270, 270, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            src='/standardimages/pulseblue.png'
            alt=''
            // className='  animate-animate-pulse  '
          />
        </div>
        <img
          src='influencer-services/orangeline.png'
          alt=''
          className='hidden xl:block -top-10  relative object-contain mx-auto scale-[0.8]'
        />
        <div
          className={` ${styles.montserrat} space-y-9 text-center flex flex-col xl:text-left xl:absolute top-16 w-full`}
        >
          <div className='xl:w-[40%] space-y-4'>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#1: </span>
              SET KPIS
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              Your Influencer Marketing Campaign will be focused on reaching
              your vision, mission, and attaining the objectives you established
              for us. We can alternatively work hand in hand on defining these
              same KPIs based on your business goals.{" "}
            </p>
          </div>
          <div className='xl:w-[40%] space-y-4 xl:self-end'>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#2: </span>
              TARGET AUDIENCE
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              We&apos;ll assist you in defining segments and personas so that
              you can design influencer marketing campaigns that reach the
              correct people.
            </p>
          </div>
          <div className='xl:w-[40%] space-y-4'>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#3 </span>
              SELECTING INFLUENCERS
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              We will focus your Influencer Marketing Campaign based on your
              vision, mission and achieving the goals you set.
            </p>
          </div>
          <div className='xl:w-[40%] space-y-4 xl:self-end'>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#4: </span>
              EXECUTING PROMOTIONS
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              Depending on your platform of choice, our influencers and content
              creators build creative ad campaigns for your goods, managed by
              project leads dedicated to that promotion, and hitting all
              milestones of a brief.
            </p>
          </div>
          <div className='xl:w-[40%] space-y-4 '>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#5: </span>
              CONTENT APPROVAL
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              In close cooperation with selected influencers, we ensure that the
              campaign is implemented as planned.
            </p>
          </div>
          <div className='xl:w-[40%] space-y-4 xl:self-end'>
            <h1 className='font-bold text-base lg:text-[25px]'>
              <span className='text-[#3475F2]'>#6: </span>
              CAMPAIGN REPORTING
            </h1>
            <p className='font-medium text-sm lg:text-[17px] xl:leading-[27px] text-[#040e29]'>
              We track brand mentions, reach, and other key KPIs for your
              product launches, as well as the value of your social media
              awareness initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
