import React, { useRef } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import Intro from '../components/Homepage/Intro/Intro'
import Category from '../components/Homepage/Category/Category'
import Fullpage from '../components/Homepage/Fullpage/Fullpage'
import MainAbout from "../components/Homepage/MainAbout/MainAbout";
import RecomendedProducts from "../components/Homepage/RecomendedProducts/RecomendedProducts";
import Discount from "../components/Homepage/Discount/Discount";
import Gallery from "../components/Gallery/Gallery";
import Quote from "../components/Quote/Quote";
import SeoBlock from "../components/SeoBlock/SeoBlock";
import WorkPosition from "../components/Homepage/WorkPosition/WorkPosition";
import MainOrder from "../components/Homepage/MainOrder/MainOrder";

const IndexPage = (props) => {
  const homePage = props.data.allWpPage.edges[0].node.homePage;

  const sectionWrapperOne = useRef();
  const sectionWrapperTwo = useRef();
  const sectionOne = useRef();
  const sectionTwo = useRef();

  const fullpageRef = { sectionWrapperOne, sectionWrapperTwo, sectionOne, sectionTwo }

  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title="Home" lang={props.pageContext.lang} />
      <div className="section-wrapper" ref={sectionWrapperOne}>
        <Intro />
        <Category />
        <MainAbout />
        <RecomendedProducts />
        <MainOrder />
        <WorkPosition />
        <h1>{homePage.title}</h1>
        <h1>{homePage.description}</h1>
        <section className="temp" ref={sectionOne}>
          <h1>Some Section</h1>
        </section>
      </div>
      {/*<Fullpage ref={fullpageRef} />*/}
      <div className="section-wrapper" ref={sectionWrapperTwo}>
        <section className="temp" ref={sectionTwo}>
          <h1>Some Section</h1>
        </section>
        <Discount />
        <Gallery />
        <Quote />
        <SeoBlock />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($lang: String) {
    allWpPage(filter: {slug: {eq: "home"}, locale: {locale: {eq: $lang}}}) {
      edges {
        node {
          homePage {
            description
            title
          }
          locale {
            locale
          }
        }
      }
    }
  }
`

export default IndexPage
