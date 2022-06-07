import React from 'react'
import { Link } from 'gatsby'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import AboutIntro from '../components/About/Intro/Intro'
import AboutInfo from '../components/About/Info/Info'
import ParallaxSlider from '../components/About/ParallaxSlider/ParallaxSlider'
import AboutQuote from '../components/About/Quote/Quote'
import Story from '../components/About/Story/Story'
import Team from '../components/About/Team/Team'
import AboutInovation from '../components/About/Inovation/Inovation'

import MainAbout from '../components/MainAbout/MainAbout'
import Gallery from '../components/Gallery/Gallery'
import Quote from '../components/Quote/Quote'
import SeoBlock from '../components/SeoBlock/SeoBlock'

import PrefixProvider from '../context/PrefixProvider'

import { isBrowser } from '../utils/isBrowser'

const About = ({ pageContext }) => {
  if (!isBrowser()) return null

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`About Page`} lang={pageContext.lang} />
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
        <AboutInfo />
        <ParallaxSlider />
        <AboutQuote />
        <Story />
        <Team />
        <AboutInovation />
        <MainAbout />
        <Gallery />
        <Quote />
        <SeoBlock />
      </Layout>
    </PrefixProvider>
  )
}

export default About