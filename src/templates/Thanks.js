import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ThanksIntro from '../components/Thanks/Intro/Intro'

const Thanks = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix} isHiddenFooterTop={true}>
      <Seo title={`Thanks Page`} lang={props.pageContext.lang} />
      <ThanksIntro deliveryCode={props?.location?.state?.deliveryCode} />
    </Layout>
  )
}

export default Thanks