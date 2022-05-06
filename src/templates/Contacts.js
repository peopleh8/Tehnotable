import React from 'react'

import Layout from '../components/Layout/Layout'
import Seo from "../components/seo"

const Contacts = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`Contacts Page`} lang={props.pageContext.lang} />
      <section className="intro intro-contacts section">
        <h1>Hello Contacts Page</h1>
      </section>
    </Layout>
  )
}

export default Contacts