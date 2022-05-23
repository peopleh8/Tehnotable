import React  from 'react'

import IntroCategoriesItem from './IntroCategoriesItem'

const IntroCategories = ({ categories, isLoading, toggleIsActive }) => {
  return (
    <div className={`intro-blog__categories ${isLoading ? 'disabled' : ''}`}>
      <div className="intro-blog__categories-title">Category</div>
      <div className="intro-blog__categories-inner">
        {
          categories.map(category => {
            return <IntroCategoriesItem
              id={category.id}
              isActive={category.isActive}
              title={category.title}
              count={category.count}
              toggleIsActive={toggleIsActive}
              key={category.id}
            />
          })
        }
      </div>
    </div>
  )
}

export default IntroCategories