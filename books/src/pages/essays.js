import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {Link, graphql } from "gatsby"
import { Styled } from 'theme-ui'

function Blogs({ data }) {
  return (
    <Layout>
    <SEO title="blogs" />
    <h1>Essays</h1>
    {data.allWordpressPost.edges.map(({ node }) => (
      <div key={'/essays/' + node.slug} >
        <Styled.a as={Link}  to={'/essays/' + node.slug}>
        <h2>{node.title}</h2>
        </Styled.a>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </Layout>
  )
}

export default Blogs

export const query = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            date
            slug
          }
        }
      }
  }
`