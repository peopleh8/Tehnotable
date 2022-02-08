import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import 'normalize.css'
import './Layout.scss'


const Layout = ({ children, langPrefix }) => {
  return (
    <div className={`wrapper`}>
      <Header langPrefix={langPrefix} />
      <main className={`main`}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  langPrefix: PropTypes.string
}

export default Layout
