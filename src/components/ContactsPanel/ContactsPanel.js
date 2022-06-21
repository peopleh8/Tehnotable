import React from 'react'
import { Collapse } from 'react-collapse'

import './ContactsPanel.scss'

import Logo from '../Logo/Logo'

import sprite from '../../icons/sprite.svg'

const ContactsPanel = ({ isContactsOpen, contactsClose }) => {
  return (
    <div className="contacts-panel">
      <Collapse isOpened={isContactsOpen}>
        <div className="contacts-panel__wrapper">
          <div className="contacts-panel__top">
            <Logo className='logo-header' />
            <div
              className="contacts-panel__close"
              onClick={contactsClose}
            >
              <span /><span />
            </div>
          </div>
          <div className="contacts-panel__content">
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">TELEPHONE</div>
              <div className="contacts-panel__inner">
                <a className="contacts-panel__text contacts-panel__link" href="tel:+380508330131">+38 050 833-01-31</a>
                <a className="contacts-panel__text contacts-panel__link" href="tel:+380508330131">+38 050 833-01-31</a>
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">EMAIL</div>
              <div className="contacts-panel__inner">
                <a className="contacts-panel__text contacts-panel__link" href="mailto:tehnotable@gmail.com">tehnotable@gmail.com</a>
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">working hours</div>
              <div className="contacts-panel__inner">
                <span className="contacts-panel__text">Monday to Friday 9am to 5pm</span>
              </div>
            </div>
            <div className="contacts-panel__item">
              <div className="contacts-panel__title local-title local-title--grey">subscribe</div>
              <ul className="contacts-panel__social">
                <li className="contacts-panel__social-item">
                  <a className="contacts-panel__social-link" href="#" target="_blank" rel="noreferrer">
                    <svg><use href={`${sprite}#youtube`} /></svg>
                  </a>
                </li>
                <li className="contacts-panel__social-item">
                  <a className="contacts-panel__social-link" href="#" target="_blank" rel="noreferrer">
                    <svg><use href={`${sprite}#facebook`} /></svg>
                  </a>
                </li>
                <li className="contacts-panel__social-item">
                  <a className="contacts-panel__social-link" href="#" target="_blank" rel="noreferrer">
                    <svg><use href={`${sprite}#instagram`} /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ContactsPanel