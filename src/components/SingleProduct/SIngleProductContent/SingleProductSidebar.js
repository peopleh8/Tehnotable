import React, { useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import sprite from '../../../icons/sprite.svg'

import sliderItem1 from '../../../images/single-product-item1.png'

const SingleProductSidebar = ({
  counter,
  setCounter,
  checkCounter,
  dropdownOneList,
  isOpenDropdownOne,
  setIsOpenDropdownOne,
  changeDropdownOne,
  dropdownTwoList,
  isOpenDropdownTwo,
  setIsOpenDropdownTwo,
  changeDropdownTwo,
  dropdownThreeList,
  isOpenDropdownThree,
  setIsOpenDropdownThree,
  changeDropdownThree
}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let singleProductSidebarTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-product-content-sidebar',
        start: '500px bottom'
      }
    })

    singleProductSidebarTl
      .from('.single-product-content-sidebar__title', .5, { delay: .2, y: '100%', onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-content-sidebar__preview-wrapper', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-product-content-sidebar__chars', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__price', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__controls', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-content-sidebar__list', .5, { y: 40, opacity: 0, onComplete() {
        singleProductSidebarTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')

    return () => {
      singleProductSidebarTl.kill()
    }
  }, [])

  return (
    <aside className="single-product-content__sidebar single-product-content-sidebar">
      <div className="single-product-content-sidebar__inner">
        <div className="single-product-content-sidebar__title-wrapper title-wrapper">
          <div className="single-product-content-sidebar__title title title--big">Model Strong of MDF</div>
        </div>
        <div className="single-product-content-sidebar__preview-wrapper">
          <div className="single-product-content-sidebar__preview">
            <img src={sliderItem1} alt="" width={195} height={170} />
          </div>
        </div>
        <div className="single-product-content-sidebar__chars">
          <div className="single-product-content-sidebar__chars-item">
            <div className="single-product-content-sidebar__chars-title local-title local-title--grey">Color</div>
            <div className="single-product-content-sidebar__chars-inner">
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: '#3E4541', borderColor: '#3E4541' }} />
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: '#7C9EBB', borderColor: '#7C9EBB' }} />
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: '#D294CC', borderColor: '#D294CC' }} />
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: '#FFFFFF', borderColor: '#E7E7E7' }} />
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <span style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <svg>
                      <use href={`${sprite}#multicolor`} />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-content-sidebar__chars-item">
            <div className="single-product-content-sidebar__chars-inner">
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <div className="single-product-content-sidebar__chars-title local-title local-title--grey">Additional warranty</div>
                  <div className="single-product-content-sidebar__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-content-sidebar__chars-dropdown-current
                        single-product-content-sidebar__chars-dropdown-current--one
                        dropdown__current
                        ${isOpenDropdownOne ? 'open' : ''}`
                      }
                      onClick={() => setIsOpenDropdownOne(prev => !prev)}
                    >
                      <span className="single-product-content-sidebar__chars-dropdown-text dropdown__text">
                        { dropdownOneList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-content-sidebar__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-content-sidebar__chars-dropdown-list dropdown__list ${isOpenDropdownOne ? 'open' : ''}`}>
                      {
                        dropdownOneList.map(item => {
                          return (
                            <div
                              className={`single-product-content-sidebar__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
                              onClick={e => changeDropdownOne(item.id, e)}
                              key={item.id}
                            >
                              {item.name}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <div className="single-product-content-sidebar__chars-title local-title local-title--grey">Wood species</div>
                  <div className="single-product-content-sidebar__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-content-sidebar__chars-dropdown-current
                        single-product-content-sidebar__chars-dropdown-current--two
                        dropdown__current
                        ${isOpenDropdownTwo ? 'open' : ''}`
                      }
                      onClick={() => setIsOpenDropdownTwo(prev => !prev)}
                    >
                      <span className="single-product-content-sidebar__chars-dropdown-text dropdown__text">
                       { dropdownTwoList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-content-sidebar__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-content-sidebar__chars-dropdown-list dropdown__list ${isOpenDropdownTwo ? 'open' : ''}`}>
                      {
                        dropdownTwoList.map(item => {
                          return (
                            <div
                              className={`single-product-content-sidebar__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
                              onClick={e => changeDropdownTwo(item.id, e)}
                              key={item.id}
                            >
                              {item.name}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-product-content-sidebar__chars-elem">
                <div className="single-product-content-sidebar__chars-elem-inner">
                  <div className="single-product-content-sidebar__chars-title local-title local-title--grey">Additional warranty</div>
                  <div className="single-product-content-sidebar__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-content-sidebar__chars-dropdown-current
                        single-product-content-sidebar__chars-dropdown-current--three
                        dropdown__current
                        ${isOpenDropdownThree ? 'open' : ''}`
                      }
                      onClick={() => setIsOpenDropdownThree(prev => !prev)}
                    >
                      <span className="single-product-content-sidebar__chars-dropdown-text dropdown__text">
                        { dropdownThreeList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-content-sidebar__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-content-sidebar__chars-dropdown-list dropdown__list ${isOpenDropdownThree ? 'open' : ''}`}>
                      {
                        dropdownThreeList.map(item => {
                          return (
                            <div
                              className={`single-product-content-sidebar__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
                              onClick={e => changeDropdownThree(item.id, e)}
                              key={item.id}
                            >
                              {item.name}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-product-content-sidebar__price">41 500 UAH</div>
        <div className="single-product-content-sidebar__controls">
          <div className="single-product-content-sidebar__controls-inner">
            <div className="single-product-content-sidebar__controls-item">
              <div className="single-product-content-sidebar__controls-counter">
                <button
                  className="single-product-content-sidebar__controls-minus"
                  type="button"
                  onClick={() => counter > 1 && setCounter(prev => parseInt(prev) - 1)}
                >
                  -
                </button>
                <input
                  className="single-product-content-sidebar__controls-inp"
                  type="text"
                  value={counter}
                  onInput={e => checkCounter(e)}
                />
                <button
                  className="single-product-content-sidebar__controls-plus"
                  type="button"
                  onClick={() => counter < 100 && setCounter(prev => parseInt(prev) + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="single-product-content-sidebar__controls-item">
              <button className="single-product-content-sidebar__controls-btn form-btn" type="button">
                <span>add to bag</span>
                <span>add to bag</span>
              </button>
            </div>
          </div>
        </div>
        <ul className="single-product-content-sidebar__list">
          <li className="single-product-content-sidebar__list-item">
            <div className="single-product-content-sidebar__list-item-icon">
              <svg>
                <use href={`${sprite}#check`} />
              </svg>
            </div>
            <div className="single-product-content-sidebar__list-item-text">Google Pay, Apple Pay, Mastercard, Visa, Privat24, Cash</div>
          </li>
          <li className="single-product-content-sidebar__list-item">
            <div className="single-product-content-sidebar__list-item-icon">
              <svg>
                <use href={`${sprite}#check`} />
              </svg>
            </div>
            <div className="single-product-content-sidebar__list-item-text">14-days return period</div>
          </li>
          <li className="single-product-content-sidebar__list-item">
            <div className="single-product-content-sidebar__list-item-icon">
              <svg>
                <use href={`${sprite}#check`} />
              </svg>
            </div>
            <div className="single-product-content-sidebar__list-item-text">GoogleFree delivery in Ukraine, to your door</div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SingleProductSidebar