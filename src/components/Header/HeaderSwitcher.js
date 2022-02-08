import React from 'react'
import { Link } from "gatsby"

import sprite from '../../icons/sprite.svg'

const HeaderSwitcher = () => {
  return (
    <div className="header__top-switcher header-switcher">
      <div className="header-switcher__current">
        <div className="header-switcher__text">
          RUS
        </div>
        <div className="header-switcher__icon">
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </div>
      </div>
      <div className="header-switcher__dropdown">
        <Link
          className="header-switcher__dropdown-item"
          activeClassName={`active`}
          to={`/uk/`}
        >
          UKR
        </Link>
        <Link
          className="header-switcher__dropdown-item"
          activeClassName={`active`}
          to={`/en/`}
        >
          ENG
        </Link>
      </div>
    </div>
  )
}

export default HeaderSwitcher