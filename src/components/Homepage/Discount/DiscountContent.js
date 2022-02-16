import React from 'react'
import { Link } from "gatsby";

import product1 from "../../../images/product-2.jpg";
import product2 from "../../../images/product-3.png";

const DiscountContent = () => {
  return (
    <div className="discount__content discount-content">
      <div className="discount-content__title title title--big">best discounted package</div>
      <p className="discount-content__desc">Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks</p>
      <div className="discount-content__inner">
        <div className="discount-content__sale">-10%</div>
        <div className="discount-content__item sample-item">
          <div className="discount-content__item-inner sample-item__inner">
            <Link className="discount-content__item-link sample-item__link" to={`#`} />
            <div className="discount-content__item-preview sample-item__preview">
              <img src={product1} alt=""/>
            </div>
          </div>
        </div>
        <div className="discount-content__item sample-item">
          <div className="discount-content__item-inner sample-item__inner">
            <Link className="discount-content__item-link sample-item__link" to={`#`} />
            <div className="discount-content__item-preview sample-item__preview">
              <img src={product2} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-content__products-title">Work station WPN + Balancing board </div>
      <div className="discount-content__products-price">
        <div className="discount-content__products-price--old">44 000 uah</div>
        <div className="discount-content__products-price--new">44 000 uah</div>
      </div>
      <div className="discount-content__btn-wrapper">
        <div className="discount-content__btn-borders">
          <button className="discount-content__btn btn btn--small">
            <span className="discount-content__btn-inner btn__inner">
              buy pack
            </span>
          </button>
        </div>
        <span className="discount-content__btn-border" />
        <span className="discount-content__btn-border" />
        <span className="discount-content__btn-border" />
      </div>
    </div>
  )
}

export default DiscountContent