import React from 'react'
import { Link } from 'gatsby'

import { getPageName } from '../../utils/getPageName'

const FooterSwitcher = () => {
  return (
    <div className="footer-info__switcher footer-switcher">
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/${getPageName()}`}
      >
        RUS
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/uk/${getPageName()}`}
      >
        UKR
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/en/${getPageName()}`}
      >
        ENG
      </Link>
    </div>
  )
}

export default FooterSwitcher