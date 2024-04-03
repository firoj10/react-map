
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


 function Slider({data}) {
  const sliderimg = data.sliderimg;
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
        <SwiperSlide data-hash="slide1" className=''><img src={sliderimg.img_1? sliderimg.img_1 : ''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2" className=''><img src={sliderimg.img_2? sliderimg.img_2 :''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide3" className=''><img src={sliderimg.img_3? sliderimg.img_3 :''}  alt="" /></SwiperSlide>
      
        
      </Swiper>
    </>
  );
}
export default Slider;
