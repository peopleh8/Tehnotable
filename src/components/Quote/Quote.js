import React, {useEffect} from 'react'

import './Quote.scss'

import quote from '../../images/quote.png'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Quote = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let quoteTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.quote',
        start: 'center bottom'
      }
    })

    quoteTl
      .from('.quote-content > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
        quoteTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.quote__inner img', .6, { x: 200, opacity: 0, onComplete() {
        quoteTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      quoteTl.kill()
    }
  })
  return (
    <section className="quote">
      <div className="container">
        <div className="quote__wrapper">
          <div className="quote__inner">
            <div className="quote__content quote-content">
              <div className="quote-content__title">
                <span>ORDER</span> A HEIGHT ADJUSTABLE STANDING DESK TO WORK WHEN SITTING AND STANDING UP NOW
              </div>
              <button className="quote-content__btn btn btn--big">
                <span className="btn__inner">ORDER TABLE</span>
              </button>
            </div>
            <img src={quote} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote