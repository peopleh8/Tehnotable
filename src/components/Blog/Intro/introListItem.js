import React from 'react'
import { Link } from 'gatsby'

import { update } from '../../../utils/3dHover'

import sprite from '../../../icons/sprite.svg'

const IntroListItem = ({ isVideo, imgSrc, link, date, category, title }) => {
  return (
    <div className="intro-blog__item">
      <div
        className="intro-blog__item-inner"
        onMouseOver={e => { update(e, 'in') }}
        onMouseOut={e => { update(e, 'out') }}
      >
        {
          isVideo && <div className="intro-blog__item-icon">
            <svg>
              <use href={`${sprite}#social-youtube`}/>
            </svg>
          </div>
        }
        <Link className="intro-blog__item-link" to={link}>
          <img src={imgSrc} alt="" width={480} height={570}/>
        </Link>
        <div className="intro-blog__item-info">
          <div className="intro-blog__item-info-top">
            <div className="intro-blog__item-info-date">{date}</div>
            <div className="intro-blog__item-info-category">{category}</div>
          </div>
          <div className="intro-blog__item-info-title">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default IntroListItem