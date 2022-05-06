import React, {useEffect, useState} from 'react'
import { Link } from 'gatsby'

import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import './RecomendedProducts.scss'

import sprite from '../../../icons/sprite.svg'

import product1 from '../../../images/product-1.jpg'
import product2 from '../../../images/product-2.jpg'
import product3 from '../../../images/product-3.png'
import product4 from '../../../images/product-4.jpg'

const RecomendedProducts = () => {
  let [ slider ] = useState([
    {
      imgSrc: product1,
      title: 'Table for schoolchildren',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah'
    },
    {
      imgSrc: product2,
      title: 'Work station WPN',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah'
    },
    {
      imgSrc: product3,
      title: 'Balancing board',
      link: '#',
      cat: 'Complementary options',
      price: '2 000 uah'
    },
    {
      imgSrc: product4,
      title: 'Table for schoolchildren',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah'
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let recomendedTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.recomended',
        start: 'center bottom'
      }
    })

    recomendedTl
      .from('.recomended__title', .5, { y: '100%', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.recomended__slider-nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})
      // .from('.recomended-slider__item.swiper-slide-active .recomended-slider__item-inner > *:not(.recomended-slider__item-link)', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
      //     recomendedTl.set(this.targets(), { clearProps: 'all' })
      // }})


    return () => {
      recomendedTl.kill()
    }
  })

  return (
    <section className="recomended">
      <div className="container">
        <div className="recomended__top">
          <div className="recomended__title-wrapper title-wrapper">
            <div className="recomended__title title title--small">Recomended products</div>
          </div>
          <div className="recomended__slider-nav">
            <div className="recomended__slider-btn recomended__slider-prev">
              <svg>
                <use href={`${sprite}#prev-arrow`} />
              </svg>
            </div>
            <div className="recomended__slider-btn recomended__slider-prev-next">
              <svg>
                <use href={`${sprite}#next-arrow`} />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          className="recomended__slider recomended-slider"
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          speed={500}
          autoplay={{
            delay: 5000
          }}
          navigation={{
            prevEl: '.recomended__slider-prev',
            nextEl: '.recomended__slider-prev-next',
          }}
          loop={true}
          onSlideChange={() => {
            gsap.from('.recomended-slider__item.swiper-slide-duplicate-active.swiper-slide-duplicate .recomended-slider__item-inner > *:not(.recomended-slider__item-link)', .6, { opacity: 0, y: 50, stagger: .1, onComplete() {
              gsap.set(this.targets(), { clearProps: 'all' })
            }})
          }}
        >
          {
            slider.map((slide, index) => {
              return (
                <SwiperSlide className="recomended-slider__item sample-item" key={index}>
                  <div className="recomended-slider__item-inner sample-item__inner">
                    <Link className="recomended-slider__item-link sample-item__link" to={slide.link} />
                    <div className="recomended-slider__item-preview sample-item__preview">
                      <img src={slide.imgSrc} alt=""/>
                    </div>
                    <div className="recomended-slider__item-cat">{slide.cat}</div>
                    <div className="recomended-slider__item-title sample-item__title">{slide.title}</div>
                    <div className="recomended-slider__item-price">{slide.price}</div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default RecomendedProducts