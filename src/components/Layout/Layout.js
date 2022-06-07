import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import 'normalize.css'
import './Layout.scss'


const Layout = ({ children, isHiddenFooterTop, isShowenHeaderCheckout, isHideHeaderFullpage }) => {
  return (
    <div className={`wrapper`}>
      <Header isShowenHeaderCheckout={isShowenHeaderCheckout} isHideHeaderFullpage={isHideHeaderFullpage} />
      <main className={`main`}>{children}</main>
      <Footer isHiddenFooterTop={isHiddenFooterTop} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  langPrefix: PropTypes.string
}

export default Layout
