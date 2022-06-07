import React  from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

import ErrorIntro from '../components/NotFound/Intro/Intro'

import PrefixProvider from '../context/PrefixProvider'

const NotFoundPage = () => {
  return (
    <PrefixProvider prefix="/">
      <Layout isHiddenFooterTop={true}>
        <Seo title="404: Не найдено"/>
        <ErrorIntro />
      </Layout>
    </PrefixProvider>
  )
}

export default NotFoundPage
