import React, { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'

import './Intro.scss'

import IntroAccordion from './IntroAccordion'
import IntroForm from './IntroForm'
import ModalThanks from "../../ModalThanks/ModalThanks";

const FaqIntro = () => {
  let [ list, setList ] = useState([
    {
      id: 1,
      isOpen: true,
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consectetur inventore laboriosam ut! Ad eius enim officiis repellendus veritatis.'
    },
    {
      id: 2,
      isOpen: false,
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consectetur inventore laboriosam ut! Ad eius enim officiis repellendus veritatis.'
    },
    {
      id: 3,
      isOpen: false,
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consectetur inventore laboriosam ut! Ad eius enim officiis repellendus veritatis.'
    },
    {
      id: 4,
      isOpen: false,
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consectetur inventore laboriosam ut! Ad eius enim officiis repellendus veritatis.'
    }
  ])

  const toggleOpen = useCallback(id => {
    setList(list.map(item => {
      return {
        ...item,
        isOpen: item.id === id ? !item.isOpen : item.isOpen
      }
    }))
  }, [list])

  useEffect(() => {
    let faqIntroTl = gsap.timeline()

    faqIntroTl
      .from('.faq-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        faqIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.faq-intro-accordion__item', .6, { y: 20, opacity: 0, stagger: .1, onComplete() {
        faqIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.faq-intro-form', .6, { opacity: 0, x: 50, onComplete() {
        faqIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')

    return () => {
      faqIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro faq-intro">
      <div className="container">
        <div className="faq-intro__title-wrapper title-wrapper">
          <h1 className="faq-intro__title title title--big">Faq</h1>
        </div>
        <div className="faq-intro__inner">
          <IntroAccordion list={list} toggleOpen={toggleOpen} />
          <IntroForm />
        </div>
      </div>
      <ModalThanks />
    </section>
  )
}

export default FaqIntro