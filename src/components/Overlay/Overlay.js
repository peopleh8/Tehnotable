import React from 'react'

import gsap from 'gsap'

import './Overlay.scss'

import { isBrowser } from '../../utils/isBrowser'

const Overlay = (props) => {
  const closeCart = () => {
    props.setIsCartOpen(false)

    let cartTl = gsap.timeline()

    cartTl
      .fromTo('.cart-bot__info', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .fromTo('.cart-bot__list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, {  y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart-list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }},'-=.4')
      .fromTo('.cart__title', .4, { y: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart__close', .3, { opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
  }
  const closeSearch = e => {
    let parent = e.currentTarget.parentElement
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        props.setIsSearchOpen(false)
      }, 190)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
  }

  return (
    <div
      className={`overlay ${(props.isItemHover || props.isSearchOpen || props.isCartOpen) ? 'open' : ''}`}
      onClick={e => {
        closeSearch(e)
        closeCart()
      }}
    />
  )
}

export default Overlay