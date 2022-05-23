import React from 'react'
import FooterTop from "./FooterTop";
import FooterBot from "./FooterBot";

import './Footer.scss'

const Footer = ({ isHiddenFooterTop }) => {
  return (
    <footer className="footer">
      {!isHiddenFooterTop && <FooterTop />}
      <FooterBot />
    </footer>
  )
}

export default Footer