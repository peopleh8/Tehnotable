import React  from 'react'

import IntroListItem from './introListItem'
import Skeleton from '../../Skeleton/Skeleton'

const IntroList = ({ list, isLoading }) => {
  if (!isLoading) {
    return (
      <div className="intro-blog__inner">
        {
          list.map(item => {
            return <IntroListItem
              isVideo={item.isVideo}
              imgSrc={item.imgSrc}
              link={item.link}
              date={item.date}
              category={item.category}
              title={item.title}
              key={item.id}
            />
          })
        }
      </div>
    )
  } else {
    return (
      <Skeleton type={'post'} length={9} imgWidth={480} imgHeight={570} />
    )
  }
}

export default IntroList