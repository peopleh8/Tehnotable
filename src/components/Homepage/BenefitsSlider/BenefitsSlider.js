import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './BenefitsSlider.scss'

import benefitsSlider1 from '../../../images/benefits-slider-1.jpg'
import benefitsSlider2 from '../../../images/benefits-slider-2.jpg'
import benefitsSlider3 from '../../../images/benefits-slider-3.jpg'

const BenefitsSlider = () => {
  let [ slider ] = useState([
    {
      imgSrc: benefitsSlider1,
      title: 'Allows you to be <br/> in shape',
      desc: 'Opportunity to stay energetic during the working day.'
    },
    {
      imgSrc: benefitsSlider2,
      title: 'The condition of the <br/> reproductive system improves',
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
      title: 'The condition of the <br/> reproductive system improves',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    },
    {
      imgSrc: benefitsSlider3,
      title: 'PRODUCTIVITY <br/> INCREASES',
      desc: 'The load on the spine in a standing position is 40% lower than sitting.'
    }
  ])

  let section = useRef(),
      wrapper = useRef()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let tlBenefitsSlider = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-slider__marquee",
        scrub: 0.5,
      }
    })

    tlBenefitsSlider.to('.benefits-slider__marquee', {
      xPercent: -200,
      ease: "none",
    })

    return () => {
      tlBenefitsSlider.kill()
    }
  }, [])

  return (
    <section className="benefits-slider" ref={section}>
      <div className="benefits-slider__marquee" ref={wrapper}>
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
    </section>
  )
}

export default BenefitsSlider