import React, { useEffect } from 'react'

import gsap from 'gsap'

import LoginPhoto from '../../LoginPhoto/LoginPhoto'
import LoginContent from './LoginContent'

import '../../Layout/Login.scss'

const LoginIntro = () => {
  useEffect(() => {
    let introLoginTl = gsap.timeline()

    introLoginTl
      .from('.intro-login__title', .5, { y: '100%', delay: 1, onComplete() {
        introLoginTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-login__social', .5, { y: 60, opacity: 0, onComplete() {
        introLoginTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
        introLoginTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.intro-login__links--login', .5, { y: 60, opacity: 0, onComplete() {
        introLoginTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
  }, [])

  return (
    <section className="intro intro-login">
      <LoginPhoto />
      <LoginContent />
    </section>
  )
}

export default LoginIntro