import React from 'react'

import './Discount.scss'

import DiscountContent from './DiscountContent'
import DiscountSlider from './DiscountSlider'


const Discount = () => {
  return (
    <sdction className="discount">
      <div className="container">
        <div className="discount__inner">
          <DiscountSlider />
          <DiscountContent />
        </div>
      </div>
    </sdction>
  )
}

export default Discount