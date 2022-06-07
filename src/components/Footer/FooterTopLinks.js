import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { PrefixContext } from '../../context/PrefixProvider'

const FooterTopLinks = () => {
  let prefix = useContext(PrefixContext)

  return (
    <React.Fragment>
      <div className="footer-top__links footer-top__links--catalog">
        <div className="footer-top__title footer-title local-title local-title--grey">catalog links</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}category/`}>Height-adjustable tables</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}category/`}>Ergonomic chairs</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}category/`}>Complementary options</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}category/`}>Acoustic cabins</Link>
          </li>
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--support">
        <div className="footer-top__title footer-title local-title local-title--grey">support</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}faq/`}>FAQ</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}delivery/`}>Delivery</Link>
          </li>
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--explore">
        <div className="footer-top__title footer-title local-title local-title--grey">Explore</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}about/`}>About us</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}blog/`}>News</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}gallery/`}>Gallery</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" activeClassName="active" to={`${prefix}catalog/`}>our production</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default FooterTopLinks