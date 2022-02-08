import React from 'react'

import FooterTopLeft from "./FooterTopLeft";
import FooterTopLinks from "./FooterTopLinks";
import FooterInfo from "./FooterInfo";

const FooterTop = () => {
  return (
    <div className="footer__top footer-top">
      <div className="container">
        <div className="footer-top__inner">
          <FooterTopLeft />
          <FooterTopLinks />
        </div>
        <FooterInfo />
      </div>
    </div>
  )
}

export default FooterTop