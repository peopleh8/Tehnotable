import React from 'react'
import Logo from '../Logo/Logo'

import sprite from '../../icons/sprite.svg'

const FooterTopLeft = () => {
  return (
    <div className="footer-top__left">
      <Logo />
      <ul className="footer-top__social">
        <li className="footer-top__social-item">
          <a className="footer-top__social-link" href="https://youtube.com" rel="noreferrer" target="_blank">
            <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#youtube`}/>
              </svg>
            </span>
          </a>
        </li>
        <li className="footer-top__social-item">
          <a className="footer-top__social-link" href="https://fb.com" rel="noreferrer" target="_blank">
            <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#facebook`}/>
              </svg>
            </span>
          </a>
        </li>
        <li className="footer-top__social-item">
          <a className="footer-top__social-link" href="https://instagram.com" rel="noreferrer" target="_blank">
           <span className="footer-top__social-icon">
              <svg>
                <use href={`${sprite}#instagram`}/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterTopLeft