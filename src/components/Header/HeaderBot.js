import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Burger from '../Burger/Burger'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import SearchPanel from '../SearchPanel/SearchPanel'
import ContactsPanel from '../ContactsPanel/ContactsPanel'
import HeaderControls from './HeaderControls'
import MenuOverlay from '../Menu/MenuOverlay'

import { isBrowser } from '../../utils/isBrowser'

const HeaderBot = (props) => {
  const [ isMobile, setIsMobile ] = useState(false)
  const [ isSmallMobile, setIsSmallMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => setIsMobile(true),
      '(min-width: 481px)': () => setIsSmallMobile(false),
      '(max-width: 480px)': () => setIsSmallMobile(true)
    })

    let scrollPos = 0

    const visibleHeader = e => {
      let curPos = e.currentTarget.scrollY

      curPos > 300 || (isBrowser() && document.documentElement.classList.contains('lock-scroll') && document.documentElement.getBoundingClientRect().top < 0)
        ? props.setIsFixedHeader(true)
        : props.setIsFixedHeader(false)

      if (curPos > 800 || (isBrowser() && document.documentElement.classList.contains('lock-scroll') && document.documentElement.getBoundingClientRect().top < 0)) {
        if (curPos > scrollPos) {
          props.setIsVisibleHeader(false)
        } else {
          props.setIsVisibleHeader(true)
        }
      } else {
        props.setIsVisibleHeader(false)
      }

      // curPos > 800 || (isBrowser() && document.documentElement.classList.contains('lock-scroll') && document.documentElement.getBoundingClientRect().top < 0)
      //   ? curPos > scrollPos ? props.setIsVisibleHeader(false) : props.setIsVisibleHeader(true)
      //   : props.setIsVisibleHeader(false)

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
      ${props.isHideHeaderFullpage && props.isHideHeaderFullpage ? 'hide' : ''}
      ${props.isHideCategoryHeader && props.isHideCategoryHeader ? 'hide' : ''}
      ${props.isSuperVisibleHeader ? 'super-visible' : ''}`
    }>
      <div className="container">
        <div className="header__bot-inner">
          { isMobile && <Burger isMeuOpen={props.isMeuOpen} toggleMenuOpen={props.toggleMenuOpen} /> }
          <Logo className='logo-header' />
          <Menu
            setIsItemHover={props.setIsItemHover}
            isMeuOpen={props.isMeuOpen}
            toggleSearchOpen={props.toggleSearchOpen}
            isCartOpen={props.isCartOpen}
            cartOpen={props.cartOpen}
            openSubmenu={props.openSubmenu}
            closeSubmenu={props.closeSubmenu}
          />
          { isMobile && <MenuOverlay isMeuOpen={props.isMeuOpen} toggleMenuOpen={props.toggleMenuOpen} /> }
          <HeaderControls
            isSearchOpen={props.isSearchOpen}
            setIsSearchOpen={props.setIsSearchOpen}
            toggleSearchOpen={props.toggleSearchOpen}
            isCartOpen={props.isCartOpen}
            cartOpen={props.cartOpen}
            isContactsOpen={props.isContactsOpen}
            contactsOpen={props.contactsOpen}
          />
        </div>
      </div>
      <SearchPanel
        isSearchOpen={props.isSearchOpen}
        setIsSearchOpen={props.setIsSearchOpen}
      />
      { isSmallMobile && <ContactsPanel isContactsOpen={props.isContactsOpen} contactsClose={props.contactsClose} /> }
    </div>
  )
}

export default HeaderBot