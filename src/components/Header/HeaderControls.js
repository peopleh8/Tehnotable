import React from 'react'
import { Link } from "gatsby";

import sprite from '../../icons/sprite.svg'

const HeaderControls = () => {
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
        <Link to={`#`} className="header-controls__link">
          <svg>
            <use href={`${sprite}#search`} />
          </svg>
        </Link>
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