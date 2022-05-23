import React from 'react'
import { Link } from 'gatsby'

const ListItem = ({ title, imgSrc, category, date, link }) => {
  return (
    <div className="single-post-similar__item">
      <div className="single-post-similar__item-inner">
        <Link className="single-post-similar__item-link" to={link} />
        <div className="single-post-similar__item-preview">
          <img src={imgSrc} alt=""/>
        </div>
        <div className="single-post-similar__item-info">
          <div className="single-post-similar__item-date local-title local-title--grey">{date}</div>
          <div className="single-post-similar__item-category local-title local-title--grey">{category}</div>
        </div>
        <div className="single-post-similar__item-title">{title}</div>
      </div>
    </div>
  )
}

export default ListItem