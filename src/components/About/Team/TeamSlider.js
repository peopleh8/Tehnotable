import React from 'react'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import TeamItem from './TeamItem'

const TeamSlider = ({ list }) => {
  return (
    <Swiper
      className="team__slider team-slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      speed={500}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      navigation={{
        prevEl: '.team-slider__prev',
        nextEl: '.team-slider__next',
      }}
    >
      {
        list.map((item, index) => {
          return (
            <SwiperSlide className="team-slider__item" key={index}>
              <TeamItem imgSrc={item.imgSrc} social={item.social} name={item.name} position={item.position} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default TeamSlider