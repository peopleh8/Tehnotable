import React, { useEffect, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'
import { phoneBlur } from '../../../utils/phoneBlur'

const CallBackForm = () => {
  let thanksBtn = useRef()

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
    control
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    alert(JSON.stringify(data))

    for (let i = 0; i < e.target.length; i++) {
      e.target[i].nextElementSibling && e.target[i].nextElementSibling.classList.remove('focused')
    }

    reset()
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => {
    isSubmitSuccessful && thanksBtn.current.click()
  }, [isSubmitSuccessful])

  return (
    <form className="callback__form callback-form" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="callback-form__top">
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-name">Name</label>
          <div className="callback-form__inp-inner">
            <input
              className="callback-form__inp"
              type="text"
              id="callback-name"
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
            <span className="callback-form__placeholder">Your name</span>
            {errors?.name && <span className="callback-form__error form-error">{errors?.name?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-email">Email</label>
          <div className="callback-form__inp-inner">
            <input
              className="callback-form__inp"
              type="text"
              id="callback-email"
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
            <span className="callback-form__placeholder">mail@mail.com</span>
            {errors?.email && <span className="callback-form__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__inp-wrapper">
          <label className="callback-form__label" htmlFor="callback-phone">phone</label>
          <div className="callback-form__inp-inner">
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => {
                return <InputMask
                  mask="+380 (99) 999-99-99"
                  maskPlaceholder={null}
                  className="callback-form__inp"
                  type="tel"
                  id="callback-phone"
                  autoComplete="off"
                  {...register('phone', {
                    required: 'Phone is required',
                    onChange: fieldChange,
                    onBlur: phoneBlur
                  })}
                />
              }}
            />
            <span className="callback-form__placeholder callback-form__placeholder--phone">+380 (--) ---_--_--</span>
            {errors?.phone && <span className="callback-form__error form-error">{errors?.phone?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="callback-form__textarea-wrapper">
          <label className="callback-form__label" htmlFor="callback-message">message</label>
          <div className="callback-form__textarea-inner">
            <textarea
              className="callback-form__textarea"
              id="callback-message"
              autoComplete="off"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 5,
                  message: 'Message length is less then 5 characters'
                },
                onChange: fieldChange,
                onBlur: fieldBlur
              })}
            />
            <span className="callback-form__placeholder">write here</span>
            {errors?.message && <span className="callback-form__error form-error">{errors?.message?.message || 'Error'}</span>}
          </div>
        </div>
      </div>
      <div className="callback-form__bot">
        <p className="callback-form__text">By pressing the button, you will be ready for the processing of personaldata</p>
        <div className="callback-form__btn-wrapper">
          <button className={`callback-form__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}>
            <span>Submit</span>
            <span>Submit</span>
          </button>
          <button
            className="callback-form__btn-hidden"
            ref={thanksBtn}
            type="button"
            data-fancybox="thanks"
            data-src="#thanks-modal"
            style={{ display: 'none' }}
          >
            Thanks
          </button>
        </div>
      </div>
    </form>
  )
}

export default CallBackForm