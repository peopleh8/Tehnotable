import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CheckoutIntro from '../components/Checkout/Intro/Intro'

const Checkout = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix} isHiddenFooterTop={true} isShowenHeaderCheckout={true}>
      <Seo title={`Checkout Page`} lang={props.pageContext.lang} />
      <CheckoutIntro />
    </Layout>
  )
}

export default Checkout