import React from 'react'
import { Link } from "gatsby";

import './Menu.scss'

import sprite from '../../icons/sprite.svg'

const Menu = (props) => {
  return (
    <nav className="menu">
      <ul className="menu__list menu-list">
        <li className="menu-list__item">
          <Link to={`#`} className="menu-list__link">Catalog</Link>
          <div className="menu-list__icon">
            <svg>
              <use href={`${sprite}#header-arrow`} />
            </svg>
          </div>
          <div className="menu-list__border" />
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
          >
            Configurator
          </Link>
          <div className="menu-list__border" />
        </li>
        <li className="menu-list__item">
          <Link
            to={`${props.langPrefix}about/`}
            className="menu-list__link"
            activeClassName="active"
          >
            About us
          </Link>
          <div className="menu-list__border" />
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
            activeClassName="active"
          >
            blog
          </Link>
          <div className="menu-list__border" />
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
            activeClassName="active"
          >
            contacts
          </Link>
          <div className="menu-list__border" />
        </li>
      </ul>
    </nav>
  )
}

export default Menu