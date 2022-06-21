import React  from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import GalleryIntro from "../components/GalleryPage/Intro/GalleryIntro";

import PrefixProvider from '../context/PrefixProvider'

const Gallery = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isHiddenFooterTop={true}>
        <Seo title={`Gallery Page`} lang={pageContext.lang} />
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
                <span className="breadcrumbs-list__current">Gallery</span>
              </li>
            </ul>
          </div>
        </nav>
        <GalleryIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Gallery