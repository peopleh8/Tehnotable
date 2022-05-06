import React, { useEffect, useState } from 'react'

import { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Gallery.scss'
import 'swiper/scss'
import 'swiper/scss/autoplay'

import gallery1 from '../../images/gallery-1.jpg'
import gallery2 from '../../images/gallery-2.jpg'
import gallery3 from '../../images/gallery-3.jpg'
import gallery4 from '../../images/gallery-4.jpg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Gallery = () => {
  let [ slider ] = useState([
    {
      imgSrc: gallery1
    },
    {
      imgSrc: gallery2
    },
    {
      imgSrc: gallery3
    },
    {
      imgSrc: gallery4
    },
    {
      imgSrc: gallery1
    },
    {
      imgSrc: gallery2
    },
    {
      imgSrc: gallery3
    },
    {
      imgSrc: gallery4
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let galleryTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'center bottom'
      }
    })

    galleryTl
      .from('.gallery__title', .5, { y: '100%', onComplete() {
        galleryTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      galleryTl.kill()
    }
  }, [])

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__title-wrapper title-wrapper">
          <div className="gallery__title title title--small">Gallery</div>
        </div>
      </div>
      <div className="gallery__slider-wrapper">
        <Swiper
          className="gallery__slider gallery-slider"
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          spaceBetween={30}
          slidesPerView={'auto'}
          allowTouchMove={false}
          disableOnInteraction={true}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
          }}
        >
          {
            slider.map((slide, index) => {
              return (
                <SwiperSlide className="gallery-slider__item" key={index}>
                  <img src={slide.imgSrc} alt=""/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery