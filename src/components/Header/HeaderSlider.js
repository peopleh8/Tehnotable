import React, { useRef } from 'react'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import sprite from '../../icons/sprite.svg'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

const HeaderSlider = () => {
  const headerPrevBtn = useRef(null);
  const headerNextBtn = useRef(null);

  return (
    <div className="header__top-slider header-slider">
      <Swiper
        className="header-slider__inner"
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 5000
        }}
        navigation={{
          prevEl: '.header-slider__prev-btn',
          nextEl: '.header-slider__next-btn',
        }}
        loop={true}
      >
        <SwiperSlide className="header-slider__item">
          <p className="header-slider__item-text">discount on accessories - 50%</p>
        </SwiperSlide>
        <SwiperSlide className="header-slider__item">
          <p className="header-slider__item-text">discount on accessories - 40%</p>
        </SwiperSlide>
        <SwiperSlide className="header-slider__item">
          <p className="header-slider__item-text">discount on accessories - 30%</p>
        </SwiperSlide>
        <SwiperSlide className="header-slider__item">
          <p className="header-slider__item-text">discount on accessories - 20%</p>
        </SwiperSlide>
        <div className="header-slider__prev-btn header-slider__btn" ref={headerPrevBtn}>
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </div>
        <div className="header-slider__next-btn header-slider__btn" ref={headerNextBtn}>
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </div>
      </Swiper>
    </div>
  )
}

export default HeaderSlider