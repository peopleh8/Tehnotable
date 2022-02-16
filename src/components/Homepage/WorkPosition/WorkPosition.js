import React from 'react'

import './WorkPosition.scss'

import workStanding from '../../../images/work-standing.jpg'
import workSitting from '../../../images/work-sitting.jpg'

import WorkPositionClock from "./WorkPositionClock";

const WorkPosition = () => {
  return (
    <section className="work-position">
      <div className="container">
        <div className="work-position__title title title--small">
          TAKE CARE OF YOUR BACK – WORK IN A <span>DYNAMIC POSE!</span>
        </div>
        <div className="work-position__inner">
          <WorkPositionClock />
          <div className="work-position__item">
            <div className="work-position__item-inner">
              <div className="work-position__item-photo">
                <img src={workStanding} alt=""/>
              </div>
              <div className="work-position__item-method">
                <div className="work-position__item-desc">work standing</div>
                <div className="work-position__item-percentage">30%</div>
              </div>
            </div>
          </div>
          <div className="work-position__item">
            <div className="work-position__item-inner">
              <div className="work-position__item-photo">
                <img src={workSitting} alt=""/>
              </div>
              <div className="work-position__item-method">
                <div className="work-position__item-desc">work sitting</div>
                <div className="work-position__item-percentage">70%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkPosition