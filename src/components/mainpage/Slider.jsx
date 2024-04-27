
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import img_1 from './../../../public/slider/bagda chingri.png'
import img_2 from './../../../public/slider/jamdani3.png'
import img_3 from './../../../public/slider/jamdani8.png'
// import img_4 from './../../../public/slider/rice5.png'
import img_4 from './../../../public/slider/illish.png'
import img_5 from './../../../public/slider/satarangi1.png'


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
        className="mySwiper "
      >
      <div className="swiper-button-prev"></div> 
      <div className="swiper-button-next"></div> 
      
        <SwiperSlide data-hash="slide2" className=''><img src={img_2? img_2 :''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide1" className=''><img src={img_1? img_1 : ''} alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide3" className=''><img src={img_3? img_3 :''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide2" className=''><img src={img_4? img_4 :''}  alt="" /></SwiperSlide>
        <SwiperSlide data-hash="slide3" className=''><img src={img_5? img_5 :''}  alt="" /></SwiperSlide>
   
      </Swiper>
    </>
  );
}
export default Slider;
