import React, { useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import { Collapse } from 'react-collapse'

import './Cart.scss'

import CartList from './CartList'
import CartBotList from './CartBotList'

import { PrefixContext } from '../../context/PrefixProvider'

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  let prefix = useContext(PrefixContext)

  const closeCart = () => {
    setIsCartOpen(false)

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

  return (
    <div className="cart">
      <Collapse isOpened={isCartOpen}>
        <div className="cart__inner">
          <button
            className="cart__close"
            type="button"
            onClick={closeCart}
          >
            <span className="cart__close-inner">
              <span/><span/>
            </span>
          </button>
          <div className="cart__top cart-top">
            <div className="cart__title-wrapper title-wrapper">
              <div className="cart__title title title--small">your cart</div>
            </div>
            <CartList />
          </div>
          <div className="cart__bot cart-bot">
            <CartBotList />
            <div className="cart-bot__info">
              <div className="cart-bot__info-price">
                <div className="cart-bot__info-title">total</div>
                <div className="cart-bot__info-cost">41 500 uah</div>
              </div>
              <div className="cart-bot__info-btn-wrapper">
                <Link className="cart-bot__info-btn btn btn--small" to={`${prefix}checkout/`}>
                  <span className="cart-bot__info-btn-inner btn__inner">check out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default Cart