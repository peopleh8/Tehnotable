import React, { useEffect } from 'react'

import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

import login from '../../images/login.jpg'

const LoginPhoto = () => {
  useEffect(() => {
    let LoginPhotoTl = gsap.timeline()

    LoginPhotoTl
      .to('.intro-login-photo', 1.5, { delay: .2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: 'Expo.easeInOut'})
      .from('.intro-login-photo img', .8, { scale: 1.3, stagger: .1, onComplete() {
        LoginPhotoTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=1')

    return () => {
      LoginPhotoTl.kill()
    }
  }, [])

  return (
    <div className="intro-login__photo intro-login-photo">
      <img src={login} alt="" width={940} height={930}/>
    </div>
  )
}

export default LoginPhoto