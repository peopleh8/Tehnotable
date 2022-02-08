import React from 'react'
import HeaderSwitcher from "./HeaderSwitcher";
import HeaderSlider from "./HeaderSlider";
import HeaderPhones from "./HeaderPhones";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-inner">
          <HeaderSwitcher />
          <HeaderSlider />
          <HeaderPhones />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop