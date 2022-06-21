import React from 'react'

import sprite from '../../../icons/sprite.svg'

const SingleProductInfo = ({
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
  return (
    <div className="single-product-intro__info single-product-intro-info">
      <div className="single-product-intro-info__inner">
        <div className="single-product-intro-info__title-wrapper title-wrapper">
          <h1 className="single-product-intro-info__title title title--big">Model Strong of MDF</h1>
        </div>
        <p className="single-product-intro-info__desc">
          A table that is ready for loads. However, it will help you to relieve tension from the back, not only lift your equipment, but also the mood.
        </p>
        <div className="single-product-intro-info__chars">
          <div className="single-product-intro-info__chars-item">
            <div className="single-product-intro-info__chars-title local-title local-title--grey">Color</div>
            <div className="single-product-intro-info__chars-inner">
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: '#3E4541', borderColor: '#3E4541' }} />
                </div>
              </div>
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: '#7C9EBB', borderColor: '#7C9EBB' }} />
                </div>
              </div>
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: '#D294CC', borderColor: '#D294CC' }} />
                </div>
              </div>
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: '#FFFFFF', borderColor: '#E7E7E7' }} />
                </div>
              </div>
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <span style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <svg>
                      <use href={`${sprite}#multicolor`}></use>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-intro-info__chars-item">
            <div className="single-product-intro-info__chars-inner">
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <div className="single-product-intro-info__chars-title local-title local-title--grey">Additional warranty</div>
                  <div className="single-product-intro-info__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-intro-info__chars-dropdown-current
                        single-product-intro-info__chars-dropdown-current--one 
                        dropdown__current 
                        ${isOpenDropdownOne ? 'open' : ''}`
                      }
                      onClick={() => setIsOpenDropdownOne(prev => !prev)}
                    >
                      <span className="single-product-intro-info__chars-dropdown-text dropdown__text">
                        { dropdownOneList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-intro-info__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-intro-info__chars-dropdown-list dropdown__list ${isOpenDropdownOne ? 'open' : ''}`}>
                      {
                        dropdownOneList.map(item => {
                          return (
                            <div
                              className={`single-product-intro-info__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
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
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <div className="single-product-intro-info__chars-title local-title local-title--grey">Wood species</div>
                  <div className="single-product-intro-info__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-intro-info__chars-dropdown-current 
                        single-product-intro-info__chars-dropdown-current--two
                        dropdown__current 
                        ${isOpenDropdownTwo ? 'open' : ''}`
                      }
                      onClick={() => setIsOpenDropdownTwo(prev => !prev)}
                    >
                      <span className="single-product-intro-info__chars-dropdown-text dropdown__text">
                        { dropdownTwoList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-intro-info__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-intro-info__chars-dropdown-list dropdown__list ${isOpenDropdownTwo ? 'open' : ''}`}>
                      {
                        dropdownTwoList.map(item => {
                          return (
                            <div
                              className={`single-product-intro-info__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
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
              <div className="single-product-intro-info__chars-elem">
                <div className="single-product-intro-info__chars-elem-inner">
                  <div className="single-product-intro-info__chars-title local-title local-title--grey">Additional warranty</div>
                  <div className="single-product-intro-info__chars-dropdown dropdown">
                    <div
                      className={
                        `single-product-intro-info__chars-dropdown-current 
                        single-product-intro-info__chars-dropdown-current--three
                        dropdown__current 
                        ${isOpenDropdownThree ? 'open' : ''}`}
                      onClick={() => setIsOpenDropdownThree(prev => !prev)}
                    >
                      <span className="single-product-intro-info__chars-dropdown-text dropdown__text">
                        { dropdownThreeList.filter(item => item.isActive)[0].name }
                      </span>
                      <span className="single-product-intro-info__chars-dropdown-icon dropdown__icon">
                        <svg>
                          <use href={`${sprite}#header-arrow`} />
                        </svg>
                      </span>
                    </div>
                    <div className={`single-product-intro-info__chars-dropdown-list dropdown__list ${isOpenDropdownThree ? 'open' : ''}`}>
                      {
                        dropdownThreeList.map(item => {
                          return (
                            <div
                              className={`single-product-intro-info__chars-dropdown-item dropdown__item ${item.isActive ? 'active' : ''}`}
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
        <div className="single-product-intro-info__price">
          <span>41 500</span> uah
        </div>
        <div className="single-product-intro-info__controls">
          <div className="single-product-intro-info__controls-inner">
            <div className="single-product-intro-info__controls-item">
              <div className="single-product-intro-info__controls-counter">
                <button
                  className="single-product-intro-info__controls-minus"
                  type="button"
                  onClick={() => counter > 1 && setCounter(prev => parseInt(prev) - 1)}
                >
                  -
                </button>
                <input
                  className="single-product-intro-info__controls-inp"
                  type="text"
                  value={counter}
                  onInput={e => checkCounter(e)}
                />
                <button
                  className="single-product-intro-info__controls-plus"
                  type="button"
                  onClick={() => counter < 100 && setCounter(prev => parseInt(prev) + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="single-product-intro-info__controls-item">
              <button className="single-product-intro-info__controls-btn form-btn" type="button">
                <span>add to bag</span>
                <span>add to bag</span>
              </button>
            </div>
          </div>
        </div>
        <div className="single-product-intro-info__instruction">
          <div className="single-product-intro-info__instruction-inner">
            <a className="single-product-intro-info__instruction-item" download href={`#`}>
              <span className="single-product-intro-info__instruction-icon">
                <svg><use href={`${sprite}#download`} /></svg>
              </span>
              <span className="single-product-intro-info__instruction-text">Download 3D</span>
            </a>
            <a className="single-product-intro-info__instruction-item" href="https://google.com" target="_blank" rel="noreferrer">
              <span className="single-product-intro-info__instruction-icon">
                <svg><use href={`${sprite}#pdf`} /></svg>
              </span>
              <span className="single-product-intro-info__instruction-text">instruction</span>
            </a>
          </div>
        </div>
        <ul className="single-product-intro-info__list">
          <li className="single-product-intro-info__list-item">
            <div className="single-product-intro-info__list-item-icon">
              <svg>
                <use href={`${sprite}#check`}/>
              </svg>
            </div>
            <div className="single-product-intro-info__list-item-text">Google Pay, Apple Pay, Mastercard, Visa, Privat24, Cash</div>
          </li>
          <li className="single-product-intro-info__list-item">
            <div className="single-product-intro-info__list-item-icon">
              <svg>
                <use href={`${sprite}#check`}/>
              </svg>
            </div>
            <div className="single-product-intro-info__list-item-text">14-days return period</div>
          </li>
          <li className="single-product-intro-info__list-item">
            <div className="single-product-intro-info__list-item-icon">
              <svg>
                <use href={`${sprite}#check`}/>
              </svg>
            </div>
            <div className="single-product-intro-info__list-item-text">Free delivery in Ukraine, to your door</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingleProductInfo