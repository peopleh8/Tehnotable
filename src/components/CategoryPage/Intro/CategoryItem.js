import React from 'react'
import { Link } from 'gatsby'

const CategoryItem = ({ title, link, imgSrc1, imgSrc2, imgSrc3, isActive }) => {
  return (
    <div className="intro-category-list__item">
      <Link
        className={`intro-category-list__item-link ${isActive ? 'active' : ''}`}
        to={link}
        activeClassName="active"
      />
      <div className="intro-category-list__item-wrapper">
        <div className="intro-category-list__item-inner">
          <div className="intro-category-list__item-elem">
            <img src={imgSrc1} alt="" width={88} height={88} />
          </div>
          <div className="intro-category-list__item-elem">
            <img src={imgSrc2} alt="" width={88} height={88} />
          </div>
          <div className="intro-category-list__item-elem">
            <img src={imgSrc3} alt="" width={88} height={88} />
          </div>
        </div>
        <div className="intro-category-list__item-title">{title}</div>
      </div>
    </div>
  )
}

export default CategoryItem