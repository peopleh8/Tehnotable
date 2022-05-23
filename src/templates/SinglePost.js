import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Intro from '../components/SinglePost/Intro/Intro'
import Similar from '../components/SinglePost/Similar/Similar'

const SinglePost = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`Contacts Page`} lang={props.pageContext.lang} />
      <nav className="breadcrumbs single-post-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list breadcrumbs-list">
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Home</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Blog</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__current">Single Post</span>
            </li>
          </ul>
        </div>
      </nav>
      <Intro />
      <Similar />
    </Layout>
  )
}

export default SinglePost