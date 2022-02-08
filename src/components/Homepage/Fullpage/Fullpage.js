import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Fullpage.scss'

import DrawLogo from './DrawLogo'
import FullpageSlider from './FullpageSlider'


const Fullpage = React.forwardRef((props, ref) => {
  let { sectionWrapperOne, sectionWrapperTwo, sectionOne, sectionTwo } = ref
  let [ isDraw, setIsDraw ] = useState(false);

  const slider = useRef();

  let wheelOrientation = useRef('');
  let downWheel = useRef(1);
  let upWheel = useRef(1);

  const sliderRef = { downWheel, upWheel, wheelOrientation }


  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('wheel', e => {
      if (e.wheelDelta > 0 && wheelOrientation.current === 'up' && (slider.current.offsetTop - window.scrollY) <= 0) {
        if (upWheel.current > 1) {
          gsap.to(window, {duration: 1, scrollTo: sectionOne.current, ease: "Power1.easeInOut"});

          setTimeout(() => {
            document.body.style.overflow = '';
          }, 1000);

          sectionWrapperOne.current.style.overflowY = '';
          sectionWrapperTwo.current.style.overflowY = '';

          upWheel.current = 1;
        }
        upWheel.current++;
      } else if (e.wheelDelta < 0 && wheelOrientation.current === 'down' && (slider.current.offsetTop - window.scrollY) >= 0) {
        if (downWheel.current > 1) {
          gsap.to(window, {duration: 1, scrollTo: sectionTwo.current, ease: "Power1.easeInOut"});

          setTimeout(() => {
            document.body.style.overflow = '';
          }, 1000);

          sectionWrapperOne.current.style.overflowY = '';
          sectionWrapperTwo.current.style.overflowY = '';

          downWheel.current = 1;
        }
        downWheel.current++;
      }
    });

    ScrollTrigger.create({
      trigger: slider.current,
      start: "+1px bottom",
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
    });

    ScrollTrigger.create({
      trigger: slider.current,
      start: `${slider.current.offsetHeight - 1}px top`,
      onLeaveBack: () => {
        setTimeout(() => {
          gsap.to(window, {duration: 1, scrollTo: slider.current, ease: "Power1.easeInOut"});
        }, 150);

        document.body.style.overflow = 'hidden';
        sectionWrapperOne.current.style.overflowY = 'scroll';
        sectionWrapperTwo.current.style.overflowY = 'scroll';
      }
    });
  }, []);

  return (
    <div className='fullpage' ref={slider}>
      <DrawLogo isDraw={isDraw} />
      <FullpageSlider ref={sliderRef} />
    </div>
  )
})

export default Fullpage