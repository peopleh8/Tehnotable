import React from 'react'

import gsap from 'gsap'

import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

const InovationSlider = () => {
  return (
    <Swiper
      className="about-inovation__slider about-inovation-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.about-inovation__slider-prev',
        nextEl: '.about-inovation__slider-next',
      }}
      onSlideChange={() => {
        let sliderTl = gsap.timeline()

        sliderTl
          .from('.about-inovation-slider__item.swiper-slide-duplicate-active.swiper-slide-duplicate .about-inovation-slider__item-inner', .5, {
            scaleY: 0, delay: .2, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }
          })
          .from('.about-inovation-slider__item.swiper-slide-duplicate-active.swiper-slide-duplicate .about-inovation-slider__item-inner *', .4, {
            opacity: 0, y: -20, stagger: .15, onComplete() {
              sliderTl.set(this.targets(), { clearProps: 'all' })
            }
          }, '-=.3')
      }}
    >
      <SwiperSlide className="about-inovation-slider__item">
        <div className="about-inovation-slider__item-inner">
          <div className="about-inovation-slider__item-title">Inovation name</div>
          <p className="about-inovation-slider__item-desc">Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="about-inovation-slider__item">
        <div className="about-inovation-slider__item-inner">
          <div className="about-inovation-slider__item-title">Inovation name</div>
          <p className="about-inovation-slider__item-desc">Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="about-inovation-slider__item">
        <div className="about-inovation-slider__item-inner">
          <div className="about-inovation-slider__item-title">Inovation name</div>
          <p className="about-inovation-slider__item-desc">Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default InovationSlider