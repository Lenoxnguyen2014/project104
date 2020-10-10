import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Box, Grid } from "theme-ui"
import Checkout from "../components/checkout"

function BlogPost({ data }) {
  const book = data.allWordpressWpBooks.edges[0].node
  console.log(book)
  return (
    <Layout>
        <h1>{book.title}</h1>
      <Grid  gap={2} columns={[2, '1fr 2fr']} style={{marginTop: "10%%"}}>
    <Box style={{textAlign:"center"}}>
        <Img key={book.featured_media.localFile.childImageSharp.resolutions.src} fluid={book.featured_media.localFile.childImageSharp.fluid} />
        <br />
        <Checkout />
      </Box>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: book.content }} />
        </Box>
      </Grid>
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
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth:350, quality:100){
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
                resolutions(width:350, height: 500) {
                  ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`