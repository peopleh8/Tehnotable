import React, { useEffect } from 'react'

import gsap from 'gsap'

import './Intro.scss'

const AboutIntro = () => {
  useEffect(() => {
    let aboutIntroTl = gsap.timeline()

    aboutIntroTl
      .from('.intro-about__title', .6, { x: -100, opacity: 0, delay: .2, onComplete() {
        aboutIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-about__text', .6, { x: -100, opacity: 0, stagger: .1, onComplete() {
        aboutIntroTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      aboutIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro intro-about">
      <div className="container">
        <div className="intro-about__inner">
          <div className="intro-about__title">
            They allow you to work standing up from time to time, which helps to unload the back and strengthen the muscles.
          </div>
          <div className="intro-about__desc">
            <div className="intro-about__side">
              <p className="intro-about__text">
                TehnoTable is a young Ukrainian company founded with the idea to improve the lives of people who are constantly working in front of the monitors. The TehnoTable desk is designed in a way that you don’t waste your time or effort on its transformation.
              </p>
              <p className="intro-about__text">
                We made our first product in 2017. Since then, we’ve experimented a lot with design, lifting mechanism and functionality and found the best options that are already being implemented.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro