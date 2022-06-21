import React from 'react'

import CategoryItem from './CategoryItem'

const CategoryList = ({ list }) => {
  return (
    <div className="intro-category__list intro-category-list">
      <div className="container">
        <div className="intro-category-list__inner">
          {
            list.map(item => {
              return (
                <CategoryItem
                  title={item.title}
                  link={item.link}
                  imgSrc1={item.imgSrc1}
                  imgSrc2={item.imgSrc2}
                  imgSrc3={item.imgSrc3}
                  imgMobile={item.imgMobile}
                  isActive={item.isActive}
                  key={item.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryList