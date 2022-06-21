import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { isBrowser } from '../utils/isBrowser'

import '../components/Layout/Breadcrumbs.scss'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import SingleProductIntro from '../components/SingleProduct/Intro/Intro'
import SingleProductContent from '../components/SingleProduct/SIngleProductContent/SingleProductContent'
import SingleProductAuthor from '../components/SingleProduct/SingleProductAuthor/SingleProductAuthor'
import RecomendedProducts from '../components/RecomendedProducts/RecomendedProducts'
import Discount from '../components/Discount/Discount'

import PrefixProvider from '../context/PrefixProvider'

import sliderItem1 from '../images/single-product-item1.jpg'
import deg360 from '../images/deg360.jpg'

const SingleProduct = ({ pageContext }) => {
  /* Intro, Sidebar */
  let [ slider ] = useState([
    {
      id: 1,
      bigPreview: sliderItem1,
      smallPreview: deg360,
      is3D: true
    },
    {
      id: 2,
      bigPreview: sliderItem1,
      smallPreview: sliderItem1,
      is3D: false
    },
    {
      id: 3,
      bigPreview: sliderItem1,
      smallPreview: sliderItem1,
      is3D: false
    },
    {
      id: 4,
      bigPreview: sliderItem1,
      smallPreview: sliderItem1,
      is3D: false
    },
    {
      id: 5,
      bigPreview: sliderItem1,
      smallPreview: sliderItem1,
      is3D: false
    }
  ])

  let [ counter, setCounter ] = useState(1)

  let [ isOpenDropdownOne, setIsOpenDropdownOne ] = useState(false)
  let [ dropdownOneList, setDropdownOneList ] = useState([
    {
      id: 1,
      name: '2 years',
      isActive: true
    },
    {
      id: 2,
      name: '3 years',
      isActive: false
    },
    {
      id: 3,
      name: '4 years',
      isActive: false
    },
    {
      id: 5,
      name: '5 years',
      isActive: false
    },
  ])

  let [ isOpenDropdownTwo, setIsOpenDropdownTwo ] = useState(false)
  let [ dropdownTwoList, setDropdownTwoList ] = useState([
    {
      id: 1,
      name: 'ASH',
      isActive: true
    },
    {
      id: 2,
      name: 'ASC',
      isActive: false
    },
    {
      id: 3,
      name: 'DESC',
      isActive: false
    }
  ])

  let [ isOpenDropdownThree, setIsOpenDropdownThree ] = useState(false)
  let [ dropdownThreeList, setDropdownThreeList ] = useState([
    {
      id: 1,
      name: '2 years',
      isActive: true
    },
    {
      id: 2,
      name: '3 years',
      isActive: false
    },
    {
      id: 3,
      name: '4 years',
      isActive: false
    }
  ])

  let [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
      '(min-width: 746px)': () => setIsMobile(false),
      '(max-width: 745px)': () => setIsMobile(true),
    })
  }, [])

  const changeDropdownOne = useCallback((sortId, event) => {
    let parent = event.currentTarget.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setDropdownOneList(dropdownOneList.map(item => {
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
    setIsOpenDropdownOne(false)
  }, [isOpenDropdownOne, dropdownOneList])

  const changeDropdownTwo = useCallback((sortId, event) => {
    let parent = event.currentTarget.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setDropdownTwoList(dropdownTwoList.map(item => {
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
    setIsOpenDropdownTwo(false)
  }, [isOpenDropdownTwo, dropdownTwoList])

  const changeDropdownThree = useCallback((sortId, event) => {
    let parent = event.currentTarget.parentElement.parentElement

    parent.classList.add('fade')

    if (isBrowser()) {
      setTimeout(() => {
        setDropdownThreeList(dropdownThreeList.map(item => {
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
    setIsOpenDropdownThree(false)
  }, [isOpenDropdownThree, dropdownThreeList])

  const checkCounter = useCallback(event => {
    let value = event.currentTarget.value

    if (value.match(/[^0-9]/g)) setCounter(value.replace(/[^0-9]/g, ''))
    else setCounter(value)

    if (value === '') setCounter(1)

    if (parseInt(value) > 100) setCounter(100)
  }, [counter])

  /* Details */
  let [ details, setDetails ] = useState([
    {
      id: 1,
      title: 'CONTROL PANEL',
      desc: 'TEHNOTABLE’S GAMING DESK SOLVES THIS PROBLEM AS IT CAN BE TURNED INTO A STANDING PLATFORM BY SIMPLY PRESSING A BUTTON.',
      coords: {
        top: '35%',
        left: '81%'
      },
      isActive: true
    },
    {
      id: 2,
      title: 'CONTROL PANEL1',
      desc: 'TEHNOTABLE’S GAMING DESK SOLVES THIS PROBLEM AS IT CAN BE TURNED INTO A STANDING PLATFORM BY SIMPLY PRESSING A BUTTON1.',
      coords: {
        top: '25%',
        left: '60%'
      },
      isActive: false
    },
    {
      id: 3,
      title: 'CONTROL PANEL2',
      desc: 'TEHNOTABLE’S GAMING DESK SOLVES THIS PROBLEM AS IT CAN BE TURNED INTO A STANDING PLATFORM BY SIMPLY PRESSING A BUTTON2.',
      coords: {
        top: '37%',
        left: '41%'
      },
      isActive: false
    },
    {
      id: 4,
      title: 'CONTROL PANEL3',
      desc: 'TEHNOTABLE’S GAMING DESK SOLVES THIS PROBLEM AS IT CAN BE TURNED INTO A STANDING PLATFORM BY SIMPLY PRESSING A BUTTON3.',
      coords: {
        top: '55%',
        left: '44%'
      },
      isActive: false
    }
  ])

  let [ isInfoWindowClosed, setInfoWindowClose ] = useState(false)

  const changeDetails = useCallback((dotId, event) => {
    let parent = event.currentTarget.parentElement

    !isInfoWindowClosed && parent.classList.add('fade')

    if (isBrowser()) {
      if (isInfoWindowClosed) {
        setDetails(details.map(item => {
          return {
            ...item,
            isActive: dotId === item.id
          }
        }))
      } else {
        setTimeout(() => {
          setDetails(details.map(item => {
            return {
              ...item,
              isActive: dotId === item.id
            }
          }))
        }, 210)

        setTimeout(() => {
          parent.classList.remove('fade')
        }, 220)
      }
    }

    setInfoWindowClose(false)
  }, [details])

  const closeInfoWindow = useCallback(() => {
    if (isBrowser()) {
      setTimeout(() => {
        setDetails(details.map(item => {
          return {
            ...item,
            isActive: false
          }
        }))
      }, 210)
    }

    setInfoWindowClose(true)
  }, [isInfoWindowClosed])

  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout>
        <Seo title={`Contacts Page`} lang={pageContext.lang} />
        <nav className="breadcrumbs single-product-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list breadcrumbs-list">
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Home</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Catalog</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <Link className="breadcrumbs-list__link" to="#">Category</Link>
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__separator" />
              </li>
              <li className="breadcrumbs-list__item">
                <span className="breadcrumbs-list__current">Single Product</span>
              </li>
            </ul>
          </div>
        </nav>
        <SingleProductIntro
          slider={slider}
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
        <SingleProductContent
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
          details={details}
          changeDetails={changeDetails}
          isInfoWindowClosed={isInfoWindowClosed}
          closeInfoWindow={closeInfoWindow}
        />
        { !isMobile && <SingleProductAuthor /> }
        <RecomendedProducts />
        <Discount />
      </Layout>
    </PrefixProvider>
  )
}

export default SingleProduct