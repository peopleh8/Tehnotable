import React from 'react'
import { Link } from 'gatsby'

const SearchItem = ({ id, title, price, link, imgSrc, variability, changeVariability }) => {
  return (
    <div className="search-intro__item search-intro-item sample-item">
      <div className="search-intro-item__inner sample-item__inner">
        <Link className="search-intro-item__link sample-item__link" to={link}/>
        <div className="search-intro-item__preview sample-item__preview">
          <img src={imgSrc} alt="" width={545} height={490}/>
          {
            variability && <div className="search-intro-item__variability sample-item__variability">
              {
                variability.map(item => {
                  return (
                    <div
                      className={`search-intro-item__variability-elem sample-item__variability-elem ${item.isActive ? 'active' : ''}`}
                      data-img-src={item.imgSrc}
                      key={item.id}
                      onClick={e => changeVariability(id, item.id, e)}
                    >
                      <span style={{backgroundColor: item.bgColor}}/>
                    </div>
                  )
                })
              }

            </div>
          }
        </div>
        <div className="search-intro-item__title sample-item__title">{title}</div>
        <div className="search-intro-item__price sample-item__price">{price}</div>
      </div>
    </div>
  )
}

export default SearchItem