import React from 'react'

const MenuSearch = ({ toggleSearchOpen }) => {
  return (
    <div
      className="menu__search menu-search"
      onClick={toggleSearchOpen}
    >
      search...
    </div>
  )
}

export default MenuSearch