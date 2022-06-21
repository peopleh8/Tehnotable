import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import item from '../../../images/details.jpg'

const SingleProductDetails = ({ details, changeDetails, isInfoWindowClosed, closeInfoWindow }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductDetailsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content-details',
        start: 'center bottom'
      }
    })

    singleProductDetailsTl
      .from('.single-product-content-details__title', .5, { y: '100%', onComplete() {
        singleProductDetailsTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-content-details__preview img', .5, { opacity: 0, onComplete() {
        singleProductDetailsTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')
      .from('.single-product-content-details__dot', .3, { scale: 0, stagger: .1, ease: 'back' })
      .from('.single-product-content-details__info', .2, { opacity: 0, onComplete() {
        singleProductDetailsTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      singleProductDetailsTl.kill()
    }
  }, [])

  return (
    <div className="single-product-content__details single-product-content-details">
      <div className="single-product-content-details__title-wrapper title-wrapper">
        <div className="single-product-content-details__title title title--small">Details</div>
      </div>
      <div className="single-product-content-details__preview">
        <div className="single-product-content-details__photo">
          <img src={item} alt="" width={865} height={630} />
          {
            details.map(item => {
              return (
                <span
                  className={`single-product-content-details__dot ${item.isActive ? 'active' : ''}`}
                  style={item.coords}
                  key={item.id}
                  onClick={e => changeDetails(item.id, e)}
                />
              )
            })
          }
        </div>
        <div
          className={
            `single-product-content-details__info 
            ${isInfoWindowClosed ? 'closed' : ''}
          `}
        >
          <div className="single-product-content-details__info-title">
            { details.some(item => item.isActive) ? details.filter(item => item.isActive)[0].title : ' ' }
          </div>
          <p className="single-product-content-details__info-desc">
            { details.some(item => item.isActive) ? details.filter(item => item.isActive)[0].desc : ' ' }
          </p>
          <span
            className="single-product-content-details__info-icon"
            onClick={closeInfoWindow}
          />
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetails