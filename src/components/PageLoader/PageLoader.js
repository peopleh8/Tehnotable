import React, { useState, useEffect } from 'react'

import gsap from 'gsap'

import './PageLoader.scss'

import DrawLogo from '../DrawLogo/DrawLogo'
import PageLoaderProgress from './PageLoaderProgress'

import { isBrowser } from '../../utils/isBrowser'

const PageLoader = () => {
  let [ isDraw, setIsDraw ] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let preloaderTl = gsap.timeline()

    preloaderTl
      .to('.page-loader__progress-percentage span', {
        textContent: 100, duration: 3.5, ease: "power1.inOut", snap: {textContent: 1}, stagger: {
          each: 0, onUpdate: function () {
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
          },
        }
      })
      .to('.page-loader__progress',3.5,{ delay: .8, y: 0, ease: 'Expo.linear' }, '-=4')
      .to('.page-loader > *',.3, { opacity: 0 }, '+=.25')
      .to('.page-loader',1.5, { scaleY: 0, ease: 'Expo.easeInOut' })
      .set('.page-loader',{ display: 'none' })

    if (isBrowser()) {
      setTimeout(() => {
        document.body.style.overflow = ''
        setIsDraw(false)
      }, 4500)
    }

    return () => {
      preloaderTl.kill()
    }
  }, [])

  return (
    <div className="page-loader">
      <div className="page-loader__logo">
        <DrawLogo isDraw={isDraw} />
      </div>
      <PageLoaderProgress />
    </div>
  )
}

export default PageLoader