import React from 'react'

import placeholder from '../../images/blog-1.jpg'

const SkeletonItem = ({ imgWidth, imgHeight }) => {
  return (
    <div className="skeleton-item">
      <div className="skeleton-item__inner">
        <div className="skeleton-item__box skeleton-item__box--preview">
          <img src={placeholder} alt="" width={imgWidth} height={imgHeight}/>
        </div>
        <div className="skeleton-item__box skeleton-item__box--title" />
        <div className="skeleton-item__box skeleton-item__box--price" />
      </div>
    </div>
  )
}

export default SkeletonItem