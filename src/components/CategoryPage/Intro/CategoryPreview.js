import React  from 'react'

import { Parallax } from "react-parallax";

import categoryBg from '../../../images/category-bg.jpg'

const CategoryPreview = () => {
  return (
    <Parallax bgImage={categoryBg} strength={300}>
      <div className="intro-category__preview intro-category-preview">
        <div className="container">
          <div className="intro-category__title-wrapper title-wrapper">
            <h1 className="intro-category__title title title--big">Height-adjustable tables</h1>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default CategoryPreview