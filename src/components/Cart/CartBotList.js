import React from 'react'

import sprite from '../../icons/sprite.svg'

const CartBotList = () => {
  return (
    <ul className="cart-bot__list">
      <li className="cart-bot__item">
        <span className="cart-bot__item-icon">
          <svg>
            <use href={`${sprite}#check`}/>
          </svg>
        </span>
        <span className="cart-bot__item-text">Google Pay, Apple Pay, Mastercard, Visa, Privat24, Cash</span>
      </li>
      <li className="cart-bot__item">
        <span className="cart-bot__item-icon">
          <svg>
            <use href={`${sprite}#check`}/>
          </svg>
        </span>
        <span className="cart-bot__item-text">14-days return period</span>
      </li>
      <li className="cart-bot__item">
        <span className="cart-bot__item-icon">
          <svg>
            <use href={`${sprite}#check`}/>
          </svg>
        </span>
        <span className="cart-bot__item-text">Free delivery in Ukraine, to your door</span>
      </li>
    </ul>
  )
}

export default CartBotList