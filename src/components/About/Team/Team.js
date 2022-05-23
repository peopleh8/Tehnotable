import React, { useState, useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Team.scss'

import sprite from '../../../icons/sprite.svg'

import team1 from '../../../images/team1.jpg'

const Team = () => {
  let [ list ] = useState([
    {
      name: 'Andrew Reynolds',
      position: 'Designer',
      imgSrc: team1,
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/'
      }
    },
    {
      name: 'Andrew Reynolds',
      position: 'Designer',
      imgSrc: team1,
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/'
      }
    },
    {
      name: 'Andrew Reynolds',
      position: 'Designer',
      imgSrc: team1,
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/'
      }
    },
    {
      name: 'Andrew Reynolds',
      position: 'Designer',
      imgSrc: team1,
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/'
      }
    }
  ])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.team',
        start: 'center bottom'
      }
    })

    teamTl
      .from('.team__title', .5, { y: '100%', onComplete() {
        teamTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.team-item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
        teamTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      teamTl.kill()
    }
  }, [])

  return (
    <section className="team">
      <div className="container">
        <div className="team__title-wrapper title-wrapper">
          <div className="team__title title title--small">Our Team</div>
        </div>
        <div className="team__inner">
          {
            list.map((item, index) => {
              return (
                <div className="team__item team-item" key={index}>
                  <div className="team-item__inner">
                    <div className="team-item__photo">
                      <img src={item.imgSrc} alt=""/>
                      <ul className="team-item__list">
                        <li className="team-item__list-item">
                          <a className="team-item__list-link" href={item.social.linkedin} rel="noreferrer" target="_blank">
                            <svg>
                              <use href={`${sprite}#social-linked-in`} />
                            </svg>
                          </a>
                        </li>
                        <li className="team-item__list-item">
                          <a className="team-item__list-link" href={item.social.twitter} rel="noreferrer" target="_blank">
                            <svg>
                              <use href={`${sprite}#social-twitter`} />
                            </svg>
                          </a>
                        </li>
                        <li className="team-item__list-item">
                          <a className="team-item__list-link" href={item.social.facebook} rel="noreferrer" target="_blank">
                            <svg>
                              <use href={`${sprite}#social-facebook`} />
                            </svg>
                          </a>
                        </li>
                        <li className="team-item__list-item">
                          <a className="team-item__list-link" href={item.social.instagram} rel="noreferrer" target="_blank">
                            <svg>
                              <use href={`${sprite}#social-instagram`} />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-item__name">{item.name}</div>
                    <div className="team-item__position">{item.position}</div>
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

export default Team