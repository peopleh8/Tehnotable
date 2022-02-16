import React from 'react'

import './Quote.scss'

import quote from '../../images/quote.png'

const Quote = () => {
  return (
    <section className="quote">
      <div className="container">
        <div className="quote__wrapper">
          <div className="quote__inner">
            <div className="quote__content quote-content">
              <div className="quote-content__title">
                <span>ORDER</span> A HEIGHT ADJUSTABLE STANDING DESK TO WORK WHEN SITTING AND STANDING UP NOW
              </div>
              <button className="quote-content__btn btn btn--big">
                <span className="btn__inner">ORDER TABLE</span>
              </button>
            </div>
            <img src={quote} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote