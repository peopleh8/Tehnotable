import React from 'react'
import { Link } from 'gatsby'

import { Collapse } from 'react-collapse'

const HeaderSwitcherDropdown = ({ isOpen }) => {
  return (
    <div className="header-switcher__dropdown">
      <Collapse isOpened={isOpen}>
        <div className="header-switcher__dropdown-inner">
          <Link
            className="header-switcher__dropdown-item"
            activeClassName="active"
            to={`/uk/`}
          >
            UKR
          </Link>
          <Link
            className="header-switcher__dropdown-item"
            activeClassName="active"
            to={`/en/`}
          >
            ENG
          </Link>
        </div>
      </Collapse>
    </div>
  )
}

export default HeaderSwitcherDropdown