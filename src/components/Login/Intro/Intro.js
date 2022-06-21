import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import LoginPhoto from '../../LoginPhoto/LoginPhoto'
import LoginContent from './LoginContent'

import '../../Layout/Login.scss'

const LoginIntro = () => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let introLoginTl = gsap.timeline()

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        setIsMobile(false)

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
      },
      '(max-width: 991px)': () => {
        setIsMobile(true)

        introLoginTl
          .from('.intro-login__title', .5, { y: '100%', delay: .2, onComplete() {
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
      }
    })
  }, [])

  return (
    <section className="intro intro-login">
      { !isMobile && <LoginPhoto /> }
      <LoginContent />
    </section>
  )
}

export default LoginIntro