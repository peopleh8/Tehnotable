import React, {useState} from 'react'

import './SearchPanel.scss'

import { fieldChange } from '../../utils/fieldChange'
import { fieldBlur } from '../../utils/fieldBlur'

import sprite from '../../icons/sprite.svg'

const SearchPanel = (props) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <div className={`search-panel ${props.isSearchOpen ? 'open' : ''}`}>
      <div
        className="search-panel__close"
        onClick={() => props.setIsSearchOpen(false)}
      >
        <div className="search-panel__close-icon"><span /><span /></div>
        <div className="search-panel__close-text">Close</div>
      </div>
      <div className="container">
        <form className="search-panel__form" action="/search/" method="get">
          <div className="search-panel__inp-wrapper">
            <input
              className="search-panel__inp"
              type="text"
              autoComplete="off"
              name="s"
              value={searchValue}
              onChange={e => {
                setSearchValue(e.target.value)
                fieldChange(e)
              }}
              onBlur={fieldBlur}
            />
            <span className="search-panel__placeholder">start type for Search</span>
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