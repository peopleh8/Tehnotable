import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Intro from '../components/Blog/Intro/Intro'
import Subscribe from '../components/Blog/Subscribe/Subscribe'

const Blog = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`Contacts Page`} lang={props.pageContext.lang} />
      <nav className="breadcrumbs blog-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list breadcrumbs-list">
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Home</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__current">Blog</span>
            </li>
          </ul>
        </div>
      </nav>
      <Intro />
      <Subscribe />
    </Layout>
  )
}

export default Blog