import React from "react";

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Gallery.scss'
import 'swiper/scss'
import 'swiper/scss/autoplay'

import gallery1 from '../../images/gallery-1.jpg'
import gallery2 from '../../images/gallery-2.jpg'
import gallery3 from '../../images/gallery-3.jpg'
import gallery4 from '../../images/gallery-4.jpg'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__title title title--small">Gallery</div>
      </div>
      <div className="gallery__slider-wrapper">
        <Swiper
          className="gallery__slider gallery-slider"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          allowTouchMove={false}
          loop={true}
          speed={4000}
          autoplay={{
            enabled: true,
            delay: 1,
            waitForTransition: false,
          }}
        >
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery2} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery1} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery2} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery3} alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slider__item">
            <img src={gallery4} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery