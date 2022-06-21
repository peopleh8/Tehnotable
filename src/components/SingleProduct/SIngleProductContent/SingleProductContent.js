import React, { useEffect, useState }  from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import SingleProductBox from './SingleProductBox'
import SingleProductSidebar from './SingleProductSidebar'

import './SingleProductContent.scss'

const SingleProductContent = ({
  counter,
  setCounter,
  checkCounter,
  dropdownOneList,
  isOpenDropdownOne,
  setIsOpenDropdownOne,
  changeDropdownOne,
  dropdownTwoList,
  isOpenDropdownTwo,
  setIsOpenDropdownTwo,
  changeDropdownTwo,
  dropdownThreeList,
  isOpenDropdownThree,
  setIsOpenDropdownThree,
  changeDropdownThree,
  details,
  changeDetails,
  isInfoWindowClosed,
  closeInfoWindow
}) => {
  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => setIsMobile(false),
      '(max-width: 991px)': () => setIsMobile(true),
    })
  }, [])

  return (
    <section className="single-product-content">
      <div className="container">
        <div className="single-product-content__inner">
          <SingleProductBox
            details={details}
            changeDetails={changeDetails}
            isInfoWindowClosed={isInfoWindowClosed}
            closeInfoWindow={closeInfoWindow}
          />
          {
            !isMobile && <SingleProductSidebar
              counter={counter}
              setCounter={setCounter}
              checkCounter={checkCounter}
              dropdownOneList={dropdownOneList}
              isOpenDropdownOne={isOpenDropdownOne}
              setIsOpenDropdownOne={setIsOpenDropdownOne}
              changeDropdownOne={changeDropdownOne}
              dropdownTwoList={dropdownTwoList}
              isOpenDropdownTwo={isOpenDropdownTwo}
              setIsOpenDropdownTwo={setIsOpenDropdownTwo}
              changeDropdownTwo={changeDropdownTwo}
              dropdownThreeList={dropdownThreeList}
              isOpenDropdownThree={isOpenDropdownThree}
              setIsOpenDropdownThree={setIsOpenDropdownThree}
              changeDropdownThree={changeDropdownThree}
            />
          }
        </div>
      </div>
    </section>
  )
}

export default SingleProductContent