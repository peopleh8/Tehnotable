import React from 'react'

const CategoryProductsFilter = ({
  colorFilter,
  materialFilter,
  choice,
  toggleColorFilter,
  toggleMaterialFilter,
  deleteChoice,
  isLoading
}) => {
  return (
    <aside className={`category-products__filter category-products-filter ${isLoading ? 'disabled' : ''}`}>
      <div className="category-products-filter__inner">
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
        <div className="category-products-filter__btn-wrapper">
          <button
            className={`category-products-filter__btn form-btn ${choice.length === 0 ? 'disable' : ''}`}
            type="button"
          >
            <span>clean the filter</span>
            <span>clean the filter</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default CategoryProductsFilter