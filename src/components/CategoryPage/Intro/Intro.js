import React, { useState, useEffect, useRef } from 'react'

import gsap from 'gsap'

import './Intro.scss'

import CategoryPreview from './CategoryPreview'
import CategoryList from './CategoryList'

import categoryList1 from '../../../images/category-list-1.jpg'
import categoryList2 from '../../../images/category-list-2.jpg'
import categoryList3 from '../../../images/category-list-3.jpg'

const CategoryIntro = () => {
  let [ list ] = useState([
    {
      id: 1,
      title: 'Height-adjustable tables',
      link: '#',
      imgSrc1: categoryList1,
      imgSrc2: categoryList2,
      imgSrc3: categoryList3,
      isActive: true
    },
    {
      id: 2,
      title: 'Ergonomic chairs',
      link: '#',
      imgSrc1: categoryList1,
      imgSrc2: categoryList2,
      imgSrc3: categoryList3,
    },
    {
      id: 3,
      title: 'Complementary options',
      link: '#',
      imgSrc1: categoryList1,
      imgSrc2: categoryList2,
      imgSrc3: categoryList3,
    },
    {
      id: 4,
      title: 'Acoustic cabins',
      link: '#',
      imgSrc1: categoryList1,
      imgSrc2: categoryList2,
      imgSrc3: categoryList3,
    }
  ])

  let intro = useRef()

  useEffect(() => {
    intro.current.parentElement.parentElement.classList.add('disable-overflow')
    intro.current.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('disable-overflow')

    let categoryIntroTl = gsap.timeline()

    categoryIntroTl
      .from('.intro-category__title', .5, { delay: .2, y: '100%', onComplete() {
        categoryIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-category-list__item', .5, { x: -50, opacity: 0, stagger: .1, onComplete() {
        categoryIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-category-list__item-title', .5, { y: 30, opacity: 0, stagger: .1, onComplete() {
        categoryIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      categoryIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro intro-category" ref={intro}>
      <CategoryPreview />
      <CategoryList list={list} />
    </section>
  )
}

export default CategoryIntro