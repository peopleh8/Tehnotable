import React, { useEffect, useState, useCallback } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './RecomendedProducts.scss'

import RecomendedSlider from './RecomendedSlider'

import { isBrowser } from '../../utils/isBrowser'

import sprite from '../../icons/sprite.svg'

import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.png'
import product4 from '../../images/product-4.jpg'

const RecomendedProducts = () => {
  let [ slider, setSlider ] = useState([
    {
      id: 1,
      imgSrc: product1,
      title: 'Table for schoolchildren',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah',
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product1,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product2,
          isActive: false
        }
      ]
    },
    {
      id: 2,
      imgSrc: product2,
      title: 'Work station WPN',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah'
    },
    {
      id: 3,
      imgSrc: product3,
      title: 'Balancing board',
      link: '#',
      cat: 'Complementary options',
      price: '2 000 uah'
    },
    {
      id: 4,
      imgSrc: product4,
      title: 'Table for schoolchildren',
      link: '#',
      cat: 'Height-adjustable tables',
      price: '40 000 uah – 41 500 uah',
      variability: [
        {
          id: 41,
          bgColor: '#7C9EBB',
          imgSrc: product4,
          isActive: true
        },
        {
          id: 42,
          bgColor: '#D294CC',
          imgSrc: product3,
          isActive: false
        }
      ]
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let recomendedTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.recomended',
        start: 'center bottom'
      }
    })

    recomendedTl
      .from('.recomended__title', .5, { y: '100%', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.recomended__slider-nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        recomendedTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      recomendedTl.kill()
    }
  }, [])

  const changeVariability = useCallback((parentId, childId, event) => {
    let img = event.currentTarget.parentElement.parentElement.previousElementSibling,
        newImg = event.currentTarget.dataset.imgSrc

    img.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        img.classList.remove('fade')
      }, 255)

      setTimeout(() => {
        setSlider(slider.map(slide => {
          return {
            ...slide,
            imgSrc: parentId === slide.id ? newImg : slide.imgSrc,
            variability: slide.variability && slide.variability.map(item => {
              return {
                ...item,
                isActive: parentId === slide.id ? item.id === childId : item.isActive
              }
            })
          }
        }))
      }, 155)
    }
  }, [slider])

  return (
    <section className="recomended">
      <div className="container">
        <div className="recomended__top">
          <div className="recomended__title-wrapper title-wrapper">
            <div className="recomended__title title title--small">Recomended products</div>
          </div>
          <div className="recomended__slider-nav">
            <div className="recomended__slider-btn recomended__slider-prev">
              <svg>
                <use href={`${sprite}#prev-arrow`} />
              </svg>
            </div>
            <div className="recomended__slider-btn recomended__slider-prev-next">
              <svg>
                <use href={`${sprite}#next-arrow`} />
              </svg>
            </div>
          </div>
        </div>
        <RecomendedSlider slider={slider} changeVariability={changeVariability} />
      </div>
    </section>
  )
}

export default RecomendedProducts