import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

import './Story.scss'

import sprite from '../../../icons/sprite.svg'

import story1 from '../../../images/story1.jpg'

const Story = () => {
  let [ slider ] = useState([
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2017',
      imgSrc: story1
    },
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2018',
      imgSrc: story1
    },
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2019',
      imgSrc: story1
    },
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2020',
      imgSrc: story1
    },
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2021',
      imgSrc: story1
    },
    {
      title: 'We made our first product in 2017',
      desc: 'Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.',
      btnText: '2022',
      imgSrc: story1
    }
  ])
  let curnum = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    curnum.current.innerHTML = slider[0].btnText

    let storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.story',
        start: 'center bottom'
      }
    })

    storyTl
      .from('.story__title', .5, { y: '100%', onComplete() {
        storyTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      storyTl.kill()
    }
  }, [])

  return (
    <section className="story">
      <div className="container">
        <div className="story__top">
          <div className="story__title-wrapper title-wrapper">
            <div className="story__title title title--small">Our story</div>
          </div>
          <div className="story__slider-nav">
            <div className="story__slider-btn story__slider-prev">
              <svg><use href={`${sprite}#prev-arrow`} /></svg>
            </div>
            <div className="story__slider-btn story__slider-next">
              <svg><use href={`${sprite}#next-arrow`} /></svg>
            </div>
          </div>
        </div>
        <Swiper
          className="story__slider story-slider"
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          speed={700}
          loop={true}
          autoplay={{
            delay: 10000
          }}
          navigation={{
            prevEl: '.story__slider-prev',
            nextEl: '.story__slider-next',
          }}
          pagination={{
            clickable: true,
            el: '.story-slider__pagination',
            bulletClass: 'story-slider__pagination-item',
            bulletActiveClass: 'active',
            renderBullet: (index, className) => {
              return (`
                <div class="${className}">${slider[index].btnText}</div>
              `)
            }
          }}
          onSlideChange={swiper => {
            if (swiper.initialized || swiper.runCallbacksOnInit) {
              let index = swiper.realIndex
              gsap.to(curnum.current, .2, { force3D: true, y: -10, opacity: 0, ease: 'Power2.easeOut', onComplete: () => {
                  gsap.to(curnum.current, .1, { force3D: true, y: 10 })
                  curnum.current.innerHTML = slider[index].btnText
                }})
              gsap.to(curnum.current, .2, { force3D: true, y: 0, opacity: 1, ease: 'Power2.easeOut', delay: .3 })
            }
          }}
        >
          {
            slider.map((slide, index) => {
              return (
                <SwiperSlide className="story-slider__item" key={index}>
                  <div className="story-slider__item-inner">
                    <div className="story-slider__item-content">
                      <div className="story-slider__item-title title title--small">{slide.title}</div>
                      <p className="story-slider__item-desc">{slide.desc}</p>
                    </div>
                    <div className="story-slider__item-photo">
                      <img src={slide.imgSrc} alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <div className="story-slider__pagination" />
      </div>
      <div className="story__counter" ref={curnum}>2017</div>
    </section>
  )
}

export default Story