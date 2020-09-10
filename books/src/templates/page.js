import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const page = data.allWordpressPage.edges[0].node
  return (
    <Layout>
      <div>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($id: Int!) {
    allWordpressPage (filter: { wordpress_id: { eq: $id } })  {
      edges {
        node {
          title
          content
          date
          slug
        }
      }
    }
  }
`