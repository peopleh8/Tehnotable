import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import HeaderControls from './HeaderControls'

const HeaderBot = (props) => {
  return (
    <div className="header__bot">
      <div className="container">
        <div className="header__bot-inner">
          <Logo langPrefix={props.langPrefix} />
          <Menu langPrefix={props.langPrefix} setIsItemHover={props.setIsItemHover} />
          <HeaderControls
            isSearchOpen={props.isSearchOpen}
            setIsSearchOpen={props.setIsSearchOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderBot