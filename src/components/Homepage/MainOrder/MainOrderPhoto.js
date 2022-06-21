import React from 'react'

import mainOrder from '../../../images/main-order.jpg'

const MainOrderPhoto = () => {
  return (
    <div className="main-order__photo main-order-photo">
      <div className="main-order-content__title-mobile title title--small">
        WORKING IN A DYNAMIC POSITION <span>IS HEALTHY</span>
      </div>
      <div className="main-order-photo__inner">
        <img src={mainOrder} alt=""/>
      </div>
    </div>
  )
}

export default  MainOrderPhoto