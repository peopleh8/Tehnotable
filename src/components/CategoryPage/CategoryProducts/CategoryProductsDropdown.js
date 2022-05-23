import React from 'react'

import sprite from '../../../icons/sprite.svg'

const CategoryProductsDropdown = ({ secSortList, isOpenDropdown, setIsOpenDropdown, changeSort, isLoading }) => {
  return (
    <div className={`category-products__dropdown category-products-dropdown dropdown ${isLoading ? 'disabled' : ''}`}>
      <div
        className={`category-products-dropdown__current dropdown__current ${isOpenDropdown ? 'open' : ''}`}
        onClick={() => setIsOpenDropdown(prev => !prev)}
      >
        <span className="category-products-dropdown__text dropdown__text">
          { secSortList.filter(item => item.isActive)[0].name }
        </span>
        <span className="category-products-dropdown__icon dropdown__icon">
          <svg>
            <use href={`${sprite}#header-arrow`} />
          </svg>
        </span>
      </div>
      <div className={`category-products-dropdown__list dropdown__list ${isOpenDropdown ? 'open' : ''}`}>
        {
          secSortList.map(item => {
            return (
              <div
                className={`category-products-dropdown__item dropdown__item ${item.isActive ? 'active' : ''}`}
                onClick={e => changeSort(item.id, e)}
                key={item.id}
              >
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryProductsDropdown