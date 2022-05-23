import React from 'react'

import './Skeleton.scss'

import SkeletonItem from './SkeletonItem'

const Skeleton = ({ type, length, imgWidth, imgHeight }) => {
  return (
    <div className="skeleton">
      {new Array(length).fill('', 0, length).map(() => <SkeletonItem type={type} imgWidth={imgWidth} imgHeight={imgHeight} />)}
    </div>
  )
}

export default Skeleton