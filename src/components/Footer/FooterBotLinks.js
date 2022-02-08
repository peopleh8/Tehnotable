import React from 'react'
import { Link } from "gatsby";

const FooterBotLinks = () => {
  return (
    <div className="footer-bot__links">
      <Link className="footer-bot__link" to={`#`}>Legal Notice</Link>
      <Link className="footer-bot__link" to={`#`}>Terms & Conditions</Link>
    </div>
  )
}

export default FooterBotLinks