import React from 'react'
import { Link } from "gatsby";

const FooterTopLinks = () => {
  return (
    <React.Fragment>
      <div className="footer-top__links footer-top__links--catalog">
        <div className="footer-top__title footer-title local-title local-title--grey">catalog links</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Height-adjustable tables</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Ergonomic chairs</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Complementary options</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Acoustic cabins</Link>
          </li>
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--support">
        <div className="footer-top__title footer-title local-title local-title--grey">support</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>FAQ</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Delivery</Link>
          </li>
        </ul>
      </div>
      <div className="footer-top__links footer-top__links--explore">
        <div className="footer-top__title footer-title local-title local-title--grey">Explore</div>
        <ul className="footer-top__list footer-list">
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>About us</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>News</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>Gallery</Link>
          </li>
          <li className="footer-list__item">
            <Link className="footer-list__link" to={`#`}>our production</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default FooterTopLinks