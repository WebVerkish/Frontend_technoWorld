import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';





function Slider(props) {
  return (
    <>
      <section class="slider-section page-width pad-tp-btm-50" data-sectionid="slider-section">
        <h4 className='text-center m-0'>{props.subheading}</h4>
        <h2 className='text-center'>{props.heading}</h2>
        <div class="slider-container-wrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {props.imageBlockData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='slide-image-wrapper'>
                  <img src={item.imgSrc} alt='Group' />
                </div>
              </SwiperSlide>
            ))}
         </Swiper>
        </div>
      </section>
    </>
  )
}

export default Slider