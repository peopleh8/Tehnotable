import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './BenefitsSlider.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import benefitsSlider1 from '../../../images/benefits-slider-1.jpg'
import benefitsSlider2 from '../../../images/benefits-slider-2.jpg'
import benefitsSlider3 from '../../../images/benefits-slider-3.jpg'

import sprite from '../../../icons/sprite.svg'

const BenefitsSlider = () => {
  let [ slider ] = useState([
    {
      imgSrc: benefitsSlider1,
      title: 'Allows you to be <br/> in shape',
      desc: 'Opportunity to stay energetic during the working day.'
    },
    {
      imgSrc: benefitsSlider2,
      title: 'The condition of the <br/> reproductive',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    },
    {
      imgSrc: benefitsSlider3,
      title: 'PRODUCTIVITY <br/> INCREASES',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    },
    {
      imgSrc: benefitsSlider1,
      title: 'Allows you to be <br/> in shape',
      desc: 'Opportunity to stay energetic during the working day.'
    },
    {
      imgSrc: benefitsSlider2,
      title: 'The condition of the <br/> reproductive',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    },
    {
      imgSrc: benefitsSlider3,
      title: 'PRODUCTIVITY <br/> INCREASES',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    }
  ])
  let [ isMobileSlider, setMobileSlider ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let tlBenefitsSlider = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-slider__marquee",
        scrub: 0.5,
      }
    })

    ScrollTrigger.matchMedia({
      '(min-width: 745px)': () => {
        setMobileSlider(false)

        tlBenefitsSlider.to('.benefits-slider__marquee', {
          xPercent: -200,
          ease: "none",
        })
      },
      '(max-width: 744px)': () => {
        setMobileSlider(true)
      }
    })



    return () => {
      tlBenefitsSlider.kill()
    }
  }, [])

  return (
    <section className="benefits-slider">
      {
        !isMobileSlider
          ? <div className="benefits-slider__marquee">
            {
              slider.map((slide, index) => {
                return (
                  <div className="benefits-slider__marquee-item benefits-slider-item" key={index}>
                    <div className="benefits-slider-item__title title title--small" dangerouslySetInnerHTML={{ __html: slide.title }} />
                    <p className="benefits-slider-item__desc">{slide.desc}</p>
                    <div className="benefits-slider-item__photo">
                      <img src={slide.imgSrc} alt="" width={480} height={670} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        : <Swiper
            className="benefits-slider__marquee"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={500}
            loop={true}
            navigation={{
              prevEl: '.benefits-slider__nav-prev',
              nextEl: '.benefits-slider__nav-next',
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
          >
            {
              slider.map((slide, index) => {
                return (
                  <SwiperSlide className="benefits-slider__marquee-item benefits-slider-item" key={index}>
                    <div className="benefits-slider-item__title title title--small" dangerouslySetInnerHTML={{ __html: slide.title }} />
                    <p className="benefits-slider-item__desc">{slide.desc}</p>
                    <div className="benefits-slider-item__photo">
                      <img src={slide.imgSrc} alt="" width={480} height={670} />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
      }
      {
        isMobileSlider
          && <div className="benefits-slider__nav">
                <div className="benefits-slider__nav-btn benefits-slider__nav-prev">
                  <svg><use href={`${sprite}#prev-arrow`} /></svg>
                </div>
                <div className="benefits-slider__nav-btn benefits-slider__nav-next">
                  <svg><use href={`${sprite}#next-arrow`} /></svg>
                </div>
             </div>
      }
    </section>
  )
}

export default BenefitsSlider