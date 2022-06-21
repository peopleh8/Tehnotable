import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade } from 'swiper'
import ImageZoom from 'react-image-zooom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'

import { isBrowser } from '../../../utils/isBrowser'

import sprite from '../../../icons/sprite.svg'

import line from '../../../images/line.svg'
import {getScrollbarWidth} from "../../../utils/getScrollbarWidth";

const SingleProductSlider = ({ slider }) => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)



    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => {
        const settingMobile = new Promise((resolve, reject) => {
          resolve(setIsMobile(true))
        })

        settingMobile.then(() => {
          Fancybox.bind("[data-fancybox='gallery']", {
            showClass: 'fancybox-fadeIn',
            hideClass: 'fancybox-fadeOut',
            dragToClose: true,
            infinite: false,
            preload: false,
            type: 'image',
            Image: {
              zoom: false,
            },
            parentEl: isBrowser() && document.querySelector('#___gatsby'),
            on: {
              init: () => {
                if (isBrowser()) {
                  if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
                  document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
                }
              },
              destroy: () => {
                if (isBrowser()) {
                  if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
                  document.querySelector('.header__bot').style.paddingRight = '0'
                }
              }
            }
          })
        })
      }
    })
  }, [])

  return (
    <div className="single-product-intro__slider-wrapper">
      <div className="single-product-intro__slider-pagination">
        <div className="single-product-intro__slider-pagination-inner" />
      </div>
      <div className="single-product-intro-slider__nav">
        <div className="single-product-intro-slider__btn single-product-intro-slider__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="single-product-intro-slider__btn single-product-intro-slider__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div>
      <div className="single-product-intro-slider__controls">
        <a className="single-product-intro-slider__controls-elem" download href={`#`}>
          <span className="single-product-intro-slider__controls-icon">
            <svg><use href={`${sprite}#download`} /></svg>
          </span>
          <span className="single-product-intro-slider__controls-text">Download 3D</span>
        </a>
        <a className="single-product-intro-slider__controls-elem" href="https://google.com" target="_blank" rel="noreferrer">
          <span className="single-product-intro-slider__controls-icon">
            <svg><use href={`${sprite}#pdf`} /></svg>
          </span>
          <span className="single-product-intro-slider__controls-text">instruction</span>
        </a>
      </div>
      <div className="single-product-intro__slider-inner">
        <Swiper
          className="single-product-intro__slider single-product-intro-slider"
          modules={[Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          allowTouchMove={false}
          navigation={{
            prevEl: '.single-product-intro-slider__prev',
            nextEl: '.single-product-intro-slider__next'
          }}
          pagination={{
            clickable: true,
            el: '.single-product-intro__slider-pagination-inner',
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
                    slide.is3D && <div className="single-product-intro-slider__item-line">
                      <img src={line} alt=""/>
                      <div className="single-product-intro-slider__item-line-slider">
                        <span>360</span>
                      </div>
                    </div>
                  }
                  {
                    !isMobile
                      ? <ImageZoom
                          src={slide.bigPreview}
                          alt=""
                          zoom="200"
                          width={735}
                          height={780}
                        />
                      : <a href={slide.bigPreview} data-fancybox="gallery">
                          <img src={slide.bigPreview} alt="" width={735} height={780} />
                        </a>
                  }

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