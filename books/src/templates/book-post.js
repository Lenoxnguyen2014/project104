import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

function BlogPost({ data }) {
  const book = data.allWordpressWpBooks.edges[0].node
  console.log(book)
  return (
    <Layout>
      <div>
        <h1>{book.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: book.content }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    allWordpressWpBooks(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`