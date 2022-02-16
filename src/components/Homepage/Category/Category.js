import React from 'react'
import { Link } from "gatsby";

import './Category.scss'

import category1 from '../../../images/category-1.jpg'
import category2 from '../../../images/category-2.jpg'
import category3 from '../../../images/category-3.jpg'
import category4 from '../../../images/category-4.jpg'

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <div className="category__title title title--big">product category</div>
        <div className="category__inner">
          <div className="category__item category-item sample-item">
            <div className="category-item__inner sample-item__inner">
              <Link className="category-item__link sample-item__link" to={`#`} />
              <div className="category-item__preview sample-item__preview">
                <img src={category1} alt="Hello" />
              </div>
              <div className="category-item__title sample-item__title">Height-adjustable tables</div>
            </div>
          </div>
          <div className="category__item category-item sample-item">
            <div className="category-item__inner sample-item__inner">
              <Link className="category-item__link sample-item__link" to={`#`} />
              <div className="category-item__preview sample-item__preview">
                <img src={category2} alt="Hello" />
              </div>
              <div className="category-item__title sample-item__title">Ergonomic chairs</div>
            </div>
          </div>
          <div className="category__item category-item sample-item">
            <div className="category-item__inner sample-item__inner">
              <Link className="category-item__link sample-item__link" to={`#`} />
              <div className="category-item__preview sample-item__preview">
                <img src={category3} alt="Hello" />
              </div>
              <div className="category-item__title sample-item__title">Complementary options</div>
            </div>
          </div>
          <div className="category__item category-item sample-item">
            <div className="category-item__inner sample-item__inner">
              <Link className="category-item__link sample-item__link" to={`#`} />
              <div className="category-item__preview sample-item__preview">
                <img src={category4} alt="Hello" />
              </div>
              <div className="category-item__title sample-item__title">Acoustic cabins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category