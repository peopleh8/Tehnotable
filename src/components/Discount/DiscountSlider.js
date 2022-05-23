import React from 'react'

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import './Discount.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

import discount from '../../images/discount.jpg'

const DiscountSlider = () => {
  return (
    <div className="discount__slider-wrapper">
      <Swiper
        className="discount__slider discount-slider"
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 5000
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.discount-slider__pagination',
          bulletClass: 'discount-slider__pagination-item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
      >
        <SwiperSlide className="discount-slider__item">
          <img src={discount} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="discount-slider__item">
          <img src={discount} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="discount-slider__item">
          <img src={discount} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="discount-slider__item">
          <img src={discount} alt=""/>
        </SwiperSlide>
      </Swiper>
      <div className="discount-slider__pagination" />
    </div>
  )
}

export default DiscountSlider