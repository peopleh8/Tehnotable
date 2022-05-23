import React, { useState } from 'react'

import category1 from '../../images/category-1.jpg'
import category2 from '../../images/category-2.jpg'
import category3 from '../../images/category-3.jpg'
import category4 from '../../images/category-4.jpg'

import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  let [ category ] = useState([
    {
      imgSrc: category1,
      title: 'Height-adjustable tables',
      link: '/category/'
    },
    {
      imgSrc: category2,
      title: 'Ergonomic chairs',
      link: '/category/'
    },
    {
      imgSrc: category3,
      title: 'Complementary options',
      link: '/category/'
    },
    {
      imgSrc: category4,
      title: 'Acoustic cabins',
      link: '/category/'
    },
  ])

  return (
    <div className="category__inner">
      {
        category.map((item, index) => {
          return <CategoryItem imgSrc={item.imgSrc} title={item.title} link={item.link} key={index} />
        })
      }
    </div>
  )
}

export default CategoryList

