import React from 'react'

import sprite from '../../icons/sprite.svg'

const HeaderSocial = () => {
  return (
    <div className="header__top-social header-social">
      <div className="header-social__item">
        <a className="header-social__link" href="https://telegram.org/" target="_blank" rel="noreferrer">
          <svg><use href={`${sprite}#telegram`} /></svg>
        </a>
      </div>
      <div className="header-social__item">
        <a className="header-social__link" href="https://www.viber.com/" target="_blank" rel="noreferrer">
          <svg><use href={`${sprite}#viber`} /></svg>
        </a>
      </div>
      <div className="header-social__item">
        <a className="header-social__link" href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
          <svg><use href={`${sprite}#whats-app`} /></svg>
        </a>
      </div>
    </div>
  )
}

export default HeaderSocial