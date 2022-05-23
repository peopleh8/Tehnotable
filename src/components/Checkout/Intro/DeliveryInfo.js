import React from 'react'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'

const DeliveryInfo = ({ register, errors, isSubmitting }) => {
  return (
    <div className="intro-checkout-delivery__info">
      <div className="intro-checkout-delivery__info-title-wrapper title-wrapper">
        <div className="intro-checkout-delivery__info-title title title--small">ORDER SUMMARY</div>
      </div>
      <div className="intro-checkout-delivery__info-cost">
        <div className="intro-checkout-delivery__info-cost-inner">
          <div className="intro-checkout-delivery__info-cost-title">SUBTOTAL</div>
          <div className="intro-checkout-delivery__info-cost-price"><span>41 500</span> uah</div>
        </div>
        <div className="intro-checkout-delivery__info-cost-inner">
          <div className="intro-checkout-delivery__info-cost-title">total</div>
          <div className="intro-checkout-delivery__info-cost-price"><span>41 500</span> uah</div>
        </div>
      </div>
      <div className="intro-checkout-delivery__info-discount">
        <label className="intro-checkout-delivery__info-discount-title local-title local-title--black" htmlFor="delivery-discount">DISCOUNT CODE</label>
        <div className="intro-checkout-delivery__info-discount-inner">
          <div className="intro-checkout-delivery__info-discount-inp-wrapper">
            <input
              className="intro-checkout-delivery__info-discount-inp"
              type="text"
              id="delivery-discount"
              autoComplete="off"
              {...register('code', {
                pattern: {
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: 'Code is invalid'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="intro-checkout-delivery__info-discount-placeholder">ac0913</span>
            {errors?.code && <span className="intro-checkout-content__error form-error">{errors?.code?.message || 'Error'}</span>}
          </div>
          <div className="intro-checkout-delivery__info-discount-btn-wrapper">
            <button className="intro-checkout-delivery__info-discount-btn form-btn" type="button">
              <span>apply</span>
              <span>apply</span>
            </button>
          </div>
        </div>
      </div>
      <div className="intro-checkout-delivery__info-btn-wrapper">
        <button className={`intro-checkout-delivery__info-btn form-btn ${isSubmitting ? 'disabled' : ''}`} type="submit" disabled={isSubmitting}>
          <span>place order</span>
          <span>place order</span>
        </button>
      </div>
    </div>
  )
}

export default DeliveryInfo