import React from 'react'
import { Link } from "gatsby";

import sprite from '../../icons/sprite.svg'

const HeaderControls = (props) => {
  return (
    <div className="header-controls">
      <div className="header-controls__item">
        <Link to={`#`} className="header-controls__link">
          <svg>
            <use href={`${sprite}#user`} />
          </svg>
        </Link>
      </div>
      <div className="header-controls__item">
        <button
          className="header-controls__link search-close"
          onClick={() => {props.setIsSearchOpen(false)}}
          style={{display: props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </button>
        <button
          className="header-controls__link search-open"
          onClick={() => {props.setIsSearchOpen(true)}}
          style={{display: !props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg>
            <use href={`${sprite}#search`} />
          </svg>
        </button>
      </div>
      <div className="header-controls__item">
        <Link to={`#`} className="header-controls__link">
          <svg>
            <use href={`${sprite}#cart`} />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default HeaderControls