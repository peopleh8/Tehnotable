import React, { useEffect } from 'react'

import './Category.scss'

import CategoryList from "./CategoryList";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Category = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let categoryTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.category',
        start: 'center bottom'
      }
    })

    categoryTl
      .from('.category__title', .5, { y: '100%', onComplete() {
        categoryTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.category__item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
        categoryTl.set(this.targets(), { clearProps: 'all' })
      }})

    return () => {
      categoryTl.kill()
    }
  }, [])

  return (
    <section className="category">
      <div className="container">
        <div className="category__title-wrapper title-wrapper">
          <div className="category__title title title--big">product category</div>
        </div>
        <CategoryList />
      </div>
    </section>
  )
}

export default Category