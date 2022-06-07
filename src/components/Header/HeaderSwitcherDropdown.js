import React from 'react'
import { Link } from 'gatsby'

import { Collapse } from 'react-collapse'

import { getPageName } from '../../utils/getPageName'

const HeaderSwitcherDropdown = ({ isOpen, prefix }) => {
  return (
    <div className="header-switcher__dropdown">
      <Collapse isOpened={isOpen}>
        {
          prefix === '/'
            ? <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/uk/${getPageName()}`}
                >
                  UKR
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/en/${getPageName()}`}
                >
                  ENG
                </Link>
              </div>
          : prefix === '/uk/'
            ? <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/${getPageName()}`}
                >
                  RUS
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/en/${getPageName()}`}
                >
                  ENG
                </Link>
              </div>
            : <div className="header-switcher__dropdown-inner">
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/uk/${getPageName()}`}
                >
                  UKR
                </Link>
                <Link
                  className="header-switcher__dropdown-item"
                  activeClassName="active"
                  to={`/${getPageName()}`}
                >
                  RUS
                </Link>
              </div>
        }

      </Collapse>
    </div>
  )
}

export default HeaderSwitcherDropdown