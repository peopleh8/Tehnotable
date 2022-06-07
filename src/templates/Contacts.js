import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ContactsIntro from '../components/Contacts/Intro/Intro'
import Callback from '../components/Contacts/Callback/Callback'

import PrefixProvider from '../context/PrefixProvider'

const Contacts = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`Contacts Page`} lang={pageContext.lang} />
        <nav className="breadcrumbs contacts-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Contacts</span>
              </li>
            </ul>
          </div>
        </nav>
        <ContactsIntro />
        <Callback />
      </Layout>
    </PrefixProvider>
  )
}

export default Contacts