import React from 'react'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'

const ShippingAddress = ({ register, errors }) => {
  return (
    <div className="intro-checkout-content__item">
      <div className="intro-checkout-content__item-title-wrapper title-wrapper">
        <div className="intro-checkout-content__item-title title title--small">SHIPPING ADDRESS</div>
      </div>
      <div className="intro-checkout-content__item-inner">
        <div className="intro-checkout-content__inp-wrapper">
          <label className="intro-checkout-content__label local-title local-title--black" htmlFor="checkout-name">full name</label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              id="checkout-name"
              type="name"
              autoComplete="off"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name length is less then 3 characters'
                },
                pattern: {
                  value: /^[a-zіїєыэа-яaA-ZІЇЄЫЭяа-я\s]+$/,
                  message: 'Name is invalid'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="intro-checkout-content__placeholder">your name</span>
            {errors?.name && <span className="intro-checkout-content__error form-error">{errors?.name?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="intro-checkout-content__inp-wrapper">
          <label className="intro-checkout-content__label local-title local-title--black" htmlFor="checkout-city">city</label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              id="checkout-city"
              type="city"
              autoComplete="off"
              {...register('city', {
                required: 'City is required',
                minLength: {
                  value: 1,
                  message: 'City length is less then 1 characters'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="intro-checkout-content__placeholder">kyiv</span>
            {errors?.city && <span className="intro-checkout-content__error form-error">{errors?.city?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="intro-checkout-content__inp-wrapper">
          <label className="intro-checkout-content__label local-title local-title--black" htmlFor="checkout-street">street</label>
          <div className="intro-checkout-content__inp-inner">
            <input
              className="intro-checkout-content__inp"
              id="checkout-street"
              type="street"
              autoComplete="off"
              {...register('street', {
                required: 'Street is required',
                minLength: {
                  value: 1,
                  message: 'Street length is less then 1 characters'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="intro-checkout-content__placeholder">st.</span>
            {errors?.street && <span className="intro-checkout-content__error form-error">{errors?.street?.message || 'Error'}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress