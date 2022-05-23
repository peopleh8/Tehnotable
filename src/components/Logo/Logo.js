import React from 'react'
import { Link } from 'gatsby'

import './Logo.scss'

import logo from '../../images/logo.svg'

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to={props.langPrefix} className="logo__link">
        <img src={logo} alt=""/>
      </Link>
    </div>
  )
}

export default Logo