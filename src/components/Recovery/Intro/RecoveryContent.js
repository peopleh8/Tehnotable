import React  from 'react'
import { Link } from 'gatsby'

import { useForm } from 'react-hook-form'

import gsap from 'gsap'

const RecoveryContent = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    alert(JSON.stringify(data))

    gsap.from('.intro-login__link-back-wrapper', .5, { y: 60, opacity: 0, delay: .5, onComplete() {
      gsap.set(this.targets(), { clearProps: 'all' })
    }})
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <div className="intro-login__content intro-login-content">
      <div className="intro-login-content__inner">
        {
          isSubmitSuccessful && <div className="intro-login__sent">
            <div className="intro-login__sent-icon check-icon">
              <svg viewBox="0 0 133 133" version="1.1">
                <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <circle id="filled-circle" fill="#000" cx="66.5" cy="66.5" r="54.5" />
                  <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5" />
                  <circle id="outline" stroke="#000" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
                  <polyline id="check" stroke="#FFFFFF" strokeWidth="4" points="41 70 56 85 92 49" />
                </g>
              </svg>
            </div>
            <div className="intro-login__sent-title-wrapper title-wrapper">
              <div className="intro-login__sent-title title title--big">Check your mail</div>
            </div>
          </div>
        }
        {
          !isSubmitSuccessful && <div className="intro-login__title-wrapper title-wrapper">
            <h1 className="intro-login__title title title--big">Password recovery</h1>
          </div>
        }
        {
          !isSubmitSuccessful && <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
            <div className="intro-login__inp-wrapper">
              <label className="intro-login__label local-title local-title--black" htmlFor="login-email">Email</label>
              <div className="intro-login__inp-inner">
                <input
                  className="intro-login__inp"
                  id="login-email"
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
                {errors?.email && <span className="intro-login__error form-error">{errors?.email?.message}</span>}
              </div>
            </div>
            <div className="intro-login__btn-wrapper">
              <button
                className={`intro-login__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}>
                <span>Password recovery</span>
                <span>Password recovery</span>
              </button>
            </div>
          </form>
        }
        {
          !isSubmitSuccessful && <div className="intro-login__links intro-login__links--recovery">
            <span className="intro-login__text">Have an account?</span>
            <Link className="intro-login__link intro-login__link--recovery" to="/registration/">Sign IN</Link>
          </div>
        }
        <div className="intro-login__link-back-wrapper">
          <Link className="intro-login__link-back" to="/login/">back</Link>
        </div>
      </div>
    </div>
  )
}

export default RecoveryContent