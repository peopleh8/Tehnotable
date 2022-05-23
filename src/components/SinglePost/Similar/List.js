import React, { useState } from 'react'

import ListItem from './ListItem'

import singlePost1 from '../../../images/single-post1.jpg'

const List = () => {
  let [ list ] = useState([
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    },
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    },
    {
      title: 'Happy New Year holidays!',
      imgSrc: singlePost1,
      category: 'Company news',
      date: '29.12.2021',
      link: '/single-post/'
    }
  ])

  return (
    <div className="single-post-similar__inner">
      {
        list.map((item, index) =>
          <ListItem
            title={item.title}
            imgSrc={item.imgSrc}
            category={item.category}
            date={item.date}
            link={item.link}
            key={index}
          />
        )
      }
    </div>
  )
}

export default List