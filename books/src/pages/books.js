import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {Link, graphql } from "gatsby"
import { Styled } from 'theme-ui'

function Books({ data }) {
  return (
    <Layout>
    <SEO title="books" />
    <h1>Books</h1>
    {data. allWordpressWpBooks.edges.map(({ node }) => (
      <div key={'/books/' + node.slug}>
        <Styled.a as={Link} to={'/books/' + node.slug}>
          <h2>{node.title}</h2>
        </Styled.a>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </Layout>
  )
}

export default Books

export const query = graphql`
  query {
    allWordpressWpBooks(sort: { fields: [date] }) {
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