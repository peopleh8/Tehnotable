import React from 'react'

import SearchItem from './SearchItem'
import Skeleton from "../../Skeleton/Skeleton";

const SearchList = ({ list, changeVariability, isLoading }) => {
  if (!isLoading) {
    return (
      <div className="search-intro__inner-wrapper">
        <div className="search-intro__inner">
          {
            list.map(item => {
              return <SearchItem
                id={item.id}
                title={item.title}
                price={item.price}
                link={item.link}
                imgSrc={item.imgSrc}
                variability={item.variability}
                changeVariability={changeVariability}
                key={item.id}
              />
            })
          }
        </div>
      </div>
    )
  } else {
    return (
      <Skeleton length={20} imgWidth={545} imgHeight={490} />
    )
  }
}

export default SearchList