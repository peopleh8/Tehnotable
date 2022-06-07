import React, { useEffect, useRef, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'

import './Intro.scss'

import { PrefixContext } from '../../../context/PrefixProvider'

import { isBrowser } from '../../../utils/isBrowser'

import errorBg from '../../../images/bg.jpg'

const ThanksIntro = ({ deliveryCode }) => {
  let prefix = useContext(PrefixContext)

  const bg = useRef()
  const forIntro = 17
  const speed = .05

  let positionX = 0,
    positionY = 0,
    coordXpercent = 0,
    coordYpercent = 0

  const setMouseParallaxStyle = () => {
    const disX = coordXpercent - positionX
    const disY = coordYpercent - positionY

    positionX = positionX + (disX * speed)
    positionY = positionY + (disY * speed)

    if (bg.current) bg.current.style = `transform: translate(${positionX / forIntro}%, ${positionY / forIntro}%) scale(1.1)`

    requestAnimationFrame(setMouseParallaxStyle)
  }

  const calculateParallax = e => {
    const parallaxWidth = window.innerWidth
    const parallaxHeight = window.innerHeight

    const coordX = e.pageX - parallaxWidth / 2
    const coordY = e.pageY - parallaxHeight / 2

    coordXpercent = coordX / parallaxWidth * 100
    coordYpercent = coordY / parallaxHeight * 100
  }

  useEffect(() => {
    setMouseParallaxStyle()

    let thanksIntroTl = gsap.timeline()

    thanksIntroTl.from('.thanks-intro__inner > *', .5, { delay: .2, y: 50, opacity: 0, stagger: .1, onComplete() {
      thanksIntroTl.set(this.targets(), { clearProps: 'all' })
    }})

    if (isBrowser()) {
      if (window.innerWidth > 1024) window.addEventListener('mousemove', calculateParallax)
    }

    return () => {
      thanksIntroTl.kill()

      if (isBrowser()) window.removeEventListener('mousemove', calculateParallax)
    }
  }, [])

  return (
    <section className="intro thanks-intro general-page section">
      <div className="thanks-intro__bg general-page__bg" ref={bg}>
        <img src={errorBg} alt="" width={1920} height={1180}/>
      </div>
      <div className="container">
        <div className="thanks-intro__inner general-page__inner">
          <h1 className="thanks-intro__title">
            thanks <br/> for <span>your order</span>
          </h1>
          <div className="thanks-intro__number">
            № <span>{deliveryCode || 'Some delivery code'}</span>
          </div>
          <p className="thanks-intro__desc">
            Our manager will contact you
          </p>
          <Link className="thanks-intro__btn form-btn" to={prefix}>
            <span>Back homepage</span>
            <span>Back homepage</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ThanksIntro