import React, { useEffect } from 'react'

import './MainOrder.scss'

import MainOrderContent from './MainOrderContent'
import MainOrderPhoto from './MainOrderPhoto'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const MainOrder = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mainOrderTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-order',
        start: 'center bottom'
      }
    })

    mainOrderTl
      .from('.main-order-content > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
        mainOrderTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.main-order-photo', .6, { x: 100, opacity: 0, onComplete() {
        mainOrderTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      mainOrderTl.kill()
    }
  }, [])

  return (
    <section className="main-order">
      <div className="container">
        <div className="main-order__inner">
          <MainOrderContent />
          <MainOrderPhoto />
        </div>
      </div>
    </section>
  )
}

export default MainOrder