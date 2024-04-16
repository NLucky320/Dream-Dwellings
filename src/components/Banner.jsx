import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import {

  Button,


} from "@material-tailwind/react";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <div className='slide1 h-[500px] w-full slide'>
            <div>
                    <h1 className='text-5xl text-white'>Building More Than Your Dream Home</h1>
            <p className='text-white'>We make sure that everyone finds what they are looking for...</p>
           <Button
                variant="text"
                size="sm"
                className="inline-block px-8 py-3 bg-[#23BE0A] text-white rounded"
              >
                <span>Contact Us</span>
              </Button>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide2 h-[500px] w-full slide'>
            <div>
                    <h1 className='text-5xl text-white'>Building More Than Your Dream Home</h1>
            <p className='text-white'>We make sure that everyone finds what they are looking for...</p>
           <Button
                variant="text"
                size="sm"
                className="inline-block px-8 py-3 bg-[#23BE0A] text-white rounded"
              >
                <span>Contact Us</span>
              </Button>
      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='slide3 h-[500px] w-full slide'>
            <div>
                    <h1 className='text-5xl text-white'>Building More Than Your Dream Home</h1>
            <p className='text-white'>We make sure that everyone finds what they are looking for...</p>
           <Button
                variant="text"
                size="sm"
                className="inline-block px-8 py-3 bg-[#23BE0A] text-white rounded"
              >
                <span>Contact Us</span>
              </Button>
      </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
