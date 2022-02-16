import React from 'react'

import './Overlay.scss'

const Overlay = (props) => {
  return (
    <div
      className={`overlay ${(props.isItemHover || props.isSearchOpen) && 'open'}`}
      onClick={() => {props.setIsSearchOpen(false)}}
    />
  )
}

export default Overlay