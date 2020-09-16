import React from "react"
import { jsx } from "theme-ui"
import { Styled, Flex,  NavLink,Grid, Box, Button} from 'theme-ui'
import './switch-slider.css'
import logo from '../images/KennyDN.png'
import search from '../images/search.png'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import Img from "gatsby-image"

function Footer() {
  return(
  <footer>
  <Grid  gap={2} columns={[2, null, 5]} style={{paddingTop: "5%"}}>     
    <Box>
    <img src={logo} style={{maxWidth: "90px"}} />
    </Box>
    <Box>
    <img src={search} style={{maxWidth: "70px"}} />
    </Box>
    <Box>
    <img src={fb} style={{maxWidth: "70px"}} />
    </Box>
    <Box>
    <img src={twitter} style={{maxWidth: "70px"}} />
    </Box>
    <Box>
    <Button  variant='primary' style={{padding: "20px"}}>Buy me a coffee</Button>
    </Box>
    </Grid>
    <div style={{textAlign: "center"}}>
    © {new Date().getFullYear()}, Built with
          <a href="https://www.workingwithle.com">Le</a>
    </div>
  </footer>
  )
}

export default Footer
