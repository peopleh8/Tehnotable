import React from 'react'

const MainOrderContent = () => {
  return (
    <div className="main-order__content main-order-content">
      <div className="main-order-content__title title title--small">
        WORKING IN A DYNAMIC POSITION <span>IS HEALTHY</span>
      </div>
      <p className="main-order-content__desc">
        In our furniture, everything is thought out to the smallest detail: minimalistic design, ergonomic workplace, functionality, quick and easy desk transformation. The recommendations of leading Ukrainian doctors and specialized professionals were taken into account when creating standing desks.
      </p>
      <button className="main-order-content__btn btn btn--big">
        <span className="main-order-content__btn-inner btn__inner">
          Order table
        </span>
      </button>
    </div>
  )
}

export default MainOrderContent