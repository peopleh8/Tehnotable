import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

import { isBrowser } from '../../utils/isBrowser'

import sprite from '../../icons/sprite.svg'

const HeaderControls = (props) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="header-controls">
      <div className="header-controls__item logged-in">
        <Link
          className="header-controls__link"
          to={`${prefix}login/`}
          activeClassName="active"
        >
          <svg><use href={`${sprite}#user`} /></svg>
        </Link>
        <div>
          <div className="controls-dropdown">
            <Link
              className={`controls-dropdown__link ${isBrowser() && (window.location.hash === '#information' || (!window.location.hash && window.location.pathname.includes('account'))) ? 'active' : ''}`}
              to={`${prefix}account/#information`}
            >
              Personal information
            </Link>
            <Link
              className={`controls-dropdown__link ${isBrowser() && window.location.hash === '#history' ? 'active' : ''}`}
              to={`${prefix}account/#history`}
            >
              Order history
            </Link>
            <button className="controls-dropdown__link" onClick={() => alert('Logout')}>Logout</button>
          </div>
        </div>
      </div>
      <div className="header-controls__item">
        <button
          className="header-controls__link search-btn search-close"
          onClick={props.toggleSearchOpen}
          style={{display: props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg><use href={`${sprite}#close`} /></svg>
        </button>
        <button
          className="header-controls__link search-btn search-open"
          onClick={props.toggleSearchOpen}
          style={{display: !props.isSearchOpen ? 'block' : 'none'}}
        >
          <svg><use href={`${sprite}#search`} /></svg>
        </button>
      </div>
      <div className="header-controls__item">
        <button
          className={`header-controls__link ${props.isCartOpen ? 'active' : ''}`}
          onClick={() => props.cartOpen(true)}
        >
          <svg><use href={`${sprite}#cart`} /></svg>
          <span className="header-controls__count">2</span>
        </button>
      </div>
      <div className="header-controls__item">
        <button
          className={`header-controls__link ${props.isContactsOpen ? 'active' : ''}`}
          onClick={props.contactsOpen}
        >
          <svg><use href={`${sprite}#phone`} /></svg>
        </button>
      </div>
    </div>
  )
}

export default HeaderControls