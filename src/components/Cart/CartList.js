import React, { useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import sprite from '../../icons/sprite.svg'

import cart1 from '../../images/cart-1.jpg'

const CartList = () => {
  const list = useRef()

  let [ isPadding, setIsPadding ] = useState(false)

  useEffect(() => {
    let children = [...list.current.el.children]

    children.forEach(child => {
      if (child.classList.contains('simplebar-vertical')) {
        child.style.visibility !== 'hidden' ? setIsPadding(true) : setIsPadding(false)
      }
    })
  }, [])

  return (
    <SimpleBar
      className={`cart__list cart-list ${isPadding ? 'has-padding' : ''}`}
      autoHide={false}
      ref={list}
    >
      <div className="cart__item cart-item">
        <div className="cart-item__inner">
          <div className="cart-item__info">
            <div className="cart-item__title">Table for schoolchildren</div>
            <div className="cart-item__category">Height-adjustable tables</div>
            <div className="cart-item__price">41 500 uah</div>
            <div className="cart-item__counter">
              <button className="cart-item__counter-btn cart-item__counter-btn--minus" type="button">-</button>
              <input
                className="cart-item__counter-inp"
                type="text"
                autoComplete="off"
                value={1}
              />
              <button className="cart-item__counter-btn cart-item__counter-btn--plus" type="button">+</button>
            </div>
          </div>
          <div className="cart-item__photo-wrapper">
            <div className="cart-item__photo">
              <img src={cart1} alt="" width={140} height={115}/>
            </div>
            <button className="cart-item__btn" type="button">
              <span className="cart-item__btn-icon">
                <svg><use href={`${sprite}#thrash`} /></svg>
              </span>
              <span className="cart-item__btn-text">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart__item cart-item">
        <div className="cart-item__inner">
          <div className="cart-item__info">
            <div className="cart-item__title">Table for schoolchildren</div>
            <div className="cart-item__category">Height-adjustable tables</div>
            <div className="cart-item__price">41 500 uah</div>
            <div className="cart-item__counter">
              <button className="cart-item__counter-btn cart-item__counter-btn--minus" type="button">-</button>
              <input
                className="cart-item__counter-inp"
                type="text"
                autoComplete="off"
                value={1}
              />
              <button className="cart-item__counter-btn cart-item__counter-btn--plus" type="button">+</button>
            </div>
          </div>
          <div className="cart-item__photo-wrapper">
            <div className="cart-item__photo">
              <img src={cart1} alt="" width={140} height={115}/>
            </div>
            <button className="cart-item__btn" type="button">
              <span className="cart-item__btn-icon">
                <svg><use href={`${sprite}#thrash`} /></svg>
              </span>
              <span className="cart-item__btn-text">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart__item cart-item">
        <div className="cart-item__inner">
          <div className="cart-item__info">
            <div className="cart-item__title">Table for schoolchildren</div>
            <div className="cart-item__category">Height-adjustable tables</div>
            <div className="cart-item__price">41 500 uah</div>
            <div className="cart-item__counter">
              <button className="cart-item__counter-btn cart-item__counter-btn--minus" type="button">-</button>
              <input
                className="cart-item__counter-inp"
                type="text"
                autoComplete="off"
                value={1}
              />
              <button className="cart-item__counter-btn cart-item__counter-btn--plus" type="button">+</button>
            </div>
          </div>
          <div className="cart-item__photo-wrapper">
            <div className="cart-item__photo">
              <img src={cart1} alt="" width={140} height={115}/>
            </div>
            <button className="cart-item__btn" type="button">
              <span className="cart-item__btn-icon">
                <svg><use href={`${sprite}#thrash`} /></svg>
              </span>
              <span className="cart-item__btn-text">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart__item cart-item">
        <div className="cart-item__inner">
          <div className="cart-item__info">
            <div className="cart-item__title">Table for schoolchildren</div>
            <div className="cart-item__category">Height-adjustable tables</div>
            <div className="cart-item__price">41 500 uah</div>
            <div className="cart-item__counter">
              <button className="cart-item__counter-btn cart-item__counter-btn--minus" type="button">-</button>
              <input
                className="cart-item__counter-inp"
                type="text"
                autoComplete="off"
                value={1}
              />
              <button className="cart-item__counter-btn cart-item__counter-btn--plus" type="button">+</button>
            </div>
          </div>
          <div className="cart-item__photo-wrapper">
            <div className="cart-item__photo">
              <img src={cart1} alt="" width={140} height={115}/>
            </div>
            <button className="cart-item__btn" type="button">
              <span className="cart-item__btn-icon">
                <svg><use href={`${sprite}#thrash`} /></svg>
              </span>
              <span className="cart-item__btn-text">delete</span>
            </button>
          </div>
        </div>
      </div>
      <div className="cart__item cart-item">
        <div className="cart-item__inner">
          <div className="cart-item__info">
            <div className="cart-item__title">Table for schoolchildren</div>
            <div className="cart-item__category">Height-adjustable tables</div>
            <div className="cart-item__price">41 500 uah</div>
            <div className="cart-item__counter">
              <button className="cart-item__counter-btn cart-item__counter-btn--minus" type="button">-</button>
              <input
                className="cart-item__counter-inp"
                type="text"
                autoComplete="off"
                value={1}
              />
              <button className="cart-item__counter-btn cart-item__counter-btn--plus" type="button">+</button>
            </div>
          </div>
          <div className="cart-item__photo-wrapper">
            <div className="cart-item__photo">
              <img src={cart1} alt="" width={140} height={115}/>
            </div>
            <button className="cart-item__btn" type="button">
              <span className="cart-item__btn-icon">
                <svg><use href={`${sprite}#thrash`} /></svg>
              </span>
              <span className="cart-item__btn-text">delete</span>
            </button>
          </div>
        </div>
      </div>
    </SimpleBar>
  )
}

export default CartList