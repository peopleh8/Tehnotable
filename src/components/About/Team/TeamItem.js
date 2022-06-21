import React from 'react'

import sprite from '../../../icons/sprite.svg'

const TeamItem = ({ imgSrc, social, name, position }) => {
  return (
    <div className="team__item team-item">
      <div className="team-item__inner">
        <div className="team-item__photo">
          <img src={imgSrc} alt=""/>
          <ul className="team-item__list">
            <li className="team-item__list-item">
              <a className="team-item__list-link" href={social.linkedin} rel="noreferrer" target="_blank">
                <svg>
                  <use href={`${sprite}#social-linked-in`} />
                </svg>
              </a>
            </li>
            <li className="team-item__list-item">
              <a className="team-item__list-link" href={social.twitter} rel="noreferrer" target="_blank">
                <svg>
                  <use href={`${sprite}#social-twitter`} />
                </svg>
              </a>
            </li>
            <li className="team-item__list-item">
              <a className="team-item__list-link" href={social.facebook} rel="noreferrer" target="_blank">
                <svg>
                  <use href={`${sprite}#social-facebook`} />
                </svg>
              </a>
            </li>
            <li className="team-item__list-item">
              <a className="team-item__list-link" href={social.instagram} rel="noreferrer" target="_blank">
                <svg>
                  <use href={`${sprite}#social-instagram`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="team-item__name">{name}</div>
        <div className="team-item__position">{position}</div>
      </div>
    </div>
  )
}

export default TeamItem