import React from 'react'
import sprite from '../../icons/sprite.svg'
import mainAbout from '../../images/main-about.jpg'
import MainAboutMarquee from './MainAboutMarquee'

const MainAboutPhoto = () => {
  return (
    <div className="main-about__photo">
      <MainAboutMarquee />
      <div className="main-about__photo-inner">
        <div className="main-about__photo-btn video-btn">
          <div className="main-about__photo-icon video-btn__icon">
            <svg viewBox="0 0 65 65" width="65" height="65" className="main-about__photo-shape video-btn__shape">
              <circle r="32.5" cx="32.5" cy="32.5" />
            </svg>
            <svg className="main-about__photo-play video-btn__play">
              <use href={`${sprite}#play`} />
            </svg>
          </div>
          <p className="main-about__photo-text video-btn__text">Watch the video</p>
        </div>
        <img src={mainAbout} alt=""/>
      </div>
    </div>
  )
}

export default MainAboutPhoto