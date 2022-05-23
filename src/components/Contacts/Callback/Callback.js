import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Callback.scss'

import CallBackForm from './CallbackForm'

const Callback = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let callbackTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.callback',
        start: 'center bottom'
      }
    })

    callbackTl
      .from('.callback__title', .5, { y: '100%', onComplete() {
        callbackTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.callback-form__top > *', .5, { opacity: 0, stagger: .05, onComplete() {
        callbackTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.callback-form__label', .5, { y: -20, opacity: 0, stagger: .05, onComplete() {
        callbackTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')
      .from('.callback-form__bot > *', .5, { opacity: 0, stagger: .1, onComplete() {
        callbackTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    return () => {
      callbackTl.kill()
    }
  }, [])

  return (
    <section className="callback">
      <div className="container">
        <div className="callback__title-wrapper title-wrapper">
          <div className="callback__title title title--small">Write to us</div>
        </div>
        <CallBackForm />
      </div>
    </section>
  )
}

export default Callback