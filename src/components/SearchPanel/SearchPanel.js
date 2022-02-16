import React, {useState} from 'react'

import './SearchPanel.scss'

import sprite from '../../icons/sprite.svg'

const SearchPanel = (props) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <div className={`search-panel ${props.isSearchOpen && 'open'}`}>
      <div className="container">
        <form className="search-panel__form">
          <div className="search-panel__inp-wrapper">
            <input
              className="search-panel__inp"
              type="text"
              autoComplete="off"
              placeholder="start type for Search"
              name="search"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          <div className="search-panel__btn-wrapper">
            <button className="search-panel__btn" type="submit">
              <svg>
                <use href={`${sprite}#search`} />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default  SearchPanel