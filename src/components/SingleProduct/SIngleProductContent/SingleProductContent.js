import React  from 'react'

import SingleProductBox from './SingleProductBox'
import SingleProductSidebar from './SingleProductSidebar'
import SingleProductModal from './SingleProductModal'

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
          <SingleProductSidebar
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
          <SingleProductModal />
        </div>
      </div>
    </section>
  )
}

export default SingleProductContent