import React, { useEffect, useRef, useState } from 'react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import DeliveryItem from './DeliveryItem'

const DeliveryList = ({ items, deleteItem }) => {
  const list = useRef()
  let [ isPadding, setIsPadding ] = useState(false)


  useEffect(() => {
    let children = [...list.current.el.children]

    children.forEach(child => {
      if (child.classList.contains('simplebar-vertical')) {
        child.style.visibility !== 'hidden' ? setIsPadding(true) : setIsPadding(false)
      }
    })
  }, [items])

  useEffect(() => {
    let children = [...list.current.el.children]

    children.forEach(child => {
      if (child.classList.contains('simplebar-vertical')) {
        child.style.visibility !== 'hidden' ? setIsPadding(true) : setIsPadding(false)
      }
    })
  }, [])

  if (items.length) {
    return (
      <SimpleBar
        className={`intro-checkout-delivery__list ${isPadding ? 'has-padding' : ''}`}
        autoHide={false}
        ref={list}
      >
        {
          items.map(item => {
            return <DeliveryItem
              id={item.id}
              title={item.title}
              category={item.category}
              count={item.count}
              price={item.price}
              imgSrc={item.imgSrc}
              deleteItem={deleteItem}
              key={item.id}
            />
          })
        }
      </SimpleBar>
    )
  } else {
    return (
      <div className="intro-checkout-delivery__empty-title-wrapper title-wrapper">
        <div className="intro-checkout-delivery__empty-title title title--small">Empty list</div>
      </div>
    )
  }
}

export default DeliveryList