import React, {useState} from 'react'

import HeaderTop from './HeaderTop'
import HeaderBot from './HeaderBot'

import './Header.scss'
import Overlay from '../Overlay/Overlay'
import SearchPanel from '../SearchPanel/SearchPanel'

const Header = (props) => {
  let [isItemHover, setIsItemHover] = useState(false)
  let [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <React.Fragment>
      <header className="header">
        <HeaderTop />
        <HeaderBot
          langPrefix={props.langPrefix}
          setIsItemHover={setIsItemHover}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <SearchPanel isSearchOpen={isSearchOpen} />
      </header>
      <Overlay
        isItemHover={isItemHover}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </React.Fragment>
  )
}

export default Header
