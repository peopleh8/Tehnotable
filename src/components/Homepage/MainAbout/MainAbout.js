import React from 'react'

import './MainAbout.scss'

import MainAboutContent from "./MainAboutContent";
import MainAboutPhoto from "./MainAboutPhoto";

const MainAbout = () =>  {
  return (
    <div className="main-about">
      <div className="container">
        <div className="main-about__inner">
          <MainAboutContent />
          <MainAboutPhoto />
        </div>
      </div>
    </div>
  )
}

export default MainAbout