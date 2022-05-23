import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

import './Sitemap.scss'

const SitemapIntro = () => {
  useEffect(() => {
    gsap.registerPlugin(CSSRulePlugin)

    let sitemapTl = gsap.timeline()

    sitemapTl
      .from('.sitemap-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        sitemapTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.sitemap-intro-list__link', .6, { x: 40, opacity: 0, stagger: .01, onComplete() {
        sitemapTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from(CSSRulePlugin.getRule('.sitemap-intro-list__link::before'),{
        duration: .5,
        cssRule: {
          scaleX: 0
        }
      })
      .from(CSSRulePlugin.getRule('.sitemap-intro-list::before'),{
        duration: 1.2,
        cssRule: {
          scaleY: 0
        }
      })
      .from(CSSRulePlugin.getRule('.sitemap-intro-list::after'),{
        duration: .5,
        cssRule: {
          scaleX: 0
        }
      })


    return () => {
      sitemapTl.kill()
    }
  })

  return (
    <section className="intro sitemap-intro text-page">
      <div className="container">
        <div className="sitemap-intro__title-wrapper title-wrapper">
          <h1 className="sitemap-intro__title title title--big">Site Map</h1>
        </div>
        <div className="sitemap-intro__inner">
          <ul className="sitemap-intro__list sitemap-intro-list">
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">Home</Link>
            </li>
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">Catalog</Link>
              <ul className="sitemap-intro__list sitemap-intro-list">
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Height-adjustable tables</Link>
                  <ul className="sitemap-intro__list sitemap-intro-list">
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Table for schoolchildren</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Table for schoolchildren</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Table for schoolchildren</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Table for schoolchildren</Link>
                    </li>
                  </ul>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Ergonomic chairs</Link>
                  <ul className="sitemap-intro__list sitemap-intro-list">
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Balancing board</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Balancing board</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Balancing board</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Balancing board</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Balancing board</Link>
                    </li>
                  </ul>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Complementary options</Link>
                  <ul className="sitemap-intro__list sitemap-intro-list">
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Work station WPN</Link>
                    </li>
                  </ul>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Acoustic cabins</Link>
                  <ul className="sitemap-intro__list sitemap-intro-list">
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                    <li className="sitemap-intro-list__item">
                      <Link className="sitemap-intro-list__link" to="#">Model Strong of MDF</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">Configurator</Link>
            </li>
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">About</Link>
              <ul className="sitemap-intro__list sitemap-intro-list">
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">News</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Gallery</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">our production</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">FAQ</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Delivery</Link>
                </li>
              </ul>
            </li>
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">Blog</Link>
              <ul className="sitemap-intro__list sitemap-intro-list">
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Happy New Year holidays!</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Happy New Year holidays!</Link>
                </li>
                <li className="sitemap-intro-list__item">
                  <Link className="sitemap-intro-list__link" to="#">Happy New Year holidays!</Link>
                </li>
              </ul>
            </li>
            <li className="sitemap-intro-list__item">
              <Link className="sitemap-intro-list__link" to="#">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SitemapIntro