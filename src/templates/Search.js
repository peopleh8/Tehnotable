import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SearchIntro from '../components/SearchPage/Intro/Intro'

import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'

import PrefixProvider from '../context/PrefixProvider'

import { isBrowser } from '../utils/isBrowser'

const Search = ({ pageContext }) => {
  const { search } = isBrowser() && window.location
  const query = new URLSearchParams(search).get('s')

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`Search Result Page`} lang={pageContext.lang} />
        <nav className="breadcrumbs search-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Search Result</span>
              </li>
            </ul>
          </div>
        </nav>
        <SearchIntro query={query} />
        <Gallery />
        <Quote />
      </Layout>
    </PrefixProvider>
  )
}

export default Search