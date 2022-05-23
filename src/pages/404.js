import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ErrorIntro from '../components/NotFound/Intro/Intro'

const NotFoundPage = () => {
  return (
    <Layout langPrefix="/" isHiddenFooterTop={true}>
      <Seo title="404: Not found"/>
      <ErrorIntro />
    </Layout>
  )
}

export default NotFoundPage
