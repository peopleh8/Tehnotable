import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Logo.scss'

import { PrefixContext } from '../../context/PrefixProvider'

import logo from '../../images/logo.svg'

const Logo = ({ className }) => {
  let prefix = useContext(PrefixContext)

  return (
    <div className={`logo ${className}`}>
      <Link className="logo__link" to={prefix}>
        <img src={logo} alt="Logo" width={180} height={25} />
      </Link>
    </div>
  )
}

export default Logo