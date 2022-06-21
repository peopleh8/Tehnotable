import React from 'react'

import Logo from '../Logo/Logo'
import HeaderSwitcher from './HeaderSwitcher'
import HeaderPhones from './HeaderPhones'

const HeaderCheckout = (props) => {
  return (
    <div className="header__checkout header-checkout">
      <div className="container">
        <div className="header-checkout__inner">
          <Logo className='logo-header' />
          <HeaderSwitcher />
          <HeaderPhones />
        </div>
      </div>
    </div>
  )
}

export default HeaderCheckout