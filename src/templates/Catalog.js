import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Category from '../components/Category/Category'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'

import PrefixProvider from '../context/PrefixProvider'

const Catalog = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`Contacts Page`} lang={pageContext.lang} />
        <nav className="breadcrumbs catalog-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Catalog</span>
              </li>
            </ul>
          </div>
        </nav>
        <Category />
        <Gallery />
        <Quote />
        <SeoBlock />
      </Layout>
    </PrefixProvider>
  )
}

export default Catalog