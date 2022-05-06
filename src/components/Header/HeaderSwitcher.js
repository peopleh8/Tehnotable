import React, {useState} from 'react'

import HeaderSwitcherCurrent from './HeaderSwitcherCurrent'
import HeaderSwitcherDropdown from './HeaderSwitcherDropdown'

const HeaderSwitcher = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header__top-switcher header-switcher">
      <HeaderSwitcherCurrent isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderSwitcherDropdown isOpen={isOpen} />
    </div>
  )
}

export default HeaderSwitcher