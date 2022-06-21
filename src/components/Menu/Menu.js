import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Menu.scss'

import SubMenu from './SubMenu'
import HeaderSlider from '../Header/HeaderSlider'
import MenuSwitcher from './MenuSwitcher'
import MenuSearch from './MenuSearch'
import MenuControls from './MenuControls'

import { PrefixContext } from '../../context/PrefixProvider'

import sprite from '../../icons/sprite.svg'

const Menu = (props) => {
  let prefix = useContext(PrefixContext)

  const [ isMobile, setIsMobile ] = useState(false)
  const [ iSmallMobile, setIsSmallMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => setIsMobile(true),
      '(min-width: 481px)': () => setIsSmallMobile(false),
      '(max-width: 480px)': () => setIsSmallMobile(true)
    })
  }, [])

  return (
    <nav className={`menu ${props.isMeuOpen ? 'open' : ''}`}>
      { iSmallMobile && <MenuControls prefix={prefix} isCartOpen={props.isCartOpen} cartOpen={props.cartOpen} /> }
      { iSmallMobile && <MenuSearch toggleSearchOpen={props.toggleSearchOpen} /> }
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
          <div
            className="menu-list__icon"
            onClick={props.openSubmenu}
          >
            <svg><use href={`${sprite}#header-arrow`} /></svg>
          </div>
          <SubMenu closeSubmenu={props.closeSubmenu} />
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
          <div
            className="menu-list__icon"
            onClick={props.openSubmenu}
          >
            <svg><use href={`${sprite}#header-arrow`} /></svg>
          </div>
          <SubMenu closeSubmenu={props.closeSubmenu} />
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
      { iSmallMobile && <MenuSwitcher /> }
      { isMobile && <HeaderSlider /> }
    </nav>
  )
}

export default Menu