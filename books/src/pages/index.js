import React, {useState} from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import logo from "../images/kenny1.png"
// import Logo from "./logo"
import { Grid, Box, Button } from 'theme-ui'
import Img from "gatsby-image/withIEPolyfill"
import kennydnface from '../images/kennydnface.jpg'
import subscribe from '../images/subscribe.png'
import Slide from 'react-reveal/Slide';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import swal from 'sweetalert';


function IndexPage({data}) {
  const about = data.allWordpressPage.edges[0].node
  const current_book = data.allWordpressWpBooks.edges[0].node
  const [email, setEmail] = useState('yourmail@mail.com')
  const [FNAME, setFname] = useState('your first name')

  function handleChangeEmail(e){
    setEmail(e.target.value)
  }

  function handleChangeFname(e){
    setFname(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    addToMailchimp(email, {FNAME}) // listFields are optional if you are only capturing the email address.
    .then(data => {
      swal({
        title: data.result,
        text: data.msg,
        button: "OK",
      });
      console.log(data)
    })
    .catch((e) => {
      console.log(e)
      alert(e)
    })

  }

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
      <p>
    His problem(s) started at age 38: mid-life crisis. He called ‘em male menopause. They came one after another for the rest of his life. No, he did not buy a red convertible and chase women in their twenties… well, not at first. Kenny rolled from one mid-life crisis to next, from one weird experience to another. Now he’s an “older gentleman” who has gone well beyond his mid-life. Now he has one geezer crises, after another. After all this rocking and rolling, Kenny is certain of one thing. He doesn’t count. You count. His life isn’t all that important. Yours is. He created this website in hopes that he could amuse you and help you learn a bit of what he has learned. These are his words:
	“When you were in high school, did you study the poem Ulysses, by Tennyson? It’s about the legendary explorer of ancient Greece, who fought the brave fight, won some battles and lost others. In the poem, we see Odysseus, old and worn out, yearning for one more adventure: “I cannot rest from travel: I will drink life to the lees…” 
 I invite you to join me for one more adventure, always remembering: “…that which we are, we are, one equal temper of heroic hearts, made weak by time and fate, but strong in will to strive, to seek, to find and not to yield.”
Our adventures will be literary. We will follow trails of ancient wisdom-words into the unknown realm of our inner worlds.
    </p>
    <p>
    Kenny DN
    </p>
    </div>
  </Box>
  {/* render current book */}
  <h1 style={{paddingTop: "2%"}}>New Book Release</h1>
  <Slide bottom>
  <Grid gap={2} columns={[2, '1fr 2fr']} style={{paddingTop: "2%"}}>
  <Box >
    <Img key={current_book.featured_media.localFile.childImageSharp.resolutions.src} fluid={current_book.featured_media.localFile.childImageSharp.fluid} />
  </Box>
  <Box>
  <div dangerouslySetInnerHTML={{ __html: current_book.excerpt }} />
  <Link to= {"/books/" + current_book.slug}>
     <Button style={{marginLeft:"50%"}}>
          Read more
     </Button>
 </Link>
   </Box>
  </Grid>
  </Slide>


  {/* <h1 style={{paddingTop: "2%"}}>{about.title}</h1> */}
  <Grid gap={2} columns={[2, '1fr 2fr']} style={{paddingTop: "2%"}}>

  {/* <Box >
    <Img key={about.featured_media.localFile.childImageSharp.resolutions.src} fluid={about.featured_media.localFile.childImageSharp.fluid} />
  </Box>
  <Box>
  <div dangerouslySetInnerHTML={{ __html: about.excerpt }} />
  <Link to="/about">
     <Button>
          Read more
     </Button>
 </Link>  </Box> */}
  </Grid>

  {/* render Blogs and Podcast button */}
  <Grid width={[100,null,100 ]} style={{paddingTop: "10%"}}>
  <Box>
    <img src={kennydnface} />
  </Box>
  <Box style={{display: "block", textAlign:"center", padding: "10%"}}>
  {/* <img src={subscribe} /> */}
  <h2>Subscribe my website to get new update</h2>
  <p>I promise there is no spam</p>
  <form onSubmit={handleSubmit}>
  <p><input type="text" onChange={handleChangeFname} value={FNAME} placeholder={FNAME}/></p>
  <p><input type="email" onChange={handleChangeEmail} value={email} placeholder={email}/></p>
  <p><Button value="submit">Subscribe</Button> </p>
  </form>
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
