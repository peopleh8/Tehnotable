import React from 'react'
import FooterTop from "./FooterTop";
import FooterBot from "./FooterBot";

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />
      <FooterBot />
    </footer>
  )
}

export default Footer