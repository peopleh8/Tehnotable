import React from 'react'

import author from '../../../images/team1.jpg'

const SingleProductPhoto = () => {
  return (
    <div className="single-product-author__photo single-product-author-photo">
      <div className="single-product-author-photo__inner">
        <div className="single-product-author-photo__preview">
          <img src={author} alt="" width={325} height={375} />
        </div>
        <div className="single-product-author-photo__name">Andrew Reynolds</div>
        <div className="single-product-author-photo__position">Designer</div>
      </div>
    </div>
  )
}

export default SingleProductPhoto