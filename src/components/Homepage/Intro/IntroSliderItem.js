import React from 'react'

import sprite from '../../../icons/sprite.svg'

import  { Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

const IntroSliderItem = ({ index, imgSrc, title, isBtn, playBtnText }) => {
  return (
    <SwiperSlide className="intro-slider__item">
      <img src={imgSrc} alt=""/>
      <div className="container">
        {
          index === 0
            ? <h1 className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: title }} />
            : <h3 className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: title }} />
        }
        {
          isBtn && <div className="intro-slider__item-btn video-btn">
            <div className="intro-slider__item-icon video-btn__icon">
              <svg viewBox="0 0 65 65" width="65" height="65" className="intro-slider__item-shape video-btn__shape">
                <circle r="32.5" cx="32.5" cy="32.5" />
              </svg>
              <svg className="intro-slider__item-play video-btn__play">
                <use href={`${sprite}#play`} />
              </svg>
            </div>
            <p className="intro-slider__item-text video-btn__text">{playBtnText}</p>
          </div>
        }
      </div>
    </SwiperSlide>
  )
}

export default IntroSliderItem