import React from 'react'
import { Link } from "gatsby";

const FooterSwitcher = () => {
  return (
    <div className="footer-info__switcher footer-switcher">
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/`}
      >
        RUS
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/uk/`}
      >
        UKR
      </Link>
      <Link
        className="footer-switcher__item"
        activeClassName="active"
        to={`/en/`}
      >
        ENG
      </Link>
    </div>
  )
}

export default FooterSwitcher