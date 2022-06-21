import React, { useState, useEffect, useCallback, useContext } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import gsap from 'gsap'
// import ApiNovaPochta from 'yz-react-deliveri-newpochta'

import './Intro.scss'

import CustomerInfo from './CustomerInfo'
import ShippingAddress from './ShippingAddress'
import ShippingMethod from './ShippingMethod'
import PaymentInfo from './PaymentInfo'
import DeliveryList from './DeliveryList'
import DeliveryInfo from './DeliveryInfo'
import BackButton from './BackButton'

import { isBrowser } from '../../../utils/isBrowser'

import { PrefixContext } from '../../../context/PrefixProvider'

import checkout1 from '../../../images/checkout-1.png'

const CheckoutIntro = () => {
  let prefix = useContext(PrefixContext)

  let [ items, setItems ] = useState([
    {
      id: 1,
      title: 'Table for schoolchildren',
      category: 'Height-adjustable tables',
      count: '1',
      price: '41 500',
      imgSrc: checkout1
    },
    {
      id: 2,
      title: 'Table for schoolchildren',
      category: 'Height-adjustable tables',
      count: '1',
      price: '41 500',
      imgSrc: checkout1
    },
    {
      id: 3,
      title: 'Table for schoolchildren',
      category: 'Height-adjustable tables',
      count: '1',
      price: '41 500',
      imgSrc: checkout1
    },
    {
      id: 4,
      title: 'Table for schoolchildren',
      category: 'Height-adjustable tables',
      count: '1',
      price: '41 500',
      imgSrc: checkout1
    },
    {
      id: 5,
      title: 'Table for schoolchildren',
      category: 'Height-adjustable tables',
      count: '1',
      price: '41 500',
      imgSrc: checkout1
    }
  ])
  let [ areas, setAreas ] = useState([])

  const deleteItem = useCallback((id, e) => {
    e.currentTarget.parentElement.parentElement.parentElement.classList.add('hide')

    if (isBrowser()) {
      setTimeout(() => {
        setItems(items.filter(item => item.id !== id))
      },250)
    }
  }, [items])

  // function feedback() {
  //   const apiKey = 'f8720725518b68dc905857ce659337e5'
  //
  //   const cb = (data) => {
  //     console.log(data)
  //     setAreas(data.data)
  //     // тут должен быть обработчик полученого результата
  //   }
  //
  //   const np = new ApiNovaPochta
  //   np.getAreas(cb, apiKey)
  //   // np.getCities(cb, apiKey)
  //   // np.getWarehouses(cb, apiKey)
  //
  // }

  useEffect(() => {
    let checkoutIntroTl = gsap.timeline()

    // feedback()

    checkoutIntroTl
      .from('.intro-checkout-content__item', .6, { delay: .2, y: 70, opacity: 0, stagger: .1, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.intro-checkout-content__item-title', .5, { y: '100%', stagger: .1, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.4')
      .from('.intro-checkout-delivery__list', .6, { y: -50, opacity: 0, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.intro-checkout-delivery__info-title', .6, { y: '100%', onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.3')
      .from('.intro-checkout-delivery__info-cost', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.2')
      .from('.intro-checkout-delivery__info-discount', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')
      .from('.intro-checkout-delivery__info-btn-wrapper', .6, { y: -50, opacity: 0, stagger: .1, onComplete() {
        checkoutIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.5')



    return () => {
      checkoutIntroTl.kill()
    }
  }, [])

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm({
    mode: 'onBlur'
  })

  const formSubmit = (data, e) => {
    alert(JSON.stringify({...data, ...items}))

    navigate(`${prefix}thanks/`, { state: { deliveryCode: '11111' } })
  }

  const formError = (error, e) => {
    console.error(error)
  }

  return (
    <section className="intro intro-checkout">
      <div className="container">
        <form className="intro-checkout__inner" onSubmit={handleSubmit(formSubmit, formError)}>
          <BackButton prefix={prefix} />
          <div className="intro-checkout__content intro-checkout-content">
            <CustomerInfo
              register={register}
              errors={errors}
            />
            <ShippingAddress
              register={register}
              errors={errors}
            />
            <ShippingMethod />
            <PaymentInfo />
          </div>
          <div className="intro-checkout__delivery intro-checkout-delivery">
            <DeliveryList items={items} deleteItem={deleteItem} />
            {items.length !== 0 && <DeliveryInfo
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
            />}
          </div>
        </form>
      </div>
    </section>
  )
}

export default CheckoutIntro