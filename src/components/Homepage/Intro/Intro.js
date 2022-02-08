import React, { useState } from 'react'

import  { Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// import gsap from 'gsap'
// import TextPlugin from 'gsap/TextPlugin';

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import introBg from '../../../images/intro-bg.jpg'
import sprite from '../../../icons/sprite.svg'

const Intro = () => {
  const [sliderButtons] = useState([
    'Our intro', 'next banner name', 'next banner name', 'next banner name'
  ]);

  return (
    <section className="intro">
      <Swiper
        className="intro__slider intro-slider"
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={500}
        allowTouchMove={false}
        autoplay={{
          delay: 8000
        }}
        pagination={{
          clickable: true,
          el: '.intro-slider__pagination-inner',
          bulletClass: 'intro-slider__pagination-item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}">
                <div class="intro-slider__pagination-item-inner">
                  <div class="intro-slider__pagination-item-text">
                    ${sliderButtons[index]}
                  </div>
                </div>
              </div>
            `)
          }
        }}
      >
        <SwiperSlide className="intro-slider__item">
          <img src={introBg} alt=""/>
          <div className="container">
            <h1 className="intro-slider__item-title">
              The furniture of <span>tomorrow</span>
            </h1>
            <div className="intro-slider__item-btn">
              <div className="intro-slider__item-icon">
                <svg viewBox="0 0 65 65" width="65" height="65" className="intro-slider__item-shape">
                  <circle r="32.5" cx="32.5" cy="32.5" />
                </svg>
                <svg className="intro-slider__item-play">
                  <use href={`${sprite}#play`} />
                </svg>
              </div>
              <p className="intro-slider__item-text">Watch the video</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="intro-slider__item">
          <img src={introBg} alt=""/>
          <div className="container">
            <h1 className="intro-slider__item-title">
              The furniture of <span>yesterday</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="intro-slider__item">
          <img src={introBg} alt=""/>
          <div className="container">
            <h1 className="intro-slider__item-title">
              The furniture of <span>today</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="intro-slider__item">
          <img src={introBg} alt=""/>
          <div className="container">
            <h1 className="intro-slider__item-title">
              The furniture of <span>after 2 days</span>
            </h1>
          </div>
        </SwiperSlide>
        <div className="intro-slider__pagination">
          <div className="intro-slider__pagination-inner" />
        </div>
      </Swiper>
    </section>
  )
}

export default Intro