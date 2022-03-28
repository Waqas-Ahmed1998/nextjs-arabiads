import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselComponent() {
  const [slide, setSldie] = useState(3);

  return (
    <div
      // animate={{ opacity: [0, 1] }}
      // transition={{ duration: 0.3 }}
      className='overflow-hidden w-[1064px] relative bottom-0  '
    >
      <Carousel
        beforeChange={(previousSlide, { currentSlide, onMove }) => {
          setSldie(currentSlide);
          // console.log(slide);
        }}
        arrows={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition='linear opacity:0 linear'
      >
        <div
          className={` 2xl:h-[49rem] transition-all duration-100  ease-in-out opaity-[.7] w-full relative bottom-6 ${
            slide == 3 && `opaity-[.7]`
          } `}
        >
          <img
            src='/home/carouselImages/maskgroup.png'
            alt=''
            className='w-full h-full'
          />
        </div>
        <div
          className={` 2xl:h-[49rem] transition-all duration-100 ease-in-out w-full  opaity-[.7]  ${
            slide == 2 && `opaity-[.7]`
          } `}
        >
          <img src='/home/home1.png' alt='' className='w-full h-full' />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
