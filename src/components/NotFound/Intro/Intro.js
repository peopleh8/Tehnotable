import React, { useEffect, useRef, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'

import './Intro.scss'

import { PrefixContext } from '../../../context/PrefixProvider'

import { isBrowser } from '../../../utils/isBrowser'

import wall from '../../../images/wall.jpg'
import table from '../../../images/tabel.png'


const ErrorIntro = () => {
  let prefix = useContext(PrefixContext)

  const bg = useRef()
  const tableBg = useRef()
  const forIntro = 17
  const forTable = 5
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
    if (tableBg.current) tableBg.current.style = `transform: translate(${positionX / forTable}%, ${positionY / forTable}%)`

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

    let errorIntroTl = gsap.timeline()

    errorIntroTl.from('.error-intro__btn', .5, { delay: 4, y: 30, opacity: 0, onComplete() {
      errorIntroTl.set(this.targets(), { clearProps: 'all' })
    }})

    if (isBrowser()) {
      if (window.innerWidth > 1024) window.addEventListener('mousemove', calculateParallax)
    }

    return () => {
      errorIntroTl.kill()

      if (isBrowser()) window.removeEventListener('mousemove', calculateParallax)
    }
  }, [])

  return (
    <section className="intro error-intro general-page section">
      <div className="error-intro__bg general-page__bg" ref={bg}>
        <img src={wall} alt="" width={1920} height={1180}/>
      </div>
      <div className="container">
        <div className="error-intro__inner general-page__inner">
          <svg className="error-intro__title" viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              404
            </text>
          </svg>
          <Link className="error-intro__btn form-btn" to={prefix}>
            <span>Back homepage</span>
            <span>Back homepage</span>
          </Link>
          <img src={table} alt="" ref={tableBg} />
        </div>
      </div>
    </section>
  )
}

export default ErrorIntro