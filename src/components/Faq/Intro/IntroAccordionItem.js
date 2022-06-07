import React from 'react'
import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

const IntroAccordionItem = ({ id, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`faq-intro-accordion__item ${isOpen ? 'open' : ''}`}>
      <div
        className="faq-intro-accordion__head"
        onClick={() => toggleOpen(id)}
      >
        <div className="faq-intro-accordion__head-text">
          {question}
        </div>
        <div className="faq-intro-accordion__head-icon accordion-icon">
          <svg><use href={`${sprite}#accordion-arrow`}/></svg>
        </div>
      </div>
      <div className="faq-intro-accordion__body">
        <Collapse isOpened={isOpen}>
          <p className="faq-intro-accordion__body-text">
            {answer}
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default IntroAccordionItem