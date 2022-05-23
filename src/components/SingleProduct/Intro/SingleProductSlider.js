import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper'

import ImageZoom from "react-image-zooom";

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import sprite from '../../../icons/sprite.svg'

import line from '../../../images/line.svg'

const SingleProductSlider = ({ slider }) => {
  return (
    <div className="single-product-intro__slider-wrapper">
      <div className="single-product-intro__slider-pagination" />
      <div className="single-product-intro__slider-inner">
        <Swiper
          className="single-product-intro__slider single-product-intro-slider"
          modules={[Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          pagination={{
            clickable: true,
            el: '.single-product-intro__slider-pagination',
            bulletClass: 'single-product-intro__slider-pagination-item',
            bulletActiveClass: 'active',
            renderBullet: (index, className) => {
              return (`
                <div class="${className}">
                  <img src="${slider[index].smallPreview}" alt="" width="95" height="80">
                </div>
              `)
            }
          }}
        >
          {
            slider.map(slide => {
              return (
                <SwiperSlide
                  className="single-product-intro-slider__item"
                  key={slide.id}
                  onMouseEnter={e => e.target.closest('.cIKpxU') && e.target.closest('.cIKpxU').click()}
                >
                  {
                    slide.is3D && <div className="single-product-intro-slider__item-controls">
                      <a className="single-product-intro-slider__item-elem" download href={slide.bigPreview}>
                        <span className="single-product-intro-slider__item-icon">
                          <svg>
                            <use href={`${sprite}#download`} />
                          </svg>
                        </span>
                        <span className="single-product-intro-slider__item-text">Download 3D</span>
                      </a>
                      <a className="single-product-intro-slider__item-elem" href="https://google.com" target="_blank" rel="noreferrer">
                        <span className="single-product-intro-slider__item-icon">
                          <svg>
                            <use href={`${sprite}#pdf`} />
                          </svg>
                        </span>
                        <span className="single-product-intro-slider__item-text">instruction</span>
                      </a>
                    </div>
                  }
                  {
                    slide.is3D && <div className="single-product-intro-slider__item-line">
                      <img src={line} alt=""/>
                      <div className="single-product-intro-slider__item-line-slider">
                        <span>360</span>
                      </div>
                    </div>
                  }
                  {/*
                    Mobile
                    <img src={slide.bigPreview} alt="" width={735} height={780} />
                  */}
                  <ImageZoom
                    src={slide.bigPreview}
                    alt=""
                    zoom="200"
                    width={735}
                    height={780}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default SingleProductSlider