import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ThanksIntro from '../components/Thanks/Intro/Intro'

import PrefixProvider from '../context/PrefixProvider'

const Thanks = ({ pageContext, location }) => {
  return (
    <PrefixProvider prefix={pageContext.prefix}>
      <Layout isHiddenFooterTop={true}>
        <Seo title={`Thanks Page`} lang={pageContext.lang} />
        <ThanksIntro deliveryCode={location?.state?.deliveryCode} />
      </Layout>
    </PrefixProvider>
  )
}

export default Thanks