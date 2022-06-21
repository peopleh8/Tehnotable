import React from 'react'
import { Link } from 'gatsby'

import sprite from '../../icons/sprite.svg'

import submenu from '../../images/submenu.jpg'

const SubMenu = ({ closeSubmenu }) => {
  return (
    <div className="submenu">
      <div
        className="submenu__btn"
        onClick={closeSubmenu}
      >
        <div className="submenu__btn-icon">
          <svg><use href={`${sprite}#header-arrow`} /></svg>
        </div>
        <div className="submenu__btn-text">Back</div>
      </div>
      <ul className="submenu__list submenu-list">
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>About us</Link>
        </li>
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>News</Link>
        </li>
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>Gallery</Link>
        </li>
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>our production</Link>
        </li>
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>FAQ</Link>
        </li>
        <li className="submenu-list__item">
          <Link className="submenu-list__link" to={`#`}>Delivery</Link>
        </li>
      </ul>
      <div className="submenu__photo submenu-photo">
        <img src={submenu} alt=""/>
      </div>
    </div>
  )
}

export default SubMenu