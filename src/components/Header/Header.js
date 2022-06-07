import React, { useState } from 'react'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'
import HeaderCheckout from './HeaderCheckout'

import Overlay from '../Overlay/Overlay'
import Cart from '../Cart/Cart'

import { isBrowser } from '../../utils/isBrowser'
import { resizeWindow } from '../../utils/resizeWindow'

const Header = (props) => {
  let [ isItemHover, setIsItemHover ] = useState(false)
  let [ isSearchOpen, setIsSearchOpen ] = useState(false)
  let [ isCartOpen, setIsCartOpen ] = useState(false)

  let [ isFixedHeader, setIsFixedHeader ] = useState(false)
  let [ isVisibleHeader, setIsVisibleHeader ] = useState(false)

  if (isBrowser()) {
    window.addEventListener('scroll', resizeWindow)
  }

  const toggleSearchOpen = e => {
    let parent = e.currentTarget.parentElement
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setIsSearchOpen(prev => !prev)
      }, 190)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
  }

  return (
    <React.Fragment>
      <header className="header">
        { props.isShowenHeaderCheckout && <HeaderCheckout langPrefix={props.langPrefix} /> }
        { !props.isShowenHeaderCheckout && <HeaderTop /> }
        {
          !props.isShowenHeaderCheckout && <HeaderBot
            setIsItemHover={setIsItemHover}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            toggleSearchOpen={toggleSearchOpen}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isFixedHeader={isFixedHeader}
            setIsFixedHeader={setIsFixedHeader}
            isVisibleHeader={isVisibleHeader}
            setIsVisibleHeader={setIsVisibleHeader}
            isHideHeaderFullpage={props.isHideHeaderFullpage}
          />
        }
      </header>
      { !props.isShowenHeaderCheckout && <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} setIsAlwaysVisibleFixed /> }
      <Overlay
        isItemHover={isItemHover}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </React.Fragment>
  )
}

export default Header
