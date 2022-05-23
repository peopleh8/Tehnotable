import React from 'react'
import { Link } from 'gatsby'

const FooterBotLinks = () => {
  return (
    <div className="footer-bot__links">
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to="/privacy/"
      >
        Legal Notice
      </Link>
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to="/terms/"
      >
        Terms & Conditions
      </Link>
      <Link
        className="footer-bot__link"
        activeClassName="active"
        to="/sitemap/"
      >
        Site Map
      </Link>
    </div>
  )
}

export default FooterBotLinks