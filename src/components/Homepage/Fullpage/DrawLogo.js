import React from 'react'
import DrawSVG from 'react-svg-drawing'

const DrawLogo = ({ isDraw }) => {
  return (
    <div className='fullpage-slider__logo'>
      {isDraw && <DrawSVG strokeWidth="3" easing="easeInQuad" duration="2700">
        <svg className='slider-logo__svg' width="946" height="703" viewBox="0 0 946 703" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className='slider-logo__path' opacity="0.3" d="M-42.9648 1L411.819 5.21886L944.043 292.101L822.955 307.571L445.611 99.4401L134.443 107.878L-42.9648 1Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M732.809 530.023L855.325 502.037L944.043 290.748L822.935 306.14L732.809 530.023Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M445.954 98.2061L368.287 308.506L734.028 530.022L824.404 305.702L445.954 98.2061Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M135.462 106.618L57.9795 344.958L369.318 308.506L446.801 98.2061L135.462 106.618Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M-42.3633 1L-114 230.305L57.3661 344.957L134.621 107.263L-42.3633 1Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M74.8027 593.66L162.284 333.36L368.288 309.44L227.189 702L74.8027 593.66Z" stroke="#807F7F"/>
          <path className='slider-logo__path' opacity="0.3" d="M362.039 668.232L228.088 702L369.089 309.44L474.84 372.757L362.039 668.232Z" stroke="#807F7F"/>
        </svg>
      </DrawSVG>}
    </div>
  )
}

export default DrawLogo