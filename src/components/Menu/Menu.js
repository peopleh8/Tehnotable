import React, { useContext } from 'react'
import { Link } from "gatsby";

import './Menu.scss'

import SubMenu from './SubMenu'

import { PrefixContext } from '../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const Menu = (props) => {
  let prefix = useContext(PrefixContext)

  return (
    <nav className="menu">
      <ul className="menu__list menu-list">
        <li
          className="menu-list__item menu-list__item--has-children"
          onMouseEnter={() => props.setIsItemHover(true)}
          onMouseLeave={() => props.setIsItemHover(false)}
        >
          <Link
            to={`${prefix}catalog/`}
            className="menu-list__link"
            activeClassName="active"
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
            to={`${prefix}#`}
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
            to={`${prefix}about/`}
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
            to={`${prefix}blog/`}
            className="menu-list__link"
            activeClassName="active"
          >
            blog
            <div className="menu-list__border" />
          </Link>
        </li>
        <li className="menu-list__item">
          <Link
            to={`${prefix}contacts/`}
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