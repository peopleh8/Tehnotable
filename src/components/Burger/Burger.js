import React from 'react'
import './Burger.scss'

const Burger = ({ isMeuOpen, toggleMenuOpen }) => {
  return (
    <div
      className={`burger ${isMeuOpen ? 'open' : ''}`}
      onClick={toggleMenuOpen}
    >
      <div className="burger__icon">
        <span /><span /><span />
      </div>
      <p className="burger__text">Close</p>
    </div>
  )
}

export default Burger