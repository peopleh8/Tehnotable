import React from 'react'

import sprite from '../../../icons/sprite.svg'

const PaymentInfo = () => {
  return (
    <div className="intro-checkout-content__item">
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">PAYMENT INFO</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="payment-1" type="radio" name="payment" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-1">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#liqpay`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">liqpay</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="payment-2" type="radio" name="payment" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-2">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#privatbank`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">installments by PrivatBank</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="payment-3" type="radio" name="payment" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-3">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#monobank`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">installments by monobank</span>
            </span>
          </label>
        </div>
        <div className="intro-checkout-content__item-elem checkout-elem">
          <input className="intro-checkout-content__item-radio checkout-elem__radio" id="payment-4" type="radio" name="payment" />
          <label className="intro-checkout-content__item-label checkout-elem__label" htmlFor="payment-4">
            <span className="intro-checkout-content__item-icon checkout-elem__icon">
              <svg><use href={`${sprite}#portmoney`} /></svg>
            </span>
            <span className="intro-checkout-content__item-btn checkout-elem__btn">
              <span className="intro-checkout-content__item-check checkout-elem__check">
                <span className="intro-checkout-content__item-check-inner checkout-elem__check-inner" />
              </span>
              <span className="intro-checkout-content__item-text checkout-elem__text">payment to the current account</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default PaymentInfo