import React from 'react'

const DeliveryItem = ({ id, title, category, count, price, imgSrc, deleteItem }) => {
  return (
    <div className="intro-checkout-delivery__item">
      <div className="intro-checkout-delivery__item-inner">
        <div className="intro-checkout-delivery__item-side">
          <div className="intro-checkout-delivery__item-title">{title}</div>
          <div className="intro-checkout-delivery__item-category">{category}</div>
          <div className="intro-checkout-delivery__item-count">х<span>{count}</span></div>
          <div className="intro-checkout-delivery__item-price"><span>{price}</span> uah</div>
        </div>
        <div className="intro-checkout-delivery__item-side">
          <div className="intro-checkout-delivery__item-photo">
            <img src={imgSrc} alt=""/>
          </div>
          <button
            className="intro-checkout-delivery__item-btn"
            type="button"
            onClick={e => deleteItem(id, e)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryItem