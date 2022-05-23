import React, { useEffect } from 'react'

import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

import LoginPhoto from '../../LoginPhoto/LoginPhoto'
import RecoveryContent from './RecoveryContent'

import '../../Layout/Login.scss'

const RecoveryIntro = () => {
  useEffect(() => {
    let introRecoveryTl = gsap.timeline()

    introRecoveryTl
      .from('.intro-login__title', .5, { y: '100%', delay: 1, onComplete() {
        introRecoveryTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
        introRecoveryTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.intro-login__links--recovery', .5, { y: 60, opacity: 0, onComplete() {
        introRecoveryTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.intro-login__link-back-wrapper', .5, { y: 60, opacity: 0, onComplete() {
        introRecoveryTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
  }, [])

  return (
    <section className="intro intro-login">
      <LoginPhoto />
      <RecoveryContent />
    </section>
  )
}

export default RecoveryIntro