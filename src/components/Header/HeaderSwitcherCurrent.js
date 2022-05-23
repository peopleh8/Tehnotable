import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSwitcherCurrent = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`header-switcher__current ${isOpen ? 'open' : ''}`}
         onClick={() => setIsOpen(prev => !prev)}>
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