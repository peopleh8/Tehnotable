import React from 'react'

import sprite from "../../icons/sprite.svg";
import { slideToggle } from "../../utils/slideToggle";

const HeaderSwitcherCurrent = ({ isOpen, setIsOpen }) => {
  const toggleSwitcher = e => {
    setIsOpen(prev => !prev)

    let dropdown = e.currentTarget.nextElementSibling

    slideToggle(dropdown, 300)
  }

  return (
    <div className={`header-switcher__current ${isOpen ? 'open' : ''}`}
         onClick={toggleSwitcher}>
      <div className="header-switcher__text">
        RUS
      </div>
      <div className="header-switcher__icon">
        <svg>
          <use href={`${sprite}#header-arrow`} />
        </svg>
      </div>
    </div>
  )
}

export default HeaderSwitcherCurrent