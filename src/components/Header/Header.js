import React, { useEffect, useState, useCallback } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Header.scss'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'
import HeaderCheckout from './HeaderCheckout'
import Overlay from '../Overlay/Overlay'
import Cart from '../Cart/Cart'

import { isBrowser } from '../../utils/isBrowser'
import { resizeWindow } from '../../utils/resizeWindow'
import { disableScrollbar } from '../../utils/disableScrollbar'
import { enableScrollbar } from '../../utils/enableScrollbar'

const Header = (props) => {
  let [ isItemHover, setIsItemHover ] = useState(false)
  let [ isSearchOpen, setIsSearchOpen ] = useState(false)
  let [ isCartOpen, setIsCartOpen ] = useState(false)
  let [ isMeuOpen, setIsMenuOpen ] = useState(false)
  let [ isContactsOpen, setIsContactsOpen ] = useState(false)
  let [ isOpenSubmenu, setIsOpenSubmenu ] = useState(false)

  let [ isFixedHeader, setIsFixedHeader ] = useState(false)
  let [ isVisibleHeader, setIsVisibleHeader ] = useState(false)
  let [ isSuperVisibleHeader, setIsSuperVisibleHeader ] = useState(false)

  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (isBrowser()) {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      window.addEventListener('scroll', resizeWindow)

      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })
    }

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })

    return () => {
      if (isBrowser()) {
        window.removeEventListener('scroll', resizeWindow)
      }
    }
  }, [])

  const toggleSearchOpen = useCallback(e => {
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
  }, [isSearchOpen])

  const closeSearch = useCallback(e => {
    let parent = e.currentTarget.parentElement
    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setIsSearchOpen(false)
      }, 190)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
  }, [isSearchOpen])

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen(prev => !prev)

    ScrollTrigger.matchMedia({
      '(min-width: 489px)': () => {
        if (!isMeuOpen) {
          gsap.from('.menu-list__link', .5, { delay: .6, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__icon', .5, { delay: .6, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.header-slider', .5, { opacity: 0, delay: .5, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          disableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setIsSuperVisibleHeader(true)
          }
        } else {
          gsap.to('.menu-list__link', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__icon', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.header-slider', .15, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              setIsVisibleHeader(true)
            }, 10)

            setTimeout(() => {
              setIsSuperVisibleHeader(false)
            }, 1000)
          }
        }
      },
      '(max-width: 488px)': () => {
        if (!isMeuOpen) {
          gsap.from('.menu-controls__item', .3, { delay: .6, scale: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-search', .5, { delay: .7, opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__link', .5, { delay: .8, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-list__icon', .5, { delay: .8, y: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.menu-switcher__item', .5, { delay: .8, x: 30, opacity: 0, stagger: .1, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.from('.header-slider', .5, { opacity: 0, delay: .9, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          disableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setIsSuperVisibleHeader(true)
          }
        } else {
          gsap.to('.menu-controls__item', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-search', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__link', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-list__icon', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.menu-switcher__item', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})
          gsap.to('.header-slider', .17, { opacity: 0, onComplete() {
            gsap.set(this.targets(), { clearProps: 'all' })
          }})

          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              setIsVisibleHeader(true)
            }, 500)

            setTimeout(() => {
              setIsSuperVisibleHeader(false)
            }, 1000)
          }
        }
      }
    })
  }, [isMeuOpen])

  const cartOpen = useCallback(flag => {
    setIsCartOpen(true)

    let cartTl = gsap.timeline()

    cartTl
      .from('.cart__title', .5, { delay: .1, y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.cart-list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__list', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart-bot__info', .5, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.cart__close', .3, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => flag ? disableScrollbar() : null
    })
  }, [isCartOpen])

  const closeCart = useCallback(() => {
    setIsCartOpen(false)

    let cartTl = gsap.timeline()

    cartTl
      .fromTo('.cart-bot__info', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .fromTo('.cart-bot__list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, {  y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart-list', .4, { y: 0, opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }},'-=.4')
      .fromTo('.cart__title', .4, { y: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: '100%', onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .fromTo('.cart__close', .3, { opacity: 1, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        cartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        if (!isMeuOpen) {
          enableScrollbar()

          if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
            setTimeout(() => {
              setIsVisibleHeader(true)
            }, 0)
          }
        }
      }
    })
  }, [isCartOpen])

  const contactsOpen = useCallback(() => {
    setIsContactsOpen(true)

    let contactTl = gsap.timeline()

    contactTl
      .from('.contacts-panel__top .logo', .6, { delay: .2, opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.contacts-panel__item', .5, { y: 40, opacity: 0, stagger: .1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.contacts-panel__close', .3, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    disableScrollbar()

    if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
      setIsSuperVisibleHeader(true)
    }
  }, [isContactsOpen])

  const contactsClose = useCallback(() => {
    setIsContactsOpen(false)

    let contactTl = gsap.timeline()

    contactTl
      .fromTo('.contacts-panel__item', .5, { y: 0, opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { y: 40, opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }})
      .fromTo('.contacts-panel__close', .3, { opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')
      .fromTo('.contacts-panel__top .logo', .3, { opacity: 1, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        contactTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')

    enableScrollbar()

    if (isBrowser() && document.documentElement.getBoundingClientRect().top < 0) {
      setTimeout(() => {
        setIsVisibleHeader(true)
      }, 500)

      setTimeout(() => {
        setIsSuperVisibleHeader(false)
      }, 1000)
    }
  }, [isContactsOpen])

  const openSubmenu = useCallback(e => {
    setIsOpenSubmenu(true)

    let arrow = e.currentTarget
    let mainMenu = arrow.parentElement.parentElement
    let subMenu = arrow.nextElementSibling

    subMenu.classList.add('open')
    mainMenu.classList.add('open')
    mainMenu.nextElementSibling.classList.add('open')
    mainMenu.nextElementSibling.nextElementSibling && mainMenu.nextElementSibling.nextElementSibling.classList.add('open')
  }, [isOpenSubmenu])

  const closeSubmenu = useCallback(e => {
    setIsOpenSubmenu(false)

    let btn = e.currentTarget
    let subMenu = btn.parentElement
    let mainMenu = btn.parentElement.parentElement.parentElement

    mainMenu.classList.remove('open')
    mainMenu.nextElementSibling.classList.remove('open')
    mainMenu.nextElementSibling.nextElementSibling && mainMenu.nextElementSibling.nextElementSibling.classList.remove('open')
    if (isBrowser()) {
      setTimeout(() => {
        subMenu.classList.remove('open')
      }, 350)
    }
  }, [isOpenSubmenu])

  return (
    <React.Fragment>
      <header className="header">
        { props.isShowenHeaderCheckout && <HeaderCheckout /> }
        { (!props.isShowenHeaderCheckout && !isMobile) && <HeaderTop /> }
        {
          !props.isShowenHeaderCheckout && <HeaderBot
            setIsItemHover={setIsItemHover}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            toggleSearchOpen={toggleSearchOpen}
            isCartOpen={isCartOpen}
            cartOpen={cartOpen}
            isFixedHeader={isFixedHeader}
            setIsFixedHeader={setIsFixedHeader}
            isVisibleHeader={isVisibleHeader}
            setIsVisibleHeader={setIsVisibleHeader}
            isHideHeaderFullpage={props.isHideHeaderFullpage}
            isHideCategoryHeader={props.isHideCategoryHeader}
            isMeuOpen={isMeuOpen}
            toggleMenuOpen={toggleMenuOpen}
            isContactsOpen={isContactsOpen}
            contactsOpen={contactsOpen}
            contactsClose={contactsClose}
            openSubmenu={openSubmenu}
            closeSubmenu={closeSubmenu}
            isSuperVisibleHeader={isSuperVisibleHeader}
          />
        }
      </header>
      { !props.isShowenHeaderCheckout && <Cart isCartOpen={isCartOpen} closeCart={closeCart} /> }
      <Overlay
        isItemHover={isItemHover}
        isSearchOpen={isSearchOpen}
        closeCart={closeCart}
        isCartOpen={isCartOpen}
        isContactsOpen={isContactsOpen}
        closeSearch={closeSearch}
        isMeuOpen={isMeuOpen}
      />
    </React.Fragment>
  )
}

export default Header
