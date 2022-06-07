import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

const IntroForm = () => {
  let thanksBtn = useRef()

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    alert(JSON.stringify(data))
    reset()
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => {
    isSubmitSuccessful && thanksBtn.current.click()
  }, [isSubmitSuccessful])

  return (
    <form className="faq-intro__form faq-intro-form" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="faq-intro-form__inner">
        <div className="faq-intro-form__title title title--small">Leave a question</div>
        <div className="faq-intro-form__inps">
          <div className="faq-intro-form__inp-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-name">Your name</label>
            <div className="faq-intro-form__inp-inner">
              <input
                className="faq-intro-form__inp"
                id="faq-name"
                type="text"
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
                  }
                })}
              />
              {errors?.name && <span className="faq-intro-form__error form-error">{errors?.name?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__inp-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-email">Your Email</label>
            <div className="faq-intro-form__inp-inner">
              <input
                className="faq-intro-form__inp"
                id="faq-email"
                type="text"
                autoComplete="off"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Email is invalid'
                  }
                })}
              />
              {errors?.email && <span className="faq-intro-form__error form-error">{errors?.email?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__textarea-wrapper">
            <label className="faq-intro-form__label local-title local-title--black" htmlFor="faq-question">Your Question</label>
            <div className="faq-intro-form__textarea-inner">
              <textarea
                className="faq-intro-form__textarea"
                id="faq-question"
                autoComplete="off"
                {...register('question', {
                  required: 'Message is required',
                  minLength: {
                    value: 5,
                    message: 'Message length is less then 5 characters'
                  }
                })}
              />
              {errors?.question && <span className="callback-form__error form-error">{errors?.question?.message || 'Error'}</span>}
            </div>
          </div>
          <div className="faq-intro-form__btn-wrapper">
            <button
              className={`faq-intro-form__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`}
              type="submit">
              <span>Leave</span>
              <span>Leave</span>
            </button>
            <button
              className="faq-intro-form__btn-hidden"
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
      </div>
    </form>
  )
}

export default IntroForm