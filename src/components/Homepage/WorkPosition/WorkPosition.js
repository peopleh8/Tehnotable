import React, { useEffect, useState } from 'react'

import './WorkPosition.scss'

import workStanding from '../../../images/work-standing.jpg'
import workSitting from '../../../images/work-sitting.jpg'

import WorkPositionClock from './WorkPositionClock'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const WorkPosition = () => {
  let [ items ] = useState([
    {
      imgSrc: workStanding,
      desc: 'work standing',
      percentage: '30'
    },
    {
      imgSrc: workSitting,
      desc: 'work sitting',
      percentage: '70'
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let workPositionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-position',
        start: 'center bottom'
      }
    })

    workPositionTl
      .from('.work-position__title', .5, { y: '100%', onComplete() {
        workPositionTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.work-position__clock', .5, { opacity: 0, onComplete() {
        workPositionTl.set(this.targets(), { clearProps: 'all' })
      }})
      .to('.work-position__item-photo', 1.5, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut', stagger: .1}, '-=.6')
      .from('.work-position__item-photo img', .8, { scale: 1.3, stagger: .1, onComplete() {
        workPositionTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')
      .from('.work-position__item-percentage', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        workPositionTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.work-position__item-percentage span', {
        textContent: 0, duration: 3, ease: "power1.inOut", snap: {textContent: 1}, stagger: {
          each: 0, onUpdate: function () {
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
          },
        },
        onComplete() {
          workPositionTl.set(this.targets(), { clearProps: 'all' })
        }
      }, '-=.5')
      .from('.work-position__item-desc', .6, { y: 20, opacity: 0, stagger: .1, onComplete() {
        workPositionTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=3')

    return () => {
      workPositionTl.kill()
    }
  }, [])

  return (
    <section className="work-position">
      <div className="container">
        <div className="work-position__title-wrapper title-wrapper">
          <div className="work-position__title title title--small">
            TAKE CARE OF YOUR BACK – WORK IN A <span>DYNAMIC POSE!</span>
          </div>
        </div>
        <div className="work-position__inner">
          <WorkPositionClock />
          {
            items.map((item, index) => {
              return (
                <div className="work-position__item" key={index}>
                  <div className="work-position__item-inner">
                    <div className="work-position__item-photo">
                      <img src={item.imgSrc} alt=""/>
                    </div>
                    <div className="work-position__item-method">
                      <div className="work-position__item-desc">{item.desc}</div>
                      <div className="work-position__item-percentage"><span>{item.percentage}</span>%</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default WorkPosition