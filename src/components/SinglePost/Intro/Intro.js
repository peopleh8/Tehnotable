import React, { useState, useEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Intro.scss'

import Preview from './Preview'
import Article from './Article'
import Info from './Info'
import Title from './Title'
import Share from './Share'

import { isBrowser } from '../../../utils/isBrowser'

import singlePost1 from '../../../images/single-post1.jpg'

const SinglePostIntro = () => {
  let [ post ] = useState({
      title: 'HAPPY NEW YEAR HOLIDAYS!',
      imgSrc: singlePost1,
      category: 'COMPANY NEWS',
      date: '29.12.2021',
      pageLnk: isBrowser() && window.location.href,
      article: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet cupiditate debitis dignissimos dolore enim facilis hic illo ipsum, iusto laborum magnam magni modi nihil perferendis, provident quidem quisquam, soluta totam voluptas. Asperiores atque, culpa cumque deleniti doloremque eos id ipsa labore placeat possimus praesentium provident similique sint ullam voluptate.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
        </ul>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempora!</li>
        </ol>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <h4>Hello</h4>
        <h5>Hello</h5>
        <h6>Hello</h6>
      `
    })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let previewTl = gsap.timeline()

    let articleStartTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-intro__container',
        start: '200px bottom'
      }
    })

    let articleEndTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.single-post-intro__container',
        start: 'bottom bottom'
      }
    })

    previewTl
      .to('.single-post-intro__preview', 1.5, { delay: .2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'})
      .from('.single-post-intro__preview img', .8, { scale: 1.3, stagger: .1, onComplete() {
        previewTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')

    articleStartTl
      .from('.single-post-intro__info > *', .6, { x: -70, opacity: 0, stagger: .05, onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-post-intro__title',.5, { y: '100%', onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-post-intro__article', .6, { opacity: 0, y: 100, onComplete() {
        articleStartTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    articleEndTl
      .from('.single-post-intro__share-text', .6, { x: -70, opacity: 0, stagger: .05, onComplete() {
        articleEndTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-post-intro__share-btn', .5, { x: 50, opacity: 0, stagger: .1, onComplete() {
        articleEndTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    return () => {
      previewTl.kill()
      articleStartTl.kill()
      articleEndTl.kill()
    }
  }, [])

  return (
    <section className="intro single-post-intro">
      <div className="container">
        <div className="single-post-intro__inner">
          <Preview preview={post.imgSrc} />
          <div className="single-post-intro__container">
            <Info date={post.date} category={post.category} />
            <Title title={post.title} />
            <Article article={post.article} />
            <Share title={post.title} article={post.article} pageLnk={post.pageLnk} />
          </div>
          <span />
        </div>
      </div>
    </section>
  )
}

export default SinglePostIntro