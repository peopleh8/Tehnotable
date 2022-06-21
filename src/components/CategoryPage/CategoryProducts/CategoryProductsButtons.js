import React from 'react'

import sprite from '../../../icons/sprite.svg'

const CategoryProductsButtons = ({ isMobileFilterOpen, openMobileFilter, isMobileSortOpen, openMobileSort, isLoading }) => {
  return (
    <div className={`category-products__btns category-products-btns ${isLoading ? 'disabled' : ''}`}>
      <div
        className={`category-products-btns__item ${isMobileFilterOpen ? 'active' : ''}`}
        onClick={openMobileFilter}
      >
        <div className="category-products-btns__item-inner">
          <div className="category-products-btns__item-icon"><svg><use href={`${sprite}#filter`} /></svg></div>
          <div className="category-products-btns__item-text">Filter</div>
        </div>
      </div>
      <div
        className={`category-products-btns__item ${isMobileSortOpen ? 'active' : ''}`}
        onClick={openMobileSort}
      >
        <div className="category-products-btns__item-inner">
          <div className="category-products-btns__item-icon"><svg><use href={`${sprite}#sort`} /></svg></div>
          <div className="category-products-btns__item-text">Sort</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryProductsButtons