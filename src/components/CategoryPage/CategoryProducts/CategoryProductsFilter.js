import React from 'react'

import Logo from '../../Logo/Logo'

const CategoryProductsFilter = ({
  colorFilter,
  materialFilter,
  choice,
  toggleColorFilter,
  toggleMaterialFilter,
  deleteChoice,
  isMobileFilterOpen,
  closeMobileFilter,
  isLoading
}) => {
  return (
    <aside className={`category-products__filter category-products-filter ${isLoading ? 'disabled' : ''} ${isMobileFilterOpen ? 'open' : ''}`}>
      <div className="category-products-filter__inner">
        <div className="category-products-filter__top category-products__mobile-top">
          <button
            className="category-products-filter__close category-products__mobile-close"
            onClick={closeMobileFilter}
          >
            <span className="category-products-filter__close-icon category-products__mobile-close-icon"><span /><span /></span>
            <span className="category-products-filter__close-text category-products__mobile-close-text">Close</span>
          </button>
          <Logo className="logo-header" />
        </div>
        <div className="category-products-filter__title category-products__mobile-title">Filter</div>
        <div className="category-products-filter__overflow">
          <div className="category-products-filter__items">
          <div className="category-products-filter__item">
            <div className="category-products-filter__item-title local-title local-title--grey">Color</div>
            <div className="category-products-filter__item-inner">
              {
                colorFilter.map(item => {
                  return (
                    <div className="category-products-filter__item-elem" key={item.id}>
                      <div
                        className={`category-products-filter__item-elem-inner ${item.isActive ? 'active' : ''}`}
                        onClick={() => toggleColorFilter(item.id)}
                      >
                        <span style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="category-products-filter__item">
            <div className="category-products-filter__item-title local-title local-title--grey">Material</div>
            <div className="category-products-filter__item-inner">
              {
                materialFilter.map(item => {
                  return (
                    <div className="category-products-filter__item-elem" key={item.id}>
                      <div
                        className={`category-products-filter__item-elem-inner ${item.isActive ? 'active' : ''}`}
                        onClick={() => toggleMaterialFilter(item.id)}
                      >
                        <div className="category-products-filter__item-elem-title">{item.name}</div>
                        <p className="category-products-filter__item-elem-desc">{item.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
          {
            choice.length !== 0 && <div className="category-products-filter__choice">
              <div className="category-products-filter__choice-title local-title local-title--grey">your choice:</div>
              <div className="category-products-filter__choice-inner">
                {
                  choice.map(item => {
                    return (
                      <div className="category-products-filter__choice-elem" key={item.id}>
                        <div className="category-products-filter__choice-elem-inner">
                          <p className="category-products-filter__choice-elem-title">{item.name}</p>
                          <div
                            className="category-products-filter__choice-elem-icon"
                            onClick={() => deleteChoice(item.id)}
                          >
                            <span/><span/>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          }
        </div>
        <div className="category-products-filter__btns">
          <div className="category-products-filter__btn-wrapper">
            <button
              className={`category-products-filter__btn category-products-filter__btn--cancel form-btn ${choice.length === 0 ? 'disable' : ''}`}
              type="button"
            >
              <span>clean the filter</span>
              <span>clean the filter</span>
            </button>
          </div>
          <div className="category-products-filter__btn-wrapper">
            <button
              className={`category-products-filter__btn category-products-filter__btn--apply form-btn ${choice.length === 0 ? 'disable' : ''}`}
              type="button"
            >
              <span>Apply</span>
              <span>Apply</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default CategoryProductsFilter