import React, { useState, useEffect, useCallback } from 'react'

import gsap from 'gsap'

import './Intro.scss'

import SearchList from './SearchList'

import { isBrowser } from '../../../utils/isBrowser'

import product1 from '../../../images/product-1.jpg'
import product2 from '../../../images/product-2.jpg'
import product3 from '../../../images/product-3.png'
import product4 from '../../../images/product-4.jpg'

const SearchIntro = ({ query }) => {
  let [ list, setList ] = useState([
    {
      id: 1,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product1,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product1,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product3,
          isActive: false
        }
      ]
    },
    {
      id: 2,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2
    },
    {
      id: 3,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product3,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product3,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 4,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product4
    },
    {
      id: 5,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product1
    },
    {
      id: 6,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 7,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 8,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 9,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 10,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 11,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 12,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 13,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 14,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 15,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 16,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 17,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 18,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 19,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    },
    {
      id: 20,
      title: 'Table for schoolchildren',
      price: '40 000 uah – 41 500 uah',
      link: '#',
      imgSrc: product2,
      variability: [
        {
          id: 11,
          bgColor: '#7C9EBB',
          imgSrc: product2,
          isActive: true
        },
        {
          id: 12,
          bgColor: '#D294CC',
          imgSrc: product1,
          isActive: false
        }
      ]
    }
  ])

  let [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    let searchIntroTl = gsap.timeline()

    searchIntroTl
      .from('.search-intro__title', .5, { delay: .4, y: '100%', onComplete() {
        searchIntroTl.set(this.targets(), { clearProps: 'all' })
      }})

    if (isBrowser()) {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }

    return () => {
      searchIntroTl.kill()
    }
  }, [])

  const changeVariability = useCallback((parentId, childId, event) => {
    let img = event.currentTarget.parentElement.parentElement,
      newImg = event.currentTarget.dataset.imgSrc

    img.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        img.classList.remove('fade')
      }, 250)

      setTimeout(() => {
        setList(list.map(item => {
          return {
            ...item,
            imgSrc: parentId === item.id ? newImg : item.imgSrc,
            variability: item.variability && item.variability.map(itemVar => {
              return {
                ...itemVar,
                isActive: parentId === item.id ? itemVar.id === childId : itemVar.isActive
              }
            })
          }
        }))
      }, 150)
    }
  }, [list])

  return (
    <section className="intro search-intro">
      <div className="container">
        <div className="search-intro__title-wrapper title-wrapper">
          {
            query
              ? <h1 className="search-intro__title title title--big">Search result for <span>“{query}”</span></h1>
              : <h1 className="search-intro__title title title--big">There is no result</h1>
          }
        </div>
        {
          query && <SearchList
            list={list}
            changeVariability={changeVariability}
            isLoading={isLoading}
          />
        }
        {
          query && !isLoading && <div className="pagination search-intro__pagination search-intro-pagination">
            Pagination
          </div>
        }
      </div>
    </section>
  )
}

export default SearchIntro