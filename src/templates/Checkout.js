import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import CheckoutIntro from '../components/Checkout/Intro/Intro'

import PrefixProvider from '../context/PrefixProvider'

const Checkout = ({ pageContext }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isHiddenFooterTop={true} isShowenHeaderCheckout={true}>
        <Seo title={`Checkout Page`} lang={pageContext.lang} />
        <CheckoutIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default Checkout