import React, { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './CategoryProducts.scss'

import CategoryProductsFilter from './CategoryProductsFilter'
import CategoryProductsList from './CategoryProductsList'
import CategoryProductsOverlay from './CategoryProductsOverlay'

import { disableScrollbar } from '../../../utils/disableScrollbar'
import { enableScrollbar } from '../../../utils/enableScrollbar'
import { isBrowser } from '../../../utils/isBrowser'

import product1 from '../../../images/product-1.jpg'
import product2 from '../../../images/product-2.jpg'
import product3 from '../../../images/product-3.png'
import product4 from '../../../images/product-4.jpg'

const CategoryProducts = ({ setHideCategoryHeader }) => {
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
  ])
  let [ colorFilter, setColorFilter ] = useState([
    {
      id: 1,
      name: 'black',
      bgColor: '#3E4541',
      borderColor: '#3E4541',
      isActive: false
    },
    {
      id: 2,
      name: 'blue',
      bgColor: '#7C9EBB',
      borderColor: '#7C9EBB',
      isActive: false
    },
    {
      id: 3,
      name: 'purple',
      bgColor: '#D294CC',
      borderColor: '#D294CC',
      isActive: false
    },
    {
      id: 4,
      name: 'white',
      bgColor: '#fff',
      borderColor: '#E7E7E7',
      isActive: false
    },
  ])
  let [ materialFilter, setMaterialFilter ] = useState([
    {
      id: 44,
      name: 'Wood',
      desc: 'the best ecological tree',
      isActive: false
    },
    {
      id: 45,
      name: 'Metal',
      desc: 'the best ecological tree',
      isActive: false
    },
  ])
  let [ choice, setChoice ] = useState([])
  let [ isOpenDropdown, setIsOpenDropdown ] = useState(false)
  let [ secSortList, setSecSort ] = useState([
    {
      id: 1,
      name: 'Sort by name',
      isActive: true
    },
    {
      id: 2,
      name: 'Sort by price',
      isActive: false
    },
    {
      id: 3,
      name: 'Sort by date',
      isActive: false
    },
  ])
  let [ isMobileFilterOpen, setMobileFilterOpen ] = useState(false)
  let [ isMobileSortOpen, setMobileSortOpen ] = useState(false)
  let [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    setChoice([...colorFilter, ...materialFilter].filter(item => item.isActive))
  }, [colorFilter, materialFilter])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let categoryProductsTl = null

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        categoryProductsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: '600px bottom'
          }
        })

        categoryProductsTl
          .from('.category-products-filter__items', .6, { y: -50, opacity: 0, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.category-products-filter__btn-wrapper', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.3')
          .from('.category-products-dropdown', .5, { y: -30, opacity: 0, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.2')
          .from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }}, '-=.1')
      },
      '(max-width: 991px)': () => {
        categoryProductsTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.category-products',
            start: '300px bottom'
          }
        })

        categoryProductsTl
          .from('.category-products-btns__item ', .5, { opacity: 0, stagger: .1, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.category-products-list__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            categoryProductsTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    const checkDropdown = e => {
      if (isBrowser())
        (!e.target.closest('.dropdown__current') && document.querySelector('.dropdown__current').classList.contains('open')) && setIsOpenDropdown(false)
    }

    if (isBrowser())
      window.addEventListener('click', checkDropdown)

    return () => {
      categoryProductsTl.kill()

      if (isBrowser())
        window.removeEventListener('click', checkDropdown)
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

  const toggleColorFilter = useCallback(colorId => {
    setColorFilter(colorFilter.map(item => {
      return {
        ...item,
        isActive: colorId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [colorFilter])

  const toggleMaterialFilter = useCallback(materialId => {
    setMaterialFilter(materialFilter.map(item => {
      return {
        ...item,
        isActive: materialId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [materialFilter])

  const deleteChoice = useCallback(choiceId => {
    setChoice(choice.filter(item => choiceId !== item.id))

    setColorFilter(colorFilter.map(item => {
      return {
        ...item,
        isActive: choiceId === item.id ? !item.isActive : item.isActive
      }
    }))

    setMaterialFilter(materialFilter.map(item => {
      return {
        ...item,
        isActive: choiceId === item.id ? !item.isActive : item.isActive
      }
    }))
  }, [choice])

  const changeSort = useCallback((sortId, event) => {
    let parent = event.currentTarget.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setSecSort(secSortList.map(item => {
          return {
            ...item,
            isActive: sortId === item.id
          }
        }))
      }, 150)

      setTimeout(() => {
        parent.classList.remove('fade')
      }, 200)
    }
    setIsOpenDropdown(false)
  }, [secSortList, isOpenDropdown])

  const openMobileFilter = useCallback(() => {
    setMobileFilterOpen(true)
    setHideCategoryHeader(true)

    let mobileFilterTl = gsap.timeline()

    mobileFilterTl
      .from('.category-products-filter__inner > *', .6, { delay: .4, opacity: 0, y: 30, stagger: .1, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }})

    disableScrollbar()
  }, [isMobileFilterOpen])

  const closeMobileFilter = useCallback(() => {
    setMobileFilterOpen(false)
    setHideCategoryHeader(false)

    let mobileFilterTl = gsap.timeline()

    mobileFilterTl
      .fromTo('.category-products-filter__inner > *', .4, { opacity: 1, y: 0, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }}, { opacity: 0, onComplete() {
        mobileFilterTl.set(this.targets(), { clearProps: 'all' })
      }})

    enableScrollbar()
  }, [isMobileFilterOpen])

  const openMobileSort = useCallback(() => {
    setMobileSortOpen(true)
    setHideCategoryHeader(true)

    let mobileSortTl = gsap.timeline()

    mobileSortTl
      .from('.category-products__dropdown > *', .6, { delay: .4, opacity: 0, y: 30, stagger: .1, onComplete() {
        mobileSortTl.set(this.targets(), { clearProps: 'all' })
      }})

    disableScrollbar()
  }, [isMobileSortOpen])

  const closeMobileSort = useCallback(() => {
    setMobileSortOpen(false)
    setHideCategoryHeader(false)

    let mobileSortTl = gsap.timeline()

    mobileSortTl
      .fromTo('.category-products__dropdown > *', .4, { opacity: 1, y: 0, onComplete() {
          mobileSortTl.set(this.targets(), { clearProps: 'all' })
        }}, { opacity: 0, onComplete() {
          mobileSortTl.set(this.targets(), { clearProps: 'all' })
        }})

    enableScrollbar()
  }, [isMobileSortOpen])

  return (
    <section className="category-products">
      <div className="container">
        <div className="category-products__inner">
          <CategoryProductsFilter
            colorFilter={colorFilter}
            materialFilter={materialFilter}
            choice={choice}
            toggleColorFilter={toggleColorFilter}
            toggleMaterialFilter={toggleMaterialFilter}
            deleteChoice={deleteChoice}
            isMobileFilterOpen={isMobileFilterOpen}
            closeMobileFilter={closeMobileFilter}
            isLoading={isLoading}
          />
          <CategoryProductsList
            list={list}
            secSortList={secSortList}
            isOpenDropdown={isOpenDropdown}
            setIsOpenDropdown={setIsOpenDropdown}
            changeSort={changeSort}
            changeVariability={changeVariability}
            isMobileFilterOpen={isMobileFilterOpen}
            openMobileFilter={openMobileFilter}
            isMobileSortOpen={isMobileSortOpen}
            openMobileSort={openMobileSort}
            closeMobileSort={closeMobileSort}
            isLoading={isLoading}
          />
          <CategoryProductsOverlay
            isMobileFilterOpen={isMobileFilterOpen}
            closeMobileFilter={closeMobileFilter}
            isMobileSortOpen={isMobileSortOpen}
            closeMobileSort={closeMobileSort}
          />
        </div>
      </div>
    </section>
  )
}

export default CategoryProducts