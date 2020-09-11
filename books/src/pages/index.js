import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import logo from "../images/KennyDN.png"
import { Grid, Box } from 'theme-ui'

function IndexPage({data}) {

  return(
  <Layout>
  <SEO title="blogs" />
  <Grid width={[100,null,200 ]}>
  <Box>
    <img src={logo}/>
  </Box>
  <Box bg='primary'>
    <h3 style={{
      padding: "10vw"
    }}>Hope springs eternal in the human breast. Man never “is,” but always “to be” blessed.</h3>
  </Box>
  </Grid>
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
