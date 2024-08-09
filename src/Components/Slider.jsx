import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Custom SVG Arrow Components
const NextArrow = () => (
  <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.1667 0.5L0.0541992 4.6125L13.4125 18L0.0541992 31.3875L4.1667 35.5L21.6667 18L4.1667 0.5Z" fill="black"/>
  </svg>
  
);

const PrevArrow = () => (
  <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.1667 0.5L0.0541992 4.6125L13.4125 18L0.0541992 31.3875L4.1667 35.5L21.6667 18L4.1667 0.5Z" fill="black"/>
  </svg>
  
);

function Slider(props) {
  return (
    <>
      <section className="slider-section page-width pad-tp-btm-50" data-sectionid="slider-section">
        <h4 className="text-center m-0">{props.subheading}</h4>
        <h2 className="text-center">{props.heading}</h2>
        <div className="slider-container-wrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
          >
            {props.imageBlockData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slide-image-wrapper">
                  <img src={item.imgSrc} alt="Group" />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"><NextArrow /></div>
            <div className="swiper-button-prev"><PrevArrow /></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Slider;
