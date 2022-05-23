import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import AboutIntro from '../components/About/Intro/Intro'
import ParallaxSlider from '../components/About/ParallaxSlider/ParallaxSlider'
import Story from '../components/About/Story/Story'
import Team from '../components/About/Team/Team'

import MainAbout from '../components/MainAbout/MainAbout'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'

import { isBrowser } from '../utils/isBrowser'

const About = (props) => {
  if (!isBrowser()) return null

  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`About Page`} lang={props.pageContext.lang} />
      <nav className="breadcrumbs about-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list breadcrumbs-list">
            <li className="breadcrumbs-list__item">
              <Link className="breadcrumbs-list__link" to="#">Home</Link>
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__separator" />
            </li>
            <li className="breadcrumbs-list__item">
              <span className="breadcrumbs-list__current">About</span>
            </li>
          </ul>
        </div>
      </nav>
      <AboutIntro />
      <ParallaxSlider />
      <Story />
      <Team />
      <MainAbout />
      <Gallery />
      <Quote />
      <SeoBlock />
    </Layout>
  )
}

export default About