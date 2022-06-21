import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

const RecomendedSlider = ({ slider, changeVariability }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <Swiper
      className="recomended__slider recomended-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      speed={500}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.recomended__slider-prev',
        nextEl: '.recomended__slider-prev-next',
      }}
      onSlideChange={swiper => {
        if (swiper.initialized || swiper.runCallbacksOnInit) {
          ScrollTrigger.matchMedia({
            '(min-width: 991px)': () => {
              gsap.from('.recomended-slider__item.swiper-slide-duplicate-active.swiper-slide-duplicate .recomended-slider__item-inner > *:not(.recomended-slider__item-link)', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
            },
            '(max-width: 990px)': () => {
              gsap.from('.recomended-slider__item.swiper-slide-next + * + * .recomended-slider__item-inner > *:not(.recomended-slider__item-link)', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
            },
            '(max-width: 768px)': () => {
              gsap.from('.recomended-slider__item.swiper-slide-next + * .recomended-slider__item-preview', .6, { opacity: 0, y: 50, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
              gsap.from('.recomended-slider__item.swiper-slide-next + * .recomended-slider__item-cat', .6, { delay: .1, opacity: 0, y: 50, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
              gsap.from('.recomended-slider__item.swiper-slide-next + * .recomended-slider__item-title', .6, { delay: .2, opacity: 0, y: 50, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
              gsap.from('.recomended-slider__item.swiper-slide-next + * .recomended-slider__item-price', .6, { delay: .3, opacity: 0, y: 50, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
              gsap.from('.recomended-slider__item.swiper-slide-next + * .recomended-slider__item-variability', .6, { delay: .4, opacity: 0, y: 50, onComplete() {
                gsap.set(this.targets(), { clearProps: 'all' })
              }})
            }
          })
        }
      }}
      breakpoints={{
        991: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }}
    >
      {
        slider.map(slide => {
          return (
            <SwiperSlide className="recomended-slider__item sample-item" key={slide.id}>
              <div className="recomended-slider__item-inner sample-item__inner">
                <Link className="recomended-slider__item-link sample-item__link" to={slide.link} />
                <div className="recomended-slider__item-preview sample-item__preview">
                  <img src={slide.imgSrc} alt="" width={350} height={405} />
                </div>
                <div className="recomended-slider__item-controls sample-item__controls">
                  <div className="recomended-slider__item-cat sample-item__cat">{slide.cat}</div>
                  {
                    slide.variability && <div className="recomended-slider__item-variability sample-item__variability">
                      {
                        slide.variability.map(item => {
                          return (
                            <div
                              className={`recomended-slider__item-variability-elem sample-item__variability-elem ${ item.isActive ? 'active' : '' }`}
                              data-img-src={item.imgSrc}
                              key={item.id}
                              onClick={e => changeVariability(slide.id, item.id, e)}
                            >
                              <span style={{ backgroundColor: item.bgColor }} />
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                </div>
                <div className="recomended-slider__item-title sample-item__title">{slide.title}</div>
                <div className="recomended-slider__item-price sample-item__price">{slide.price}</div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default RecomendedSlider