import React, { useEffect, useState } from 'react'

import gsap from 'gsap'

import IntroCategories from './IntroCategories'
import IntroList from './IntroList'
import IntroPagination from './IntroPagination'

import './Intro.scss'

import blog1 from '../../../images/blog-1.jpg'
import blog2 from '../../../images/blog-2.jpg'
import blog3 from '../../../images/blog-3.jpg'
import blog4 from '../../../images/blog-4.jpg'
import blog5 from '../../../images/blog-5.jpg'

const Intro = () => {
  let [ categories, setCategories ] = useState([
    {
      id: 1,
      slug: 'all-posts',
      title: 'All posts',
      count: '33',
      isActive: true
    },
    {
      id: 2,
      slug: 'company-news',
      title: 'Company news',
      count: '23',
      isActive: false
    },
    {
      id: 3,
      slug: 'health',
      title: 'Health',
      count: '8',
      isActive: false
    },
    {
      id: 4,
      slug: 'Uncategorized',
      title: 'uncategorized',
      count: '2',
      isActive: false
    }
  ])
  let [ list ] = useState([
    {
      id: 1,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog1
    },
    {
      id: 2,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog2
    },
    {
      id: 3,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: true,
      imgSrc: blog3
    },
    {
      id: 4,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog4
    },
    {
      id: 5,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog5
    },
    {
      id: 6,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog2
    },
    {
      id: 7,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog3
    },
    {
      id: 8,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: true,
      imgSrc: blog4
    },
    {
      id: 9,
      title: 'Happy New Year holidays!',
      date: '29.12.2021',
      category: 'Company news',
      link: '/single-post/',
      isVideo: false,
      imgSrc: blog5
    }
  ])
  let [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    let blogIntroTl = gsap.timeline()

    blogIntroTl
      .from('.intro-blog__title', .5, { delay: .2, y: '100%', onComplete() {
        blogIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-blog__categories-title', .5, { y: -20, opacity: 0, onComplete() {
        blogIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-blog__categories-item', .6, { x: -20, opacity: 0, stagger: .05, onComplete() {
        blogIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .to('.intro-blog__item-inner', 1.2, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .1, ease: 'Expo.easeInOut'}, '-=.2')
      .from('.intro-blog__item-inner img', .6, { scale: 1.3, stagger: .1, onComplete() {
        blogIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1.6')
      .from('.intro-blog__item-icon', .4, { scale: 0, stagger: .1, ease: 'back', onComplete() {
        blogIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')

    return () => {
      blogIntroTl.kill()
    }
  }, [])

  const toggleIsActive = categoryId => {
    setCategories(categories.map(item => {
      return {
        ...item,
        isActive: categoryId === item.id
      }
    }))

    // setIsLoading(true)
    //
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 5000)
  }

  return (
    <section className="intro intro-blog">
      <div className="container">
        <div className="intro-blog__wrapper">
          <div className="intro-blog__title-wrapper title-wrapper">
            <h1 className="intro-blog__title title title--big">Blog</h1>
          </div>
          <IntroCategories
            categories={categories}
            isLoading={isLoading}
            toggleIsActive={toggleIsActive}
          />
          <IntroList
            list={list}
            isLoading={isLoading}
          />
        </div>
        {!isLoading && <IntroPagination />}
      </div>
    </section>
  )
}

export default Intro