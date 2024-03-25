import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from './../../../public/slider/s1.jpg';
import s2 from './../../../public/slider/s2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


 function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{ 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev', 
          }}
         
        className="mySwiper"
      >
         <div className="swiper-button-prev"></div> 
      <div className="swiper-button-next"></div> 
        <SwiperSlide data-hash="slide1" className=''><img src={s1}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2" className=''><img src={s2}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide3" className=''><img src={s1}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide4" className=''><img src={s2}  alt="" /></SwiperSlide>
      
        
      </Swiper>
    </>
  );
}
export default Slider;
