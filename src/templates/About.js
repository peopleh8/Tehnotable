import React from 'react'
import Layout from '../components/Layout/Layout';
import Seo from "../components/seo";

const About = (props) => {
  return (
    <Layout langPrefix={props.pageContext.prefix}>
      <Seo title={`About Page`} lang={props.pageContext.lang} />
      <h1>Hello About Page</h1>
    </Layout>
  )
}

export default About