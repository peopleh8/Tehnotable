import React, { useEffect, useState } from 'react'

import  { Pagination, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './BenefitsTab.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import benefitsTab1 from '../../../images/benefits-tab-1.jpg'
import introBg from '../../../images/intro-bg.jpg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const BenefitsTab = () => {
  const [ slider ] = useState([
    {
      title: 'Decreases back pain',
      desc: 'The load on the back decreases - the intracascade pressure in the spine decreases',
      imgSrc: introBg
    },
    {
      title: 'Reduced risk',
      desc: 'Kidney disease is 30% less common! than those who spend eight hours or more in a sitting position',
      imgSrc: benefitsTab1
    },
    {
      title: 'Decreases back pain',
      desc: 'The load on the back decreases - the intracascade pressure in the spine decreases',
      imgSrc: introBg
    },
    {
      title: 'Reduced risk',
      desc: 'Kidney disease is 30% less common! than those who spend eight hours or more in a sitting position',
      imgSrc: benefitsTab1
    },
  ]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let benefitsTabTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.benefits-tab',
        start: 'center bottom'
      }
    })

    benefitsTabTl
      .from('.benefits-tab__title', .5, { y: '100%', onComplete() {
        benefitsTabTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.benefits-tab-slider__pagination-item', .6, { opacity: 0, x: -50, stagger: .05, onComplete() {
        benefitsTabTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      benefitsTabTl.kill()
    }
  }, [])

  return (
    <section className="benefits-tab">
      <div className="benefits-tab__title-wrapper">
        <div className="container">
          <div className="benefits-tab__sec-title-wrapper title-wrapper">
            <div className="benefits-tab__title title title--small">Benefit for health</div>
          </div>
        </div>
      </div>
      <Swiper
        className="benefits-tab__slider benefits-tab-slider"
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={500}
        allowTouchMove={false}
        autoplay={{
          delay: 8000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          el: '.benefits-tab-slider__pagination-inner',
          bulletClass: 'benefits-tab-slider__pagination-item',
          bulletActiveClass: 'active',
          renderBullet: (index, className) => {
            return (`
              <div class="${className}">
                <div class="benefits-tab-slider__pagination-item-inner">
                  <div class="benefits-tab-slider__pagination-item-count">
                    ${(index + 1) < 10 ? `0${index + 1}` : index}
                  </div>
                  <div class="benefits-tab-slider__pagination-item-title">
                    ${slider[index].title}
                  </div>
                  <div class="benefits-tab-slider__pagination-item-desc">
                    ${slider[index].desc}
                  </div>
                </div>
              </div>
            `)
          }
        }}
      >
        {
          slider.map((slide, index) => {
            return (
              <SwiperSlide className="benefits-tab-slider__item" key={index}>
                <img src={slide.imgSrc} alt=""/>
              </SwiperSlide>
            )
          })
        }
        <div className="benefits-tab-slider__pagination">
          <div className="benefits-tab-slider__pagination-inner" />
        </div>
      </Swiper>
    </section>
  )
}

export default BenefitsTab