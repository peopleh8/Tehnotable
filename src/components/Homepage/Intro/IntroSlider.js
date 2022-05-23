import React, {useEffect, useState} from 'react'

import  { Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import gsap from 'gsap'

import './Intro.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import introBg from '../../../images/intro-bg.jpg'
import benefitsTab1 from '../../../images/benefits-tab-1.jpg'
import video from '../../../videos/Intro_2.mp4'

import sprite from '../../../icons/sprite.svg'

const IntroSlider = () => {
  const [slider] = useState([
    {
      title: 'The furniture of <span>tomorrow</span>',
      isBtn: true,
      playBtnText: 'Watch video',
      btnText: 'Our intro',
      src: video,
      poster: introBg
    },
    {
      title: 'The furniture of <span>yesterday</span>',
      isBtn: false,
      playBtnText: '',
      btnText: 'next banner name',
      src: benefitsTab1
    },
    {
      title: 'The furniture of <span>today</span>',
      isBtn: false,
      playBtnText: '',
      btnText: 'next banner name',
      src: introBg
    },
    {
      title: 'The furniture of <span>after 2 days</span>',
      isBtn: false,
      playBtnText: '',
      btnText: 'next banner name',
      src: benefitsTab1
    }
  ]);

  let introTl = gsap.timeline()

  useEffect(() => {
    return () => {
      introTl.kill()
    }
  }, [])

  return (
    <Swiper
      className="intro__slider intro-slider"
      modules={[Pagination, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      speed={500}
      allowTouchMove={false}
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
                ${slider[index].btnText}
              </div>
            </div>
          </div>
        `)
        }
      }}
      onInit={() => {
        introTl
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-title', .6, { opacity: 0, y: -120, delay: .3, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__item.swiper-slide-active .intro-slider__item-btn > *', .5, { opacity: 0, x: -100, stagger: -.15, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-slider__pagination-item', .6, { opacity: 0, x: -50, stagger: .05, onComplete() {
            introTl.set(this.targets(), { clearProps: 'all' })
          }})
      }}
    >
      {
        slider.map((slide, index) => {
          return (
            <SwiperSlide className="intro-slider__item">
              {
                index === 0
                  ? <video poster={slide.poster} muted={true} loop={true} autoPlay={true} controls={false} width={1920} height={740}>
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  : <img src={slide.src} alt="" width={1920} height={740} />
              }
              <div className="container">
                {
                  index === 0
                    ? <h1 className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                    : <h3 className="intro-slider__item-title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                }
                {
                  slide.isBtn && <div className="intro-slider__item-btn video-btn">
                    <div className="intro-slider__item-icon video-btn__icon">
                      <svg viewBox="0 0 65 65" width="65" height="65" className="intro-slider__item-shape video-btn__shape">
                        <circle r="32.5" cx="32.5" cy="32.5" />
                      </svg>
                      <svg className="intro-slider__item-play video-btn__play">
                        <use href={`${sprite}#play`} />
                      </svg>
                    </div>
                    <p className="intro-slider__item-text video-btn__text">{slide.playBtnText}</p>
                  </div>
                }
              </div>
            </SwiperSlide>
          )
        })
      }
      <div className="intro-slider__pagination">
        <div className="intro-slider__pagination-inner" />
      </div>
    </Swiper>
  )
}

export default IntroSlider