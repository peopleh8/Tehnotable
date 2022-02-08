import React from 'react'

import FooterSwitcher from "./FooterSwitcher";
import FooterPay from "./FooterPay";
import FooterContacts from "./FooterContacts";

const FooterInfo = () => {
  return (
    <div className="footer-top__info footer-info">
      <FooterSwitcher />
      <FooterPay />
      <FooterContacts />
    </div>
  )
}

export default FooterInfo