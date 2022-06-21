import React from 'react'

import './Skeleton.scss'

import SkeletonItem from './SkeletonItem'

const Skeleton = ({ length, imgWidth, imgHeight }) => {
  return (
    <div className="skeleton">
      { new Array(length).fill('', 0, length).map(() => <SkeletonItem imgWidth={imgWidth} imgHeight={imgHeight} />) }
    </div>
  )
}

export default Skeleton