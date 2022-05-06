import React, {useEffect, useState} from 'react'

import './SeoBlock.scss'
import { isBrowser } from '../../utils/isBrowser'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const SeoBlock = () => {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let seoBlockTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.seo-block',
        start: 'center bottom'
      }
    })

    seoBlockTl
      .from('.seo-block__title', .5, { y: '100%', onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.seo-block__article', .5, { y: 50, opacity: 0, onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.seo-block__btn-wrapper', .5, { y: 50, opacity: 0, onComplete() {
        seoBlockTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')

    return () => {
      seoBlockTl.kill()
    }
  }, [])

  function toggleIsOpen (e) {
    if (!isBrowser()) return

    setIsOpen(prev => !prev)

    let target = e.currentTarget,
        btn = target.querySelector('span span'),
        article = target.parentElement.previousElementSibling;

    if (!isOpen) {
      btn.style.opacity = 0

      setTimeout(() => {
        btn.textContent = 'read less'
      }, 210)

      setTimeout(() => {
        btn.style.opacity = 1
      }, 220)

      article.style.maxHeight = `${article.scrollHeight}px`;
    } else {
      btn.style.opacity = 0

      setTimeout(() => {
          btn.textContent = 'read more'
      },210)

      setTimeout(() => {
        btn.style.opacity = 1
      }, 220)

      article.style.maxHeight = '';
    }
  }

  return (
    <section className="seo-block">
      <div className="container">
        <div className="seo-block__title-wrapper title-wrapper">
          <div className="seo-block__title title title--small">SEO TEXT</div>
        </div>
        <article className={`seo-block__article ${isOpen ? 'open' : ''}`}>
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
        </article>
        <div className="seo-block__btn-wrapper">
          <button className="seo-block__btn" onClick={toggleIsOpen}>
            <span className="seo-block__btn-inner">
              <span>
                read more
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SeoBlock