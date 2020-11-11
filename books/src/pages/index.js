import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import logo from "../images/KennyDN.png"
// import Logo from "./logo"
import { Grid, Box, Button } from 'theme-ui'
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
    {/* <Logo/> */}
    <img src={logo}/>
  </Box>
  </Grid>
  <Box bg='primary' >
    <div style={{padding: "6vw", boxShadow: "5px 10px"}}>
    <p>It was time for a change. After 30 years of stock market, Ken Norquay rebelled: he decided to follow his passion and invites you to do the same. What’s his passion? YOU. Why do you think what you think and act the way you act? Mostly he writes about you and mostly, in his podcasts, he talks about you. Check it out.
    </p>
    <p>
    Kenny DN
    </p>
    </div>
  </Box>
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
  <Link to="/about">
     <Button>
          Read more
     </Button>
 </Link>  </Box>
  </Grid>

  {/* render Blogs and Podcast button */}
  <Grid width={[100,null,100 ]} style={{paddingTop: "10%"}}>
  <Box>
    <img src={podcast} />
  </Box>
  <Box style={{display: "block", textAlign:"center", padding: "10%"}}>
  {/* <img src={subscribe} /> */}
  <h2>Subscribe my website to get new update</h2>
  <p>I promise there is no spam</p>
  <p><input type="text" /> First name </p>
  <p><input type="text" /> Last name </p>
  <p><input type="email" /> Your email </p>
  <p><Button>Subscribe</Button> </p>
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
