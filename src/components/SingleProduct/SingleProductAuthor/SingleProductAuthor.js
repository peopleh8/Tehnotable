import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './SIngleProductAuthor.scss'

import SingleProductPhoto from './SingleProductPhoto'
import SingleProductInfo from './SingleProductInfo'

const SingleProductAuthor = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductAuthorTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-author',
        start: 'center bottom'
      }
    })

    singleProductAuthorTl
      .from('.single-product-author__photo', 1.2, { scaleX: 0, ease: 'Expo.easeInOut', onComplete() {
        singleProductAuthorTl.set(this.targets(), { clearProps: 'all' })
      }})
      .to('.single-product-author-photo__preview', 1, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut' }, '-=.6')
      .from('.single-product-author-photo__name', .5, { y: -20, opacity: 0, onComplete() {
        singleProductAuthorTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.single-product-author-photo__position', .5, { y: -20, opacity: 0, onComplete() {
        singleProductAuthorTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.single-product-author-info > *', .6, { y: -70, opacity: 0, stagger: -.1, onComplete() {
        singleProductAuthorTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.35')

    return () => {
      singleProductAuthorTl.kill()
    }
  }, [])

  return (
    <section className="single-product-author">
      <div className="container">
        <div className="single-product-author__inner">
          <SingleProductPhoto />
          <SingleProductInfo />
        </div>
      </div>
    </section>
  )
}

export default SingleProductAuthor