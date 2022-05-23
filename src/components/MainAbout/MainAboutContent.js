import React from 'react'
import {Link} from "gatsby";

const MainAboutContent = () => {
  return (
    <div className="main-about__content">
      <div className="main-about__title title title--small">
        STANDING AND SITTING DESKS: WITH CARE FOR YOUR HEALTH
      </div>
      <p className="main-about__desc">
        Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.It perfectly unloads the back.
      </p>
      <Link className="main-about__btn btn btn--big" to={`#`}>
        <span className="main-about__btn-inner btn__inner">
          About us
        </span>
      </Link>
    </div>
  )
}

export default MainAboutContent