import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import LoginPhoto from '../../LoginPhoto/LoginPhoto'
import RegistrationContent from './RegistrationContent'

import '../../Layout/Login.scss'

const RegistrationIntro = () => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    let introRegistrationTl = gsap.timeline()

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        setIsMobile(false)

        introRegistrationTl
          .from('.intro-login__title', .5, { y: '100%', delay: 1, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-login__social', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.intro-login__links--registration', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      },
      '(max-width: 991px)': () => {
        setIsMobile(true)

        introRegistrationTl
          .from('.intro-login__title', .5, { y: '100%', delay: .2, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.intro-login__social', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.intro-login__form', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.intro-login__links--registration', .5, { y: 60, opacity: 0, onComplete() {
            introRegistrationTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
      }
    })


  }, [])

  return (
    <section className="intro intro-login">
      { !isMobile && <LoginPhoto /> }
      <RegistrationContent />
    </section>
  )
}

export default RegistrationIntro