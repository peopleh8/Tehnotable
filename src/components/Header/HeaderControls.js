import React from 'react'
import { Link } from 'gatsby'

import gsap from 'gsap'

import sprite from '../../icons/sprite.svg'

const HeaderControls = (props) => {
  const openCart = () => {
    props.setIsCartOpen(true)

    let cartTl = gsap.timeline()

    cartTl
      .from('.cart__title', .5, { delay: .1, y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.cart-list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__info', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart__close', .3, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
  }

  return (
    <div className="header-controls">
      <div className="header-controls__item">
        <Link
          className="header-controls__link"
          to="/login/"
          activeClassName="active"
        >
          <svg>
            <use href={`${sprite}#user`} />
          </svg>
        </Link>
      </div>
      <div className="header-controls__item">
        <button
          className="header-controls__link search-btn search-close"
          onClick={props.toggleSearchOpen}
          style={{display: props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </button>
        <button
          className="header-controls__link search-btn search-open"
          onClick={props.toggleSearchOpen}
          style={{display: !props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg>
            <use href={`${sprite}#search`} />
          </svg>
        </button>
      </div>
      <div className="header-controls__item">
        <button
          className={`header-controls__link ${props.isCartOpen ? 'active' : ''}`}
          onClick={openCart}
        >
          <svg>
            <use href={`${sprite}#cart`} />
          </svg>
          <span>2</span>
        </button>
      </div>
    </div>
  )
}

export default HeaderControls