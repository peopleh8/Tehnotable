import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

const FooterBotLinks = () => {
  let prefix = useContext(PrefixContext)

  return (
    <div className="footer-bot__links">
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to={`${prefix}privacy/`}
      >
        Legal Notice
      </Link>
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to={`${prefix}terms/`}
      >
        Terms & Conditions
      </Link>
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to={`${prefix}sitemap/`}
      >
        Site Map
      </Link>
    </div>
  )
}

export default FooterBotLinks