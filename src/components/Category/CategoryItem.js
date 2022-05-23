import React from 'react'
import { Link } from 'gatsby'

const CategoryItem = ({ imgSrc, title, link }) => {
  return (
    <div className="category__item category-item sample-item">
      <div className="category-item__inner sample-item__inner">
        <Link className="category-item__link sample-item__link" to={link} />
        <div className="category-item__preview sample-item__preview">
          <img src={imgSrc} alt="Hello" />
        </div>
        <div className="category-item__title sample-item__title">{title}</div>
      </div>
    </div>
  )
}

export default CategoryItem

