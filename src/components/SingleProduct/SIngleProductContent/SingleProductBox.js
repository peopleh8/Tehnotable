import React from 'react'

import SingleProductTabs from './SingleProductTabs'
import SingleProductSlider from './SingleProductSlider'
import SingleProductDetails from './SingleProductDetails'

const SingleProductBox = ({ details, changeDetails, isInfoWindowClosed, closeInfoWindow }) => {
  return (
    <div className="single-product-content__box single-product-content-box">
      <SingleProductTabs />
      <SingleProductSlider />
      <SingleProductDetails
        details={details}
        changeDetails={changeDetails}
        isInfoWindowClosed={isInfoWindowClosed}
        closeInfoWindow={closeInfoWindow}
      />
    </div>
  )
}

export default SingleProductBox