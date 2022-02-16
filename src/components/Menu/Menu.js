import React from 'react'
import { Link } from "gatsby";

import './Menu.scss'

import sprite from '../../icons/sprite.svg'
import SubMenu from "./SubMenu";

const Menu = (props) => {
  return (
    <nav className="menu">
      <ul className="menu__list menu-list">
        <li
          className="menu-list__item menu-list__item--has-children"
          onMouseEnter={() => props.setIsItemHover(true)}
          onMouseLeave={() => props.setIsItemHover(false)}
        >
          <Link
            to={`#`}
            className="menu-list__link"
          >
            Catalog
            <div className="menu-list__border" />
          </Link>
          <div className="menu-list__icon">
            <svg>
              <use href={`${sprite}#header-arrow`} />
            </svg>
          </div>
          <SubMenu />
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
          >
            Configurator
            <div className="menu-list__border" />
          </Link>
        </li>
        <li
          className="menu-list__item menu-list__item--has-children"
          onMouseEnter={() => props.setIsItemHover(true)}
          onMouseLeave={() => props.setIsItemHover(false)}
        >
          <Link
            to={`${props.langPrefix}about/`}
            className="menu-list__link"
            activeClassName="active"
          >
            About us
            <div className="menu-list__border" />
          </Link>
          <div className="menu-list__icon">
            <svg>
              <use href={`${sprite}#header-arrow`} />
            </svg>
          </div>
          <SubMenu />
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
            activeClassName="active"
          >
            blog
            <div className="menu-list__border" />
          </Link>
        </li>
        <li className="menu-list__item">
          <Link
            to={`#`}
            className="menu-list__link"
            activeClassName="active"
          >
            contacts
            <div className="menu-list__border" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu