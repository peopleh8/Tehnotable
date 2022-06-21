import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger'
import InertiaPlugin from '../../../../node_modules/gsap/InertiaPlugin'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import './GalleryIntro.scss'

import { isBrowser } from '../../../utils/isBrowser'

import gallery1 from '../../../images/gallery-page-1.jpg'
import gallery2 from '../../../images/gallery-page-2.png'
import gallery3 from '../../../images/gallery-page-3.jpg'
import gallery4 from '../../../images/gallery-page-4.jpg'
import gallery5 from '../../../images/gallery-page-5.jpg'
import gallery6 from '../../../images/gallery-page-6.jpg'
import gallery7 from '../../../images/gallery-page-7.jpg'
import gallery8 from '../../../images/gallery-page-8.jpg'
import gallery9 from '../../../images/gallery-page-9.jpg'

const GalleryIntro = () => {
  const gallery = useRef()
  const forGallery = -.5
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

    if (gallery.current) gallery.current.style = `transform: translate(${positionX / forGallery}%, ${positionY / forGallery}%) scale(3)`

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
    gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger)

    gsap.from('.gallery-intro__wrapper', 3, { delay: .5, opacity: 0, scale: .9 })

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        setMouseParallaxStyle()

        if (isBrowser()) window.addEventListener('mousemove', calculateParallax)
      },
      '(max-width: 1024px)': () => {
        Draggable.create('.gallery-intro__inner', {
          bounds: '.gallery-intro',
          inertia: true
        })
      }
    })
  }, [])

  return (
    <section className="intro gallery-intro">
      <div className="gallery-intro__wrapper">
        <div className="gallery-intro__inner" ref={gallery}>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery1} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery2} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery3} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery4} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery5} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery6} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery7} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery8} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery9} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery1} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery2} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery3} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery4} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery5} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery6} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery7} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery8} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery9} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery1} alt=""/>
            </div>
          </div>
          <div className="gallery-intro__item">
            <div className="gallery-intro__item-inner">
              <div className="gallery-intro__item-title">
                <span>Some Title</span>
              </div>
              <img src={gallery2} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryIntro