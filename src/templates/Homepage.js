import React, { useState } from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import Intro from '../components/Homepage/Intro/Intro'
import Fullpage from '../components/Homepage/Fullpage/Fullpage'
import WorkPosition from '../components/Homepage/WorkPosition/WorkPosition'
import MainOrder from '../components/Homepage/MainOrder/MainOrder'
import BenefitsSlider from '../components/Homepage/BenefitsSlider/BenefitsSlider'
import BenefitsTab from '../components/Homepage/BenefitsTab/BenefitsTab'

import Category from '../components/Category/Category'
import MainAbout from '../components/MainAbout/MainAbout'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'
import RecomendedProducts from '../components/RecomendedProducts/RecomendedProducts'
import Discount from '../components/Discount/Discount'
import PageLoader from '../components/PageLoader/PageLoader'

import PrefixProvider from '../context/PrefixProvider'

import { isBrowser } from '../utils/isBrowser'


const IndexPage = ({ pageContext }) => {
  // const homePage = props.data.allWpPage.edges[0].node.homePage;
  let [ isHideHeaderFullpage, setIsHideHeaderFullpage ] = useState(false)

  if (!isBrowser()) return null

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isHideHeaderFullpage={isHideHeaderFullpage}>
        <Seo title="Home" lang={pageContext.lang} />
        <PageLoader />
        <div className="section-wrapper">
          <Intro />
          <Category />
          <MainAbout />
          <RecomendedProducts />
          <BenefitsSlider />
          <MainOrder />
          <BenefitsTab />
          <div className="work-position-wrapper">
            <WorkPosition />
          </div>
        </div>
        <Fullpage setIsHideHeaderFullpage={setIsHideHeaderFullpage} />
        <div className="section-wrapper">
          <div className="discount-wrapper">
            <Discount />
          </div>
          <Gallery />
          <Quote />
          <SeoBlock />
        </div>
      </Layout>
    </PrefixProvider>
  )
}

// export const query = graphql`
//   query MyQuery($lang: String) {
//     allWpPage(filter: {slug: {eq: "home"}, locale: {locale: {eq: $lang}}}) {
//       edges {
//         node {
//           homePage {
//             description
//             title
//           }
//           locale {
//             locale
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage