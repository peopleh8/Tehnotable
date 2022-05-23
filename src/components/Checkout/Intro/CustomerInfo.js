import React from 'react'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'

const CustomerInfo = ({ register, errors }) => {
  return (
    <div className="intro-checkout-content__item">
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">CUSTOMER INFO</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__inp-wrapper">
          <label className="intro-checkout-content__label local-title local-title--black" htmlFor="checkout-email">Email</label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              id="checkout-email"
              type="text"
              autoComplete="off"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email is invalid'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="intro-checkout-content__placeholder">mail@mail.com</span>
            {errors?.email && <span className="intro-checkout-content__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfo