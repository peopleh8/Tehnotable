import React from 'react'

import TeamItem from './TeamItem'

const TeamList = ({ list }) => {
  return (
    <div className="team__inner">
      { list.map((item, index) => <TeamItem imgSrc={item.imgSrc} social={item.social} name={item.name} position={item.position} key={index} />) }
    </div>
  )
}

export default TeamList