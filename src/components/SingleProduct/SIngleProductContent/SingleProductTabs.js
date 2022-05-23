import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Tabs, Nav, Content } from 'react-tiny-tabs'
import 'react-tiny-tabs/dist/index.css'

import SingleProductTabDesc from './SingleProductTabDesc'
import SingleProductTabInfo from './SingleProductTabInfo'
import SingleProductTabPayment from './SingleProductTabPayment'
import SingleProductTabReviews from './SingleProductTabReviews'

const SingleProductTabs = () => {
  let marker = useRef()

  useEffect(() => {
    marker.current.classList.remove('tab-nav-item')

    gsap.registerPlugin(ScrollTrigger)

    let singleProductTabsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content-tabs',
        start: 'center bottom'
      }
    })

    singleProductTabsTl
      .from('.single-product-content-tabs__nav-item', .5, { x: -30, opacity: 0, stagger: .1, onComplete() {
        singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('#marker', .1, { width: 0, onComplete() {
        singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-tabs__body-item.active', .4, { y: 70, opacity: 0, onComplete() {
        singleProductTabsTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')

    return () => {
      singleProductTabsTl.kill()
    }
  }, [])

  const markerMove = e => {
    marker.current.style.width = `${e.currentTarget.clientWidth}px`
    marker.current.style.left = `${e.currentTarget.offsetLeft}px`
  }

  return (
    <Tabs className="single-product-content__tabs single-product-content-tabs" settings={{fadeTime: '200'}}>
      <Nav className="single-product-content-tabs__nav">
        <div className="single-product-content-tabs__nav-item">
          <div
            className="single-product-content-tabs__nav-item-inner"
            onClick={markerMove}
          >
            DESCRIPTION
          </div>
        </div>
        <div className="single-product-content-tabs__nav-item">
          <div
            className="single-product-content-tabs__nav-item-inner"
            onClick={markerMove}
          >
            tehnical information
          </div>
        </div>
        <div className="single-product-content-tabs__nav-item">
          <div
            className="single-product-content-tabs__nav-item-inner"
            onClick={markerMove}
          >
            PAYMENT AND DELIVERY
          </div>
        </div>
        <div className="single-product-content-tabs__nav-item">
          <div
            className="single-product-content-tabs__nav-item-inner"
            onClick={markerMove}

          >
            REVIEWS (<span>0</span>)
          </div>
        </div>
        <div id="marker" ref={marker} />
      </Nav>
      <Content className="single-product-content-tabs__body">
        <div className="single-product-content-tabs__body-item">
          <SingleProductTabDesc />
        </div>
        <div className="single-product-content-tabs__body-item">
          <SingleProductTabInfo />
        </div>
        <div className="single-product-content-tabs__body-item">
          <SingleProductTabPayment />
        </div>
        <div className="single-product-content-tabs__body-item">
          <SingleProductTabReviews />
        </div>
      </Content>
    </Tabs>
  )
}

export default SingleProductTabs