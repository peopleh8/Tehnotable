import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Subscribe.scss'

import { fieldChange } from '../../../utils/fieldChange'
import { fieldBlur } from '../../../utils/fieldBlur'

const Subscribe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let subscribeTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.subscribe',
        start: 'center bottom'
      }
    })

    subscribeTl
      .from('.subscribe__form-label', .5, { y: -30, opacity: 0, onComplete() {
        subscribeTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.subscribe__form-inp-inner', .5, { y: -30, opacity: 0, onComplete() {
        subscribeTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.subscribe__form-btn-wrapper', .5, { y: -30, opacity: 0, onComplete() {
        subscribeTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')
      .from('.subscribe__desc', .5, { y: -30, opacity: 0, onComplete() {
        subscribeTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    return () => {
      subscribeTl.kill()
    }
  }, [])

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

    for (let i = 0; i < e.target.length; i++) {
      e.target[i].nextElementSibling && e.target[i].nextElementSibling.classList.remove('focused')
    }

    reset()
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <section className="subscribe" onSubmit={handleSubmit(formSubmit, formError)}>
      <div className="container">
        <div className="subscribe__inner">
          <div className="subscribe__side">
            <form className="subscribe__form">
              <div className="subscribe__form-inp-wrapper">
                <label className="subscribe__form-label local-title local-title--grey" htmlFor="subscribe-email">subscribe to news</label>
                <div className="subscribe__form-inp-inner">
                  <input
                    className="subscribe__form-inp"
                    id="subscribe-email"
                    type="text"
                    name="email"
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
                  <span className="subscribe__form-placeholder">Email</span>
                  {errors?.email && <span className="subscribe__form-error form-error">{errors?.email?.message || 'Error'}</span>}
                </div>
              </div>
              <div className="subscribe__form-btn-wrapper">
                <button className={`subscribe__form-btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}>
                  <span>subscribe</span>
                  <span>subscribe</span>
                </button>
              </div>
            </form>
            <p className="subscribe__desc">Only useful news and discounts, no spam</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe