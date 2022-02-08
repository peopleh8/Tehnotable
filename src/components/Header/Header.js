import React from 'react'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'

import './Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBot langPrefix={props.langPrefix} />
    </header>
  )
}

export default Header
