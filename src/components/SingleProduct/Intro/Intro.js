import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'

import './Intro.scss'

import SingleProductInfo from './SingleProductInfo'
import SingleProductSlider from './SingleProductSlider'

import { isBrowser } from '../../../utils/isBrowser'

const SingleProductIntro = ({
  slider,
  counter,
  setCounter,
  checkCounter,
  dropdownOneList,
  isOpenDropdownOne,
  setIsOpenDropdownOne,
  changeDropdownOne,
  dropdownTwoList,
  isOpenDropdownTwo,
  setIsOpenDropdownTwo,
  changeDropdownTwo,
  dropdownThreeList,
  isOpenDropdownThree,
  setIsOpenDropdownThree,
  changeDropdownThree
}) => {
  let intro = useRef()

  useEffect(() => {
    intro.current.parentElement.parentElement.classList.add('disable-overflow')
    intro.current.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('disable-overflow')

    let singleProductInfo = gsap.timeline()

    singleProductInfo
      .from('.single-product-intro-info__title', .5, { delay: .2, y: '100%', onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.single-product-intro-info__desc', .5, { y: 40, opacity: 0, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-product-intro-info__chars', .5, { y: 40, opacity: 0, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-intro-info__price', .5, { y: 40, opacity: 0, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-intro-info__controls', .5, { y: 40, opacity: 0, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-intro-info__list', .5, { y: 40, opacity: 0, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.single-product-intro__slider-pagination-item', .6, { y: -40, opacity: 0, stagger: -.05, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.single-product-intro__slider', .5, { opacity: 0, pointerEvents: 'none', onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.single-product-intro-slider__item-elem', .5, { opacity: 0, stagger: .1, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')
      .from('.single-product-intro-slider__item-line', .5, { opacity: 0, stagger: .1, onComplete() {
        singleProductInfo.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')

    const checkDropdown = e => {
      if (isBrowser()) {
        if (
          (!e.target.closest('.dropdown__current.single-product-intro-info__chars-dropdown-current--one')
          && document.querySelector('.dropdown__current.single-product-intro-info__chars-dropdown-current--one').classList.contains('open'))
          && (!e.target.closest('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--one')
          && document.querySelector('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--one').classList.contains('open'))
        ) {
          setIsOpenDropdownOne(false)
        }

        if (
          (!e.target.closest('.dropdown__current.single-product-intro-info__chars-dropdown-current--two')
          && document.querySelector('.dropdown__current.single-product-intro-info__chars-dropdown-current--two').classList.contains('open'))
          && (!e.target.closest('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--two')
          && document.querySelector('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--two').classList.contains('open'))
        ) {
          setIsOpenDropdownTwo(false)
        }

        if (
          (!e.target.closest('.dropdown__current.single-product-intro-info__chars-dropdown-current--three')
          && document.querySelector('.dropdown__current.single-product-intro-info__chars-dropdown-current--three').classList.contains('open'))
          && (!e.target.closest('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--three')
          && document.querySelector('.dropdown__current.single-product-content-sidebar__chars-dropdown-current--three').classList.contains('open'))
        ) {
          setIsOpenDropdownThree(false)
        }
      }
    }

    if (isBrowser()) window.addEventListener('click', checkDropdown)

    return () => {
      singleProductInfo.kill()

      if (isBrowser()) window.removeEventListener('click', checkDropdown)
    }
  }, [])

  return (
    <section className="single-product-intro intro" ref={intro}>
      <div className="container">
        <div className="single-product-intro__inner">
          <SingleProductSlider
            slider={slider}
          />
          <SingleProductInfo
            counter={counter}
            setCounter={setCounter}
            checkCounter={checkCounter}
            dropdownOneList={dropdownOneList}
            isOpenDropdownOne={isOpenDropdownOne}
            setIsOpenDropdownOne={setIsOpenDropdownOne}
            changeDropdownOne={changeDropdownOne}
            dropdownTwoList={dropdownTwoList}
            isOpenDropdownTwo={isOpenDropdownTwo}
            setIsOpenDropdownTwo={setIsOpenDropdownTwo}
            changeDropdownTwo={changeDropdownTwo}
            dropdownThreeList={dropdownThreeList}
            isOpenDropdownThree={isOpenDropdownThree}
            setIsOpenDropdownThree={setIsOpenDropdownThree}
            changeDropdownThree={changeDropdownThree}
          />
        </div>
      </div>
    </section>
  )
}

export default SingleProductIntro