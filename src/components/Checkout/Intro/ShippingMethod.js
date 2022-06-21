import React from 'react'

import sprite from '../../../icons/sprite.svg'

const ShippingMethod = () => {
  return (
    <div className="intro-checkout-content__item">
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">SHIPPING METHOD</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="delivery-1" type="radio" name="delivery" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-1">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#user`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">Pickup from the store</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="delivery-2" type="radio" name="delivery" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-2">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#newpost`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">To the branch "Nova Poshta"</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="delivery-3" type="radio" name="delivery" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="delivery-3">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#newpost`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">by courier "Nova Poshta"</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ShippingMethod