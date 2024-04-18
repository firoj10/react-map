
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import img_1 from './../../../public/map1.jpeg'
import img_2 from './../../../public/map2.jpeg'
// import img_2 from './../../../public/slider/gi-bg1.jpg'
// import img_4 from './../../../public/slider/gi-bg4.jpg'
// import img_3 from './../../../public/slider/gi-bg3.jpg'
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
        <SwiperSlide data-hash="slide1" className=''><img src={img_1? img_1 : ''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2" className=''><img src={img_2? img_2 :''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide3" className=''><img src={img_1? img_1 :''}  alt="" /></SwiperSlide>
      
        
      </Swiper>
    </>
  );
}
export default Slider;
