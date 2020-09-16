import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Box, Grid } from "theme-ui"

export default function ({ data }) {
  const page = data.allWordpressPage.edges[0].node
  console.log(page)
  return (
    <Layout>
      <Grid  gap={2} columns={[2, '1fr 2fr']} style={{marginTop: "10%%"}}>
    <Box>
        <h1>{page.title}</h1>
        <Img key={page.featured_media.localFile.childImageSharp.resolutions.src} fluid={page.featured_media.localFile.childImageSharp.fluid} />
      </Box>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Box>
      </Grid>
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