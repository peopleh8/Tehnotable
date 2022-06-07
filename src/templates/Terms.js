import React  from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import TermsIntro from '../components/Terms/Intro/Intro'

import PrefixProvider from '../context/PrefixProvider'

const Terms = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`Legal Notice Page`} lang={pageContext.lang} />
        <nav className="breadcrumbs terms-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Terms & Conditions</span>
              </li>
            </ul>
          </div>
        </nav>
        <TermsIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Terms