import React from 'react'

import './MainOrder.scss'
import MainOrderContent from "./MainOrderContent";
import MainOrderPhoto from "./MainOrderPhoto";

const MainOrder = () => {
  return (
    <section className="main-order">
      <div className="container">
        <div className="main-order__inner">
          <MainOrderContent />
          <MainOrderPhoto />
        </div>
      </div>
    </section>
  )
}

export default MainOrder