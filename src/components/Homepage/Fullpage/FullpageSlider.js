import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Parallax } from "swiper";

import 'swiper/scss'
import 'swiper/scss/mousewheel'
import 'swiper/scss/pagination'
import 'swiper/scss/parallax'

import item from "../../../images/fullpage-item.jpg";


const FullpageSlider = React.forwardRef((props, ref) => {
  let { downWheel, upWheel, wheelOrientation } = ref

  return (
    <Swiper
      className='fullpage__slider fullpage-slider'
      modules={[Mousewheel, Pagination, Parallax]}
      spaceBetween={0}
      slidesPerView={1}
      direction='vertical'
      speed={1500}
      allowTouchMove={false}
      mousewheel={true}
      parallax={true}
      pagination={{ clickable: true }}
      onTransitionStart={() => {
        downWheel.current = 1;
        upWheel.current = 1;
      }}
      onReachBeginning={() => {
        upWheel.current = 1;
        wheelOrientation.current = 'up';
      }}
      onReachEnd={() => {
        downWheel.current = 1;
        wheelOrientation.current = 'down';
      }}
      onSwiper={() => {
        upWheel.current = 2;
        wheelOrientation.current = 'up'
      }}
    >
      <SwiperSlide className='fullpage-slider__item'>
        <img src={item} alt="" />
        <div className='fullpage-slider__item-content' data-swiper-parallax="-300%">
          <div className='fullpage-slider__item-title'>ELECTRONIC CONTROL</div>
          <p className='fullpage-slider__item-desc'>An experienced design engineer (formerly an aviation engineer) works on production.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='fullpage-slider__item'>
        <img src={item} alt="" />
        <div className='fullpage-slider__item-content' data-swiper-parallax="-300%">
          <div className='fullpage-slider__item-title'>ELECTRONIC CONTROL</div>
          <p className='fullpage-slider__item-desc'>An experienced design engineer (formerly an aviation engineer) works on production.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='fullpage-slider__item'>
        <img src={item} alt="" />
        <div className='fullpage-slider__item-content' data-swiper-parallax="-300%">
          <div className='fullpage-slider__item-title'>ELECTRONIC CONTROL</div>
          <p className='fullpage-slider__item-desc'>An experienced design engineer (formerly an aviation engineer) works on production.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='fullpage-slider__item'>
        <img src={item} alt="" />
        <div className='fullpage-slider__item-content' data-swiper-parallax="-300%">
          <div className='fullpage-slider__item-title'>ELECTRONIC CONTROL</div>
          <p className='fullpage-slider__item-desc'>An experienced design engineer (formerly an aviation engineer) works on production.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='fullpage-slider__item'>
        <img src={item} alt="" />
        <div className='fullpage-slider__item-content' data-swiper-parallax="-300%">
          <div className='fullpage-slider__item-title'>ELECTRONIC CONTROL</div>
          <p className='fullpage-slider__item-desc'>An experienced design engineer (formerly an aviation engineer) works on production.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
})

export default FullpageSlider