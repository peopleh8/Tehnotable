import React from 'react'

import  { Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

const IntroSliderPagination = () => {
  return (
    <div className="intro-slider__pagination">
      <div className="intro-slider__pagination-inner" />
    </div>
  )
}

export default IntroSliderPagination