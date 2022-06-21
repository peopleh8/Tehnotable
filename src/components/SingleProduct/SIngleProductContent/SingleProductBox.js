import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SingleProductTabs from './SingleProductTabs'
import SingleProductSlider from './SingleProductSlider'
import SingleProductDetails from './SingleProductDetails'

const SingleProductBox = ({ details, changeDetails, isInfoWindowClosed, closeInfoWindow }) => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 481px)': () => setIsMobile(false),
      '(max-width: 480px)': () => setIsMobile(true)
    })
  }, [])

  return (
    <div className="single-product-content__box single-product-content-box">
      <SingleProductTabs />
      { !isMobile && <SingleProductSlider /> }
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