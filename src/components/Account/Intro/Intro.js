import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { Tabs, Nav, Content } from 'react-tiny-tabs'
import 'react-tiny-tabs/dist/index.css'

import './Intro.scss'

import AccountAccordion from './AccountAccordion'
import AccountInfo from './AccountInfo'

import { isBrowser } from '../../../utils/isBrowser'

import sprite from '../../../icons/sprite.svg'

const AccountIntro = () => {
  let intro = useRef()
  let itemInformation = useRef()
  let itemHistory = useRef()
  let hash = isBrowser() && window.location.hash

  useEffect(() => {
    intro.current.parentElement.parentElement.classList.add('disable-overflow')
    intro.current.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('disable-overflow')

    let accountInfoTl = gsap.timeline()

    accountInfoTl
      .from('.account-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.account-intro-tabs__nav-item', .5, { y: 20, opacity: 0, stagger: .1, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.account-intro-tabs__content-title', .5, { y: '100%', onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.account-intro-tabs__content-elem-title', .5, { opacity: 0, stagger: .05, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.account-intro-tabs__content-elem-value-wrapper', .5, { opacity: 0, x: 30, stagger: .05, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.account-intro-tabs__content-btn-wrapper', .5, { opacity: 0, y: 30, onComplete() {
        accountInfoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      accountInfoTl.kill()
    }
  }, [])

  useEffect(() => {
    hash
      ? hash === '#information' ? itemInformation.current.click() : itemHistory.current.click()
      : itemInformation.current.click()
  }, [hash])

  const hashChange = (e, hash) => {
    console.log(e.nativeEvent)
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()

    if (isBrowser()) window.location.hash = hash
  }

  const Logout = e => {
    e.stopPropagation()
    alert('Logout')
  }

  return (
    <section className="intro account-intro" ref={intro}>
      <div className="container">
        <div className="account-intro__title-wrapper title-wrapper">
          <div className="account-intro__title title title--big">private office</div>
        </div>
        <Tabs className="account-intro__tabs account-intro-tabs" settings={{fadeTime: '200'}}>
          <Nav className="account-intro-tabs__nav">
            <div className="account-intro-tabs__nav-item" ref={itemInformation}>
              <div className="account-intro-tabs__nav-inner" onClick={e => hashChange(e, '#information')}>
                <span className="account-intro-tabs__nav-icon">
                  <svg>
                    <use href={`${sprite}#user`} />
                  </svg>
                </span>
                <span className="account-intro-tabs__nav-text">Personal information</span>
              </div>
            </div>
            <div className="account-intro-tabs__nav-item" ref={itemHistory}>
              <div className="account-intro-tabs__nav-inner" onClick={e => hashChange(e, '#history')}>
                <span className="account-intro-tabs__nav-icon">
                  <svg>
                    <use href={`${sprite}#history`} />
                  </svg>
                </span>
               <span className="account-intro-tabs__nav-text">Order history</span>
              </div>
            </div>
            <div className="account-intro-tabs__nav-item">
              <span className="account-intro-tabs__nav-text" onClick={Logout}>Logout</span>
            </div>
          </Nav>
          <Content className="account-intro-tabs__content">
            <div className="account-intro-tabs__content-item">
              <div className="account-intro-tabs__content-title-wrapper title-wrapper">
                <div className="account-intro-tabs__content-title title title--small">Personal information</div>
              </div>
              <AccountInfo />
            </div>
            <div className="account-intro-tabs__content-item">
              <div className="account-intro-tabs__content-title-wrapper title-wrapper">
                <div className="account-intro-tabs__content-title title title--small">Order history</div>
              </div>
              <AccountAccordion />
            </div>
          </Content>
        </Tabs>
      </div>
    </section>
  )
}

export default AccountIntro