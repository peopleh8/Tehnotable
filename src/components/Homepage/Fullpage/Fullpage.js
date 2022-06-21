import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Fullpage.scss'

import DrawLogo from '../../DrawLogo/DrawLogo'
import FullpageSlider from './FullpageSlider'

import { isBrowser } from '../../../utils/isBrowser'
import sprite from "../../../icons/sprite.svg";

const Fullpage = ({ setIsHideHeaderFullpage }) => {
  let fullpage = useRef(null)

  let [ isMobile, setIsMobile ] = useState(false)
  let [ isTablet, setIsTablet ] = useState(false)
  let [ isDraw, setIsDraw ] = useState(false)

  let resizeCount = 1
  let startTl = null
  let endTl = null

  const resizeWindow = () => {
    if (isBrowser()) {
      resizeCount === 1 && window.dispatchEvent(new Event('resize'))
      resizeCount++
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        startTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.work-position-wrapper',
            start: 'bottom bottom',
            onEnter: () => {
              gsap.to(window, {duration: 1, scrollTo: '.fullpage', ease: "Power1.easeInOut"})

              if (isBrowser()) {
                document.body.style.overflow = 'hidden'
                fullpage.current.previousElementSibling.style.overflowY = 'scroll'
                fullpage.current.nextElementSibling.style.overflowY = 'scroll'
              }

              setIsHideHeaderFullpage(true)
              setIsDraw(true)
            }
          }
        })

        endTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.discount-wrapper',
            start: 'top top',
            onLeaveBack: () => {
              gsap.to(window, {duration: 1, scrollTo: '.fullpage', ease: "Power1.easeInOut"})

              if (isBrowser()) {
                document.body.style.overflow = 'hidden'
                fullpage.current.previousElementSibling.style.overflowY = 'scroll'
                fullpage.current.nextElementSibling.style.overflowY = 'scroll'
              }

              setIsHideHeaderFullpage(true)
              setIsDraw(true)
            }
          }
        })

        setIsTablet(false)
      },
      '(max-width: 1024px)': () => setIsTablet(true),
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })



    if (isBrowser()) window.addEventListener('scroll', resizeWindow)

    return () => {
      startTl && startTl.kill()
      endTl && endTl.kill()

      if (isBrowser()) window.removeEventListener('scroll', resizeWindow)
    }
  }, []);

  return (
    <section className='fullpage' id="fullpage" ref={fullpage}>
      { isBrowser() && !isTablet && <DrawLogo isDraw={isDraw} /> }
      <FullpageSlider isMobile={isMobile} setIsHideHeaderFullpage={setIsHideHeaderFullpage} setIsDraw={setIsDraw} />
      <div className="fullpage-slider__nav">
        <div className="fullpage-slider__btn fullpage-slider__prev">
          <svg><use href={`${sprite}#prev-arrow`} /></svg>
        </div>
        <div className="fullpage-slider__btn fullpage-slider__next">
          <svg><use href={`${sprite}#next-arrow`} /></svg>
        </div>
      </div>
    </section>
  )
}

export default Fullpage