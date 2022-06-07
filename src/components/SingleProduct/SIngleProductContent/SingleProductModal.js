import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'

import { isBrowser } from '../../../utils/isBrowser'
import { getScrollbarWidth } from '../../../utils/getScrollbarWidth'

import sprite from '../../../icons/sprite.svg'

const SingleProductModal = ({ setSubmited }) => {
  let commentModalTl = null
  let [ rating, setRating ] = useState(0)

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    alert(JSON.stringify({...data, rating: rating}))
    reset()
    setRating(0)
    Fancybox.close()

    if (isBrowser()) {
      setTimeout(() => {
        setSubmited(true)
      }, 100)
    }
  }

  const formError = (error, e) => {
    console.error(error)
  }

  useEffect(() => {
    Fancybox.bind("[data-fancybox='comment']", {
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
      dragToClose: false,
      parentEl: isBrowser() && document.querySelector('#___gatsby'),
      on: {
        init: () => {
          if (isBrowser()) document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
        },
        ready: () => {
          commentModalTl = gsap.timeline()

          commentModalTl
            .from('.single-product-content-modal__title', .5, { delay: .2, y: '100%', onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }})
            .from('.field-inner', .5, { y: 20, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
            .from('.single-product-content-modal__rating-inner > svg', .5, { x: -30, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.3')
            .from('.single-product-content-modal__label', .5, { y: -20, opacity: 0, stagger: .1, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.3')
            .from('.single-product-content-modal__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
                commentModalTl.set(this.targets(), { clearProps: 'all' })
              }}, '-=.2')
        },
        destroy: () => {
          commentModalTl.kill()
          if (isBrowser()) document.querySelector('.header__bot').style.paddingRight = !isSubmitSuccessful && '0'
        }
      }
    })

    return () => {
      Fancybox.destroy()
    }
  }, [])

  return (
    <div className="single-product-content__modal single-product-content-modal modal" id="review-modal" style={{ display: 'none' }}>
      <div className="single-product-content-modal__title-wrapper title-wrapper">
        <div className="single-product-content-modal__title title title--big">Add a comment</div>
      </div>
      <form className="single-product-content-modal__form" onSubmit={handleSubmit(formSubmit, formError)}>
        <div className="single-product-content-modal__inp-wrapper">
          <label className="single-product-content-modal__label local-title local-title--white" htmlFor="review-name">Your name</label>
          <div className="single-product-content-modal__inp-inner field-inner">
            <input
              className="single-product-content-modal__inp"
              type="text"
              name="name"
              id="review-name"
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
            {errors?.name && <span className="single-product-content-modal__error form-error">{errors?.name?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="single-product-content-modal__inp-wrapper">
          <label className="single-product-content-modal__label local-title local-title--white" htmlFor="review-email">Email</label>
          <div className="single-product-content-modal__inp-inner field-inner">
            <input
              className="single-product-content-modal__inp"
              type="text"
              name="email"
              id="review-email"
              autoComplete="off"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email is invalid'
                }
              })}
            />
            {errors?.email && <span className="single-product-content-modal__error form-error">{errors?.email?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="single-product-content-modal__textarea-wrapper">
          <label className="single-product-content-modal__label local-title local-title--white" htmlFor="review-message">comment</label>
          <div className="single-product-content-modal__textarea-inner field-inner">
            <textarea
              className="single-product-content-modal__textarea"
              name="message"
              id="review-message"
              autoComplete="off"
              {...register('comment', {
                required: 'Comment is required',
                minLength: {
                  value: 5,
                  message: 'Comment length is less then 5 characters'
                }
              })}
            />
            {errors?.comment && <span className="single-product-content-modal__error form-error">{errors?.comment?.message || 'Error'}</span>}
          </div>
        </div>
        <div className="single-product-content-modal__rating">
          <div className="single-product-content-modal__label local-title local-title--white">Rank</div>
          <div className="single-product-content-modal__rating-inner" data-rating={rating}>
            {new Array(5).fill('', 0, 5).map((item, index) => {
              return <svg
                data-rating-item={5 - index}
                onClick={e => setRating(e.currentTarget.dataset.ratingItem)}
              >
                <use href={`${sprite}#star-big`} />
              </svg>
            })}
          </div>
        </div>
        <div className="single-product-content-modal__btn-wrapper">
          <button className={`single-product-content-modal__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit">
            <span>Add a comment</span>
            <span>Add a comment</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default SingleProductModal