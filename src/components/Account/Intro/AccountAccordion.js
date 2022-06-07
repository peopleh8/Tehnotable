import React, { useState } from 'react'

import { Collapse } from 'react-collapse'

import sprite from '../../../icons/sprite.svg'

import itemPreview from '../../../images/account-preview.jpg'

const AccountAccordion = () => {
  let [ itemsVisible, setItemsVisible ] = useState(6)

  let [ accordion, setAccordion ] = useState([
    {
      id: 1,
      isActive: true,
      number: '901-214',
      status: 'Completed',
      date: '27.12.2021',
      price: '413 333',
      previews: [
        itemPreview, itemPreview, itemPreview, itemPreview
      ]
    },
    {
      id: 2,
      isActive: false,
      number: '901-215',
      status: 'Completed',
      date: '27.12.2021',
      price: '413 333',
      previews: [
        itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview, itemPreview
      ]
    },
    {
      id: 3,
      isActive: false,
      number: '901-215',
      status: 'Completed',
      date: '27.12.2021',
      price: '413 333',
      previews: [
        itemPreview, itemPreview, itemPreview, itemPreview
      ]
    },
    {
      id: 4,
      isActive: false,
      number: '901-215',
      status: 'Completed',
      date: '27.12.2021',
      price: '413 333',
      previews: [
        itemPreview, itemPreview, itemPreview, itemPreview
      ]
    }
  ])

  const openAccordion = accId => {
    setAccordion(accordion.map(item => {
      return {
        ...item,
        isActive: accId === item.id ? !item.isActive : item.isActive
      }
    }))
  }

  return (
    <div className="account-intro-tabs__content-accordion">
      {
        accordion.length !== 0 ? accordion.map(item => {
          return (
            <div
              className={`account-intro-tabs__content-accordion-item ${item.isActive ? 'open' : ''}`}
              key={item.id}
            >
              <div
                className="account-intro-tabs__content-accordion-head"
                onClick={() => openAccordion(item.id)}
              >
                <div className="account-intro-tabs__content-accordion-head-inner">
                  <div className="account-intro-tabs__content-accordion-info">
                    <div className="account-intro-tabs__content-accordion-elem">
                      <div className="account-intro-tabs__content-accordion-title">order # {item.number}</div>
                      <div className="account-intro-tabs__content-accordion-value">{item.status}</div>
                    </div>
                    <div className="account-intro-tabs__content-accordion-elem">
                      <div className="account-intro-tabs__content-accordion-title">Date order</div>
                      <div className="account-intro-tabs__content-accordion-value">from {item.date}</div>
                    </div>
                    <div className="account-intro-tabs__content-accordion-elem">
                      <div className="account-intro-tabs__content-accordion-title">Order amount</div>
                      <div className="account-intro-tabs__content-accordion-value">{item.price} UAH</div>
                    </div>
                  </div>
                  <div className="account-intro-tabs__content-accordion-previews">
                    {
                      item.previews.map((preview, index) => {
                        return (
                          index + 1 <= itemsVisible &&
                          (
                            <div
                              className={`account-intro-tabs__content-accordion-preview ${item.previews.length > itemsVisible ? 'extend' : ''}`}
                              key={index}
                            >
                              <img src={preview} alt="" width={55} height={55} />
                            </div>
                          )
                        )
                      })
                    }
                  </div>
                </div>
                <div className="account-intro-tabs__content-accordion-icon accordion-icon">
                  <svg><use href={`${sprite}#accordion-arrow`}/></svg>
                </div>
              </div>
              <div className="account-intro-tabs__content-accordion-body-wrapper">
                <Collapse isOpened={item.isActive}>
                  <div className="account-intro-tabs__content-accordion-body">
                    <div className="account-intro-tabs__content-accordion-body-inner">
                      {
                        item.previews.map((preview, index) => {
                          return (
                            <div className="account-intro-tabs__content-accordion-body-item" key={index}>
                              <div className="account-intro-tabs__content-accordion-body-item-inner">
                                <img src={preview} alt="" width={88} height={88} />
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="account-intro-tabs__content-accordion-body-btn-wrapper">
                      <button className="account-intro-tabs__content-accordion-body-btn" type="button">
                        <svg>
                          <use href={`${sprite}#cart`} />
                        </svg>
                        <span>Reorder</span>
                      </button>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          )
        })
        : <div className="account-intro-tabs__content-empty-title title title--small">Empty List</div>
      }
    </div>
  )
}

export default AccountAccordion