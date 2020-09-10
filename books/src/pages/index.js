import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

function IndexPage({data}) {
  return(
  <Layout>
  <SEO title="blogs" />
    <h1>Hello world</h1>
  
</Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            date
          }
        }
      }
  }
`
