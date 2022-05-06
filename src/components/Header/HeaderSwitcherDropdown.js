import React from 'react'
import { Link } from "gatsby";

const HeaderSwitcherDropdown = ({ isOpen }) => {
  return (
    <div className={`header-switcher__dropdown ${isOpen ? 'open' : ''}`}>
      <Link
        className="header-switcher__dropdown-item"
        activeClassName={`active`}
        to={`/uk/`}
      >
        UKR
      </Link>
      <Link
        className="header-switcher__dropdown-item"
        activeClassName={`active`}
        to={`/en/`}
      >
        ENG
      </Link>
    </div>
  )
}

export default HeaderSwitcherDropdown