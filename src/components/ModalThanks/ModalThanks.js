import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Fancybox } from '@fancyapps/ui'

import '@fancyapps/ui/dist/fancybox.css'

import './ModalThanks.scss'

import { isBrowser } from '../../utils/isBrowser'
import { getScrollbarWidth } from '../../utils/getScrollbarWidth'

const ModalThanks = () => {
  let thanksModalTl = null

  useEffect(() => {
    Fancybox.bind("[data-fancybox='thanks']", {
      showClass: 'fancybox-fadeIn',
      hideClass: 'fancybox-fadeOut',
      dragToClose: false,
      parentEl: isBrowser() && document.querySelector('#___gatsby'),
      on: {
        init: () => {
          if (isBrowser()) {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = getScrollbarWidth()
            document.querySelector('.header__bot').style.paddingRight = getScrollbarWidth()
          }
        },
        ready: () => {
          thanksModalTl = gsap.timeline()

          thanksModalTl
            .from('.modal-thanks__title', .5, { delay: .8, y: 20, opacity: 0, onComplete() {
              thanksModalTl.set(this.targets(), { clearProps: 'all' })
            }})
            .from('.modal-thanks__btn-wrapper', .5, { y: 20, opacity: 0, onComplete() {
              thanksModalTl.set(this.targets(), { clearProps: 'all' })
            }}, '-=.2')
        },
        destroy: () => {
          thanksModalTl.kill()
          if (isBrowser()) {
            if (document.querySelector('.header__top')) document.querySelector('.header__top').style.paddingRight = '0'
            document.querySelector('.header__bot').style.paddingRight = '0'
          }
        }
      }
    })

    return () => {
      Fancybox.destroy()
    }
  }, [])

  return (
    <div className="modal-thanks modal" id="thanks-modal" style={{ display: 'none' }}>
      <div className="modal-thanks__icon check-icon">
        <svg viewBox="0 0 133 133" version="1.1">
          <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="filled-circle" fill="#133BFE" cx="66.5" cy="66.5" r="54.5" />
            <circle id="white-circle" fill="#000" cx="66.5" cy="66.5" r="55.5" />
            <circle id="outline" stroke="#133BFE" strokeWidth="4" cx="66.5" cy="66.5" r="54.5" />
            <polyline id="check" stroke="#fff" strokeWidth="4" points="41 70 56 85 92 49" />
          </g>
        </svg>
      </div>
      <div className="modal-thanks__title title title--small">Your message has been sent successfully. Thank you!</div>
      <div className="modal-thanks__btn-wrapper">
        <button
          className="modal-thanks__btn form-btn"
          onClick={() => Fancybox.close()}
        >
          <span>ok</span>
          <span>ok</span>
        </button>
      </div>
    </div>
  )
}

export default ModalThanks