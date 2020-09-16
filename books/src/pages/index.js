import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import logo from "../images/KennyDN.png"
import { Grid, Box } from 'theme-ui'
import Img from "gatsby-image/withIEPolyfill"
import podcast from '../images/live-podcast.png'
import subscribe from '../images/subscribe.png'


function IndexPage({data}) {
  const about = data.allWordpressPage.edges[0].node
  const current_book = data.allWordpressWpBooks.edges[0].node

  console.log(current_book)
  return(
  <Layout>
  <SEO title="blogs" />
  <Grid width={[100,null,200 ]}>
  <Box>
    <img src={logo}/>
  </Box>
  <Box bg='primary' >
    <div style={{padding: "10vw", boxShadow: "5px 10px"}}>
    <h3 >Hope springs eternal in the human breast. Man never “is,” but always “to be” blessed.
    </h3>
    <p>
    Scottish poet, Robbie Burns
    </p>
    </div>
  </Box>
  </Grid>
  {/* render current book */}
  <h1 style={{paddingTop: "2%"}}>New Book Release</h1>
  <Grid gap={2} columns={[2, '1fr 2fr']} style={{paddingTop: "2%"}}>
  <Box >
    <Img key={current_book.featured_media.localFile.childImageSharp.resolutions.src} fluid={current_book.featured_media.localFile.childImageSharp.fluid} />
  </Box>
  <Box>
  <div dangerouslySetInnerHTML={{ __html: current_book.excerpt }} />
   </Box>
  </Grid>

  <h1 style={{paddingTop: "2%"}}>{about.title}</h1>
  <Grid gap={2} columns={[2, '1fr 2fr']} style={{paddingTop: "2%"}}>
  <Box >
    <Img key={about.featured_media.localFile.childImageSharp.resolutions.src} fluid={about.featured_media.localFile.childImageSharp.fluid} />
  </Box>
  <Box>
  <div dangerouslySetInnerHTML={{ __html: about.excerpt }} />
  </Box>
  </Grid>

  {/* render Blogs and Podcast button */}
  <Grid width={[100,null,100 ]} style={{paddingTop: "10%"}}>
  <Box bg='primary'>
    <img src={podcast} />
  </Box>
  <Box bg='yellow'>
  <img src={subscribe} />
  </Box>
  </Grid>

</Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          excerpt
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
    allWordpressWpBooks {
      edges {
        node {
          title
          excerpt
          slug
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
