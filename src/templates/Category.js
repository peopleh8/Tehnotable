import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CategoryIntro from '../components/CategoryPage/Intro/Intro'
import CategoryProducts from '../components/CategoryPage/CategoryProducts/CategoryProducts'

import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'

const Category = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`Category Page`} lang={props.pageContext.lang} />
      <nav className="breadcrumbs category-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list breadcrumbs-list">
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Home</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Catalog</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__current">Category</span>
            </li>
          </ul>
        </div>
      </nav>
      <CategoryIntro />
      <CategoryProducts />
      <Gallery />
      <Quote />
      <SeoBlock />
    </Layout>
  )
}

export default Category