import React, { useEffect } from 'react'

import gsap from 'gsap'

const TermsIntro = () => {
  useEffect(() => {
    let termsIntroTl = gsap.timeline()

    termsIntroTl
      .from('.terms-intro__title', .5, { delay: .2, y: '100%', onComplete() {
        termsIntroTl.set(this.targets(), { clearProps: 'all' })
      }})
      .from('.terms-intro__article', .6, { y: 100, opacity: 0, onComplete() {
        termsIntroTl.set(this.targets(), { clearProps: 'all' })
      }}, '-=.1')

    return () => {
      termsIntroTl.kill()
    }
  }, [])

  return (
    <section className="intro terms-intro text-page">
      <div className="container">
        <div className="terms-intro__title-wrapper title-wrapper">
          <h1 className="terms-intro__title title title--big">Terms & Conditions</h1>
        </div>
        <article className="terms-intro__article article">
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back. Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.
          </p>
          <p>
            At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back. Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top.
          </p>
          <p>
            At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
          <p>
            Since 2017, the Ukrainian company TehnoTable has been producing innovative sit/stand desks, equipped with an electronic mechanism for lifting the top. At such a desk you can work comfortably when sitting or standing.
            It perfectly unloads the back.
          </p>
        </article>
      </div>
    </section>
  )
}

export default TermsIntro