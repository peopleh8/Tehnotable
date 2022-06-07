import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import GoogleMap from 'google-map-react';
import  { Pagination, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Intro.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'

import Marker from './Marker'

import { styles } from './map-styles'

import sprite from '../../../icons/sprite.svg'

const ContactsIntro = () => {
  let [ addresses ] = useState([
    {
      city: 'Kyiv, main office',
      address: '9B st. Smolnaya, Kyiv',
      coords: {
        lat: 50.1753655,
        lng: 30.5946574
      }
    },
    {
      city: 'Kyiv',
      address: 'Khreshchatyk street, 6, office 8',
      coords: {
        lat: 50.471991,
        lng: 30.5129319
      }
    },
    {
      city: 'Kyiv',
      address: '2 Navi bar (NN bar), Metrograd, -2 floor',
      coords: {
        lat: 50.3931204,
        lng: 30.4364918
      }
    },
    {
      city: 'Lviv',
      address: 'st. Heroes of UPA, 80 Creative space – ITEAHub',
      coords: {
        lat: 49.8407379,
        lng: 24.0337991
      }
    },
    {
      city: 'Dnipro',
      address: 'Kharkivska street 8A, Coworking',
      coords: {
        lat: 48.4755057,
        lng: 35.0447008
      }
    },
    {
      city: 'Odessa',
      address: 'Grecheskaya st., 1A Center Diya Business',
      coords: {
        lat: 46.4823679,
        lng: 30.7205166
      }
    },
  ])

  useEffect(() => {
    let contactIntroTl = gsap.timeline()

    contactIntroTl
      .from('.contacts-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        contactIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.contacts-intro__head-title', .5, { y: -20, opacity: 0, onComplete() {
        contactIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.contacts-intro-slider__pagination-item', .6, { x: -20, opacity: 0, stagger: .05, onComplete() {
        contactIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.contacts-intro__info-item', .6, { y: 20, opacity: 0, stagger: .05, onComplete() {
        contactIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')
      .from('.contacts-intro__slider', .5, { opacity: 0, onComplete() {
        contactIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

  }, [])

  return (
    <section className="intro contacts-intro">
      <div className="container">
        <div className="contacts-intro__wrapper">
          <div className="contacts-intro__title-wrapper title-wrapper">
            <h1 className="contacts-intro__title title title--big">Contacts</h1>
          </div>
          <div className="contacts-intro__head">
            <div className="contacts-intro__head-title local-title local-title--grey">ADDRESS</div>
            <div className="contacts-intro-slider__pagination" />
          </div>
          <div className="contacts-intro__inner">
            <div className="contacts-intro__info">
              <div className="contacts-intro__info-inner">
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">working hours</div>
                  <p className="contacts-intro__info-text">Monday to Friday 9am to 5pm</p>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">TELEPHONE</div>
                  <div className="contacts-intro__info-links">
                    <a className="contacts-intro__info-link" href="tel:+380508330131">+38 050 833-01-31</a>
                    <a className="contacts-intro__info-link" href="tel:+380678330130">+38 067 833-01-30</a>
                  </div>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">E-MAIL</div>
                  <div className="contacts-intro__info-links">
                    <a className="contacts-intro__info-link" href="mailto:tehnotable@gmail.com">tehnotable@gmail.com</a>
                  </div>
                </div>
                <div className="contacts-intro__info-item">
                  <div className="contacts-intro__info-title local-title local-title--grey">subscribe</div>
                  <ul className="contacts-intro__info-social">
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href="#" target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#youtube`} /></svg>
                      </a>
                    </li>
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href="#" target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#facebook`} /></svg>
                      </a>
                    </li>
                    <li className="contacts-intro__info-social-item">
                      <a className="contacts-intro__info-social-link" href="#" target="_blank" rel="noreferrer">
                        <svg><use href={`${sprite}#instagram`} /></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Swiper
              className="contacts-intro__slider contacts-intro-slider"
              modules={[Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              speed={500}
              allowTouchMove={false}
              pagination={{
                clickable: true,
                el: '.contacts-intro-slider__pagination',
                bulletClass: 'contacts-intro-slider__pagination-item',
                bulletActiveClass: 'active',
                renderBullet: (index, className) => {
                  return (`
                    <div class="${className}">
                      <div class="contacts-intro-slider__pagination-item-title">
                        ${addresses[index].city}
                      </div>
                      <div class="contacts-intro-slider__pagination-item-desc">
                        ${addresses[index].address}
                      </div>
                    </div>
                  `)
                }
              }}
            >
              {
                addresses.map((map, index) => {
                  return (
                    <SwiperSlide className="contacts-intro-slider__item" key={index}>
                      <GoogleMap
                        bootstrapURLKeys={{ key: "AIzaSyC2Zq7VBtQJJ41xXy6EuxQoQm0k5J31zBw" }}
                        defaultCenter={map.coords}
                        defaultZoom={9}
                        options={{
                          styles: styles
                        }}
                      >
                        <Marker
                          lat={map.coords.lat}
                          lng={map.coords.lng}
                        />
                      </GoogleMap>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsIntro