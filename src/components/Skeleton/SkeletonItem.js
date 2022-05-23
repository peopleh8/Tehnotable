import React from 'react'

import placeholder from '../../images/blog-1.jpg'

const SkeletonItem = ({ type, imgWidth, imgHeight }) => {
  if (type === 'post') {
    return (
      <div className="skeleton-item">
        <div className="skeleton-item__inner">
          <div className="skeleton-item__box skeleton-item__box--preview">
            <img src={placeholder} alt="" width={imgWidth} height={imgHeight}/>
          </div>
        </div>
      </div>
    )
  } else if (type === 'product') {
    return  (
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
}

export default SkeletonItem