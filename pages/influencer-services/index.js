import React from "react";
import Bottom from "../../components/influencerServices/Bottom";
import Icardtop from "../../components/influencerServices/Icardtop";

import Middle from "../../components/influencerServices/Middle";

import Campaign2 from "../../components/standard/Campaign2";
import NumbersSpeak from "../../components/standard/NumbersSpeak";
import Plateforms from "../../components/standard/Plateforms";

function influencerServices() {
  return (
    <div className='relative'>
      <div className='right-0  hidden xl:inline-grid absolute -top-[3%] [z-index:-1]'>
        <img
          src='/standardimages/serviceTop.png'
          alt=''
          className='  h-[45rem] w-[100vw] '
        />
      </div>
      <div className='right-0 hidden xl:inline-grid absolute  top-[26%] [z-index:-1]'>
        <img
          src='/standardimages/servicemiddle.png'
          alt=''
          className='scale[1.2] w-[100vw] object-cover'
        />
      </div>
      <div className='max-w-screen-xl mx-auto  '>
        <Icardtop />
        <Middle />
        <Bottom />
        <NumbersSpeak />
        <Plateforms />
        <Campaign2 />
      </div>
    </div>
  );
}

export default influencerServices;