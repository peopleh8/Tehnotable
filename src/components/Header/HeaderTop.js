import React from 'react'

import HeaderSwitcher from './HeaderSwitcher'
import HeaderSlider from './HeaderSlider'
import HeaderPhones from './HeaderPhones'
import HeaderSocial from "./HeaderSocial";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-inner">
          <HeaderSwitcher />
          <HeaderSlider />
          <HeaderPhones />
          <HeaderSocial />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop