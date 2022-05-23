import React from 'react'

import CategoryProductsDropdown from './CategoryProductsDropdown'
import CategoryProductsItem from './CategoryProductsItem'
import Skeleton from "../../Skeleton/Skeleton";

const CategoryProductsList = ({ list, secSortList, isOpenDropdown, setIsOpenDropdown, changeSort, changeVariability, isLoading }) => {
  return (
    <div className="category-products__list-wrapper category-products-list-wrapper">
      <CategoryProductsDropdown
        secSortList={secSortList}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
        changeSort={changeSort}
        isLoading={isLoading}
      />
      {
        !isLoading && <div className="category-products__list category-products-list">
          {
            list.map(item => {
              return <CategoryProductsItem
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
      }
      {
        !isLoading && <div className="pagination category-products__pagination category-products-pagination">
          Pagination
        </div>
      }
      {isLoading && <Skeleton type={'product'} length={6} imgWidth={545} imgHeight={490} />}
    </div>
  )
}

export default CategoryProductsList