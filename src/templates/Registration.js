import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import RegistrationIntro from '../components/Registration/Intro/Intro'

import PrefixProvider from '../context/PrefixProvider'

const Registration = ({ pageContext }) => {
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
                <span className="breadcrumbs-list__current">Login</span>
              </li>
            </ul>
          </div>
        </nav>
        <RegistrationIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Registration