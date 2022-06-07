import React  from 'react'

import './Quote.scss'

import QuoteSlider from './QuoteSlider'
import QuoteContent from './QuoteContent'

const AboutQuote = () => {
  return (
    <section className="quote-about">
      <QuoteSlider />
      <QuoteContent />
    </section>
  )
}

export default AboutQuote