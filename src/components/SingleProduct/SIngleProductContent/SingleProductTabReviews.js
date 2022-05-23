import React, { useState } from 'react'

import SingleProductModal from './SingleProductModal'

import sprite from '../../../icons/sprite.svg'

const SingleProductTabReviews = () => {
  let [ isVisible, setIsVisible ] = useState(false)

  return (
    <div className="single-product-content-tabs__body-reviews">
      <div className="single-product-content-tabs__body-reviews-item">
        <div className="single-product-content-tabs__body-reviews-info">
          <div className="single-product-content-tabs__body-reviews-side">
            <div className="single-product-content-tabs__body-reviews-name">Maria</div>
            <div className="single-product-content-tabs__body-reviews-rating" data-rating="4">
              {new Array(5).fill('', 0, 5).map(() => {
                return <svg><use href={`${sprite}#star`} /></svg>
              })}
            </div>
          </div>
          <div className="single-product-content-tabs__body-reviews-side">
            <div className="single-product-content-tabs__body-reviews-date">10.03.2022</div>
          </div>
        </div>
        <p className="single-product-content-tabs__body-reviews-text">
          TehnoTable’s gaming desk solves this problem as it can be turned into a standing platform by simply pressing a button. Just make sure the cords are long enough not to unplug when in standby mode.
        </p>
      </div>
      <div className="single-product-content-tabs__body-reviews-item">
        <div className="single-product-content-tabs__body-reviews-info">
          <div className="single-product-content-tabs__body-reviews-side">
            <div className="single-product-content-tabs__body-reviews-name">Maria</div>
            <div className="single-product-content-tabs__body-reviews-rating" data-rating="2">
              {new Array(5).fill('', 0, 5).map((item, index) => {
                return <svg data-rating-item={5 - index}><use href={`${sprite}#star`} /></svg>
              })}
            </div>
          </div>
          <div className="single-product-content-tabs__body-reviews-side">
            <div className="single-product-content-tabs__body-reviews-date">10.03.2022</div>
          </div>
        </div>
        <p className="single-product-content-tabs__body-reviews-text">
          TehnoTable’s gaming desk solves this problem as it can be turned into a standing platform by simply pressing a button. Just make sure the cords are long enough not to unplug when in standby mode.
        </p>
        <div className="single-product-content-tabs__body-btn-wrapper">
          <button
            className="single-product-content-tabs__body-btn form-btn"
            type="button"
            data-fancybox
            data-src="#review-modal"
          >
            <span>Add a comment</span>
            <span>Add a comment</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductTabReviews