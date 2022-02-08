import React from 'react'

import Company from "../Company/Company";
import FooterBotLinks from "./FooterBotLinks";
import Copyright from "../Copyright/Copyright";

const FooterBot = () => {
  return (
    <div className="footer__bot footer-bot">
      <div className="container">
        <div className="footer-bot__inner">
          <FooterBotLinks />
          <Copyright />
          <Company />
        </div>
      </div>
    </div>
  )
}

export default FooterBot