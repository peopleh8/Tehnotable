import React  from 'react'
import { Link } from 'gatsby'

import { useForm } from 'react-hook-form'

import loginFb from '../../../images/login-fb.svg'
import loginGoogle from '../../../images/login-google.svg'

const RegistrationContent = () => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
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

  return (
    <div className="intro-login__content intro-login-content">
      <div className="intro-login-content__inner">
        <div className="intro-login__title-wrapper title-wrapper">
          <h1 className="intro-login__title title title--big">Create account</h1>
        </div>
        <div className="intro-login__social">
          <p className="intro-login__desc">with the help of social networks</p>
          <div className="intro-login__social-btns">
            <button className="intro-login__social-btn">
              <span className="intro-login__social-btn-icon">
                <img src={loginFb} alt=""/>
              </span>
              <span className="intro-login__social-btn-text">Login with Facebook</span>
            </button>
            <button className="intro-login__social-btn">
              <span className="intro-login__social-btn-icon">
                <img src={loginGoogle} alt=""/>
              </span>
              <span className="intro-login__social-btn-text">Login with Google</span>
            </button>
          </div>
          <p className="intro-login__desc">or</p>
        </div>
        <form className="intro-login__form" onSubmit={handleSubmit(formSubmit, formError)}>
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-name">Name</label>
            <div className="intro-login__inp-inner">
              <input
                className="intro-login__inp"
                id="login-name"
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
              {errors?.name && <span className="intro-login__error form-error">{errors?.name?.message}</span>}
            </div>
          </div>
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
          <div className="intro-login__inp-wrapper">
            <label className="intro-login__label local-title local-title--black" htmlFor="login-password">Password</label>
            <div className="intro-login__inp-inner">
              <input
                className="intro-login__inp"
                id="login-password"
                type="password"
                autoComplete="off"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 5,
                    message: 'Password length is less then 5 characters'
                  }
                })}
              />
              {errors?.password && <span className="intro-login__error form-error">{errors?.password?.message}</span>}
            </div>
          </div>
          <div className="intro-login__btn-wrapper">
            <button className={`intro-login__btn form-btn ${isSubmitSuccessful ? 'disabled' : ''}`} type="submit" disabled={isSubmitSuccessful}>
              <span>Create account</span>
              <span>Create account</span>
            </button>
          </div>
        </form>
        <div className="intro-login__links intro-login__links--registration">
          <span className="intro-login__text">Have an account?</span>
          <Link className="intro-login__link intro-login__link--registration" to="/login/">Sign IN</Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrationContent