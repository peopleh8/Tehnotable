import React from 'react'
import { Link } from 'gatsby'

import sprite from '../../icons/sprite.svg'

const MenuControls = ({ prefix, isCartOpen, cartOpen }) => {
  return (
    <div className="menu__controls menu-controls">
      <div className="menu-controls__item">
        <button
          className={`menu-controls__link ${isCartOpen ? 'active' : ''}`}
          onClick={cartOpen}
        >
          <svg><use href={`${sprite}#cart`} /></svg>
        </button>
        <span className="menu-controls__count">2</span>
      </div>
      <div className="menu-controls__item">
        <Link className="menu-controls__link" activeClassName="active" to={`${prefix}account/`}>
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
      </div>
    </div>
  )
}

export default MenuControls