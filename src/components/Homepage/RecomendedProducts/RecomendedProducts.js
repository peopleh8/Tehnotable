import React from 'react'
import { Link } from 'gatsby'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import './RecomendedProducts.scss'

import sprite from '../../../icons/sprite.svg'

import product1 from '../../../images/product-1.jpg'
import product2 from '../../../images/product-2.jpg'
import product3 from '../../../images/product-3.png'
import product4 from '../../../images/product-4.jpg'

const RecomendedProducts = () => {
  return (
    <section className="recomended">
      <div className="container">
        <div className="recomended__top">
          <div className="recomended__title title title--small">Recomended products</div>
          <div className="recomended__slider-nav">
            <div className="recomended__slider-btn recomended__slider-prev">
              <svg>
                <use href={`${sprite}#prev-arrow`} />
              </svg>
            </div>
            <div className="recomended__slider-btn recomended__slider-prev-next">
              <svg>
                <use href={`${sprite}#next-arrow`} />
              </svg>
            </div>
          </div>
        </div>
        <Swiper
          className="recomended__slider recomended-slider"
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          speed={500}
          autoplay={{
            delay: 5000
          }}
          navigation={{
            prevEl: '.recomended__slider-prev',
            nextEl: '.recomended__slider-prev-next',
          }}
          loop={true}
        >
          <SwiperSlide className="recomended-slider__item sample-item">
            <div className="recomended-slider__item-inner sample-item__inner">
              <Link className="recomended-slider__item-link sample-item__link" to={`#`} />
              <div className="recomended-slider__item-preview sample-item__preview">
                <img src={product1} alt=""/>
              </div>
              <div className="recomended-slider__item-cat">
                Height-adjustable tables
              </div>
              <div className="recomended-slider__item-title sample-item__title">
                Table for schoolchildren
              </div>
              <div className="recomended-slider__item-price">40 000 uah – 41 500 uah</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="recomended-slider__item sample-item">
            <div className="recomended-slider__item-inner sample-item__inner">
              <Link className="recomended-slider__item-link sample-item__link" to={`#`} />
              <div className="recomended-slider__item-preview sample-item__preview">
                <img src={product2} alt=""/>
              </div>
              <div className="recomended-slider__item-cat">
                Height-adjustable tables
              </div>
              <div className="recomended-slider__item-title sample-item__title">
                Work station WPN
              </div>
              <div className="recomended-slider__item-price">40 000 uah – 41 500 uah</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="recomended-slider__item sample-item">
            <div className="recomended-slider__item-inner sample-item__inner">
              <Link className="recomended-slider__item-link sample-item__link" to={`#`} />
              <div className="recomended-slider__item-preview sample-item__preview">
                <img src={product3} alt=""/>
              </div>
              <div className="recomended-slider__item-cat">
                Complementary options
              </div>
              <div className="recomended-slider__item-title sample-item__title">
                Balancing board
              </div>
              <div className="recomended-slider__item-price">2 000 uah</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="recomended-slider__item sample-item">
            <div className="recomended-slider__item-inner sample-item__inner">
              <Link className="recomended-slider__item-link sample-item__link" to={`#`} />
              <div className="recomended-slider__item-preview sample-item__preview">
                <img src={product4} alt=""/>
              </div>
              <div className="recomended-slider__item-cat">
                Height-adjustable tables
              </div>
              <div className="recomended-slider__item-title sample-item__title">
                Table for schoolchildren
              </div>
              <div className="recomended-slider__item-price">40 000 uah – 41 500 uah</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default RecomendedProducts