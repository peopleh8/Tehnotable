import React, { useEffect ,useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import HeaderSwitcher from './HeaderSwitcher'
import HeaderSlider from './HeaderSlider'
import HeaderPhones from './HeaderPhones'
import HeaderSocial from './HeaderSocial'

const HeaderTop = () => {
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => setIsMobile(false),
      '(max-width: 1024px)': () => setIsMobile(true)
    })
  }, [])

  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-inner">
          <HeaderSwitcher />
          { !isMobile && <HeaderSlider /> }
          <HeaderPhones />
          <HeaderSocial />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop