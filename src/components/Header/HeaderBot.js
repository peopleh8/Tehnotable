import React, { useEffect } from 'react'

import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import SearchPanel from '../SearchPanel/SearchPanel'
import HeaderControls from './HeaderControls'

import { isBrowser } from '../../utils/isBrowser'

const HeaderBot = (props) => {
  useEffect(() => {
    let scrollPos = 0

    const visibleHeader = e => {
      let curPos = e.currentTarget.scrollY

      curPos > 300 ? props.setIsFixedHeader(true) : props.setIsFixedHeader(false)

      curPos > 800
        ? curPos > scrollPos ? props.setIsVisibleHeader(false) : props.setIsVisibleHeader(true)
        : props.setIsVisibleHeader(false)

      scrollPos = curPos
    }

    if (isBrowser()) {
      window.addEventListener('scroll', visibleHeader)
      window.addEventListener('load', visibleHeader)
      window.addEventListener('resize', visibleHeader)
    }

    return () => {
      if (isBrowser()) {
        window.removeEventListener('scroll', visibleHeader)
        window.removeEventListener('load', visibleHeader)
        window.removeEventListener('resize', visibleHeader)
      }
    }
  }, [])

  return (
    <div className={
      `header__bot 
      ${props.isFixedHeader ? 'fixed' : ''} 
      ${props.isVisibleHeader ? 'visible' : ''}
      ${props.isHideHeaderFullpage && props.isHideHeaderFullpage ? 'hide' : ''}`
    }>
      <div className="container">
        <div className="header__bot-inner">
          <Logo />
          <Menu setIsItemHover={props.setIsItemHover} />
          <HeaderControls
            isSearchOpen={props.isSearchOpen}
            setIsSearchOpen={props.setIsSearchOpen}
            toggleSearchOpen={props.toggleSearchOpen}
            isCartOpen={props.isCartOpen}
            setIsCartOpen={props.setIsCartOpen}
            setIsAlwaysVisibleStatic={props.setIsAlwaysVisibleStatic}
            setIsAlwaysVisibleFixed={props.setIsAlwaysVisibleFixed}
          />
        </div>
      </div>
      <SearchPanel isSearchOpen={props.isSearchOpen} />
    </div>
  )
}

export default HeaderBot