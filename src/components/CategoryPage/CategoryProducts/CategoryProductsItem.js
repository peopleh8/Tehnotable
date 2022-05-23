import React from 'react'
import { Link } from 'gatsby'

const CategoryProductsItem = ({ id, title, price, link, imgSrc, variability, changeVariability }) => {
  return (
    <div className="category-products-list__item sample-item">
      <div className="category-products-list__item-inner sample-item__inner">
        <Link className="category-products-list__item-link sample-item__link" to={link}/>
        <div className="category-products-list__item-preview sample-item__preview">
          <img src={imgSrc} alt="" width={545} height={490}/>
          {
            variability && <div className="category-products-list__item-variability sample-item__variability">
              {
                variability.map(item => {
                  return (
                    <div
                      className={`category-products-list__item-variability-elem sample-item__variability-elem ${item.isActive ? 'active' : ''}`}
                      data-img-src={item.imgSrc}
                      key={item.id}
                      onClick={e => changeVariability(id, item.id, e)}
                    >
                      <span style={{backgroundColor: item.bgColor}}/>
                    </div>
                  )
                })
              }

            </div>
          }
        </div>
        <div className="category-products-list__item-title sample-item__title">{title}</div>
        <div className="category-products-list__item-price sample-item__price">{price}</div>
      </div>
    </div>
  )
}

export default CategoryProductsItem