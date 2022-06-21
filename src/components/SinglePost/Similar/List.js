import React, { useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'

import ListItem from './ListItem'

import singlePost1 from '../../../images/single-post1.jpg'

const List = () => {
  let [ list ] = useState([
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    },
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    },
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    }
  ])

  return (
    <Swiper
      className="single-post-similar__slider"
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      speed={500}
      navigation={{
        prevEl: '.single-post-similar__prev',
        nextEl: '.single-post-similar__next'
      }}
      breakpoints={{
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }}
    >
      {
        list.map((item, index) =>
          <SwiperSlide className="single-post-similar__slider-item">
            <ListItem
              title={item.title}
              imgSrc={item.imgSrc}
              category={item.category}
              date={item.date}
              link={item.link}
              key={index}
            />
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}

export default List