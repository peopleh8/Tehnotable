import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Fullpage.scss'

import { isBrowser } from '../../../utils/isBrowser'

import DrawLogo from './DrawLogo'
import FullpageSlider from './FullpageSlider'

const Fullpage = React.forwardRef((props, ref) => {
  let { sectionWrapperOne, sectionWrapperTwo, sectionOne, sectionTwo } = ref
  let [ isDraw, setIsDraw ] = useState(false);
  let resizeCount = 1;

  const slider = useRef();

  let wheelOrientation = useRef('');
  let downWheel = useRef(1);
  let upWheel = useRef(1);

  const sliderRef = { downWheel, upWheel, wheelOrientation }

  const checkFullpage = e => {
    if (e.wheelDelta > 0 && wheelOrientation.current === 'up' && (slider.current.offsetTop - window.scrollY) <= 0) {
      if (upWheel.current > 1) {
        gsap.to(window, {duration: 1, scrollTo: sectionOne.current, ease: "Power1.easeInOut"});

        setTimeout(() => {
          document.body.style.overflow = '';
          sectionWrapperOne.current.style.overflowY = '';
          sectionWrapperTwo.current.style.overflowY = '';

          setIsDraw(false);
        }, 1000);

        sectionWrapperOne.current.style.overflowY = 'scroll';
        sectionWrapperTwo.current.style.overflowY = 'scroll';

        upWheel.current = 1;
      }
      upWheel.current++;
    } else if (e.wheelDelta < 0 && wheelOrientation.current === 'down' && (slider.current.offsetTop - window.scrollY) >= 0) {
      if (downWheel.current > 1) {
        gsap.to(window, {duration: 1, scrollTo: sectionTwo.current, ease: "Power1.easeInOut"});

        setTimeout(() => {
          document.body.style.overflow = '';
          sectionWrapperOne.current.style.overflowY = '';
          sectionWrapperTwo.current.style.overflowY = '';

          setIsDraw(false);
        }, 1000);

        sectionWrapperOne.current.style.overflowY = 'scroll';
        sectionWrapperTwo.current.style.overflowY = 'scroll';

        downWheel.current = 1;
      }
      downWheel.current++;
    }
  }

  const resizeWindow = () => {
    if (isBrowser()) {
      resizeCount === 1 && window.dispatchEvent(new Event('resize'))
      resizeCount++
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let tlStart = null;
    let tlEnd = null;

    if (isBrowser()) {
      window.addEventListener('wheel', checkFullpage);

      tlStart = gsap.timeline({
        scrollTrigger: {
          trigger: '.work-position-wrapper',
          start: "bottom bottom",
          onEnter: () => {
            setTimeout(() => {
              gsap.to(window, {duration: 1, scrollTo: slider.current, ease: "Power1.easeInOut"});
            }, 150);

            document.body.style.overflow = 'hidden';
            sectionWrapperOne.current.style.overflowY = 'scroll';
            sectionWrapperTwo.current.style.overflowY = 'scroll';

            setTimeout(() => {
              setIsDraw(true);
            }, 850);
          }
        }
      })

      tlEnd = gsap.timeline({
        scrollTrigger: {
          trigger: '.discount-wrapper',
          start: "top top",
          onLeaveBack: () => {
            setTimeout(() => {
              gsap.to(window, {duration: 1, scrollTo: slider.current, ease: "Power1.easeInOut"});
            }, 150);

            document.body.style.overflow = 'hidden';
            sectionWrapperOne.current.style.overflowY = 'scroll';
            sectionWrapperTwo.current.style.overflowY = 'scroll';

            setTimeout(() => {
              setIsDraw(true);
            }, 850);
          }
        }
      })
    }

    return () => {
      if (isBrowser()) {
        tlStart.kill()
        tlEnd.kill()

        window.removeEventListener('wheel', checkFullpage);
        window.removeEventListener('scroll', resizeWindow);
      }
    }
  }, []);

  if (isBrowser()) {
    return (
      <div className='fullpage' ref={slider}>
        <DrawLogo isDraw={isDraw}/>
        <FullpageSlider ref={sliderRef} />
      </div>
    )
  } else {
    return (
      <div className='fullpage' ref={slider}>
        <FullpageSlider ref={sliderRef} />
      </div>
    )
  }
})

export default Fullpage