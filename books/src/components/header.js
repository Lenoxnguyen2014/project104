import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { jsx, Flex } from "theme-ui"
import { useColorMode } from 'theme-ui'
import { Styled, Grid,Box, NavLink} from 'theme-ui'
import './switch-slider.css'
import logo from '../images/KennyDN.png'
import search from '../images/search.png'
import Img from "gatsby-image"

function Header({ siteTitle, menuLinks}) {
  const [colorMode, setColorMode] = useColorMode()
  return(
  <header>
  <Flex as='nav' gap={2} columns={[2, null, 6]}> 
    <Box>
        {/* <Styled.a as={Link} to="/">
          {siteTitle}
        </Styled.a> */}
        <img src={logo} style={{maxWidth: "70px"}} />
      </Box>
      <Grid as='nav' gap={2} columns={[2, null, 6]}>  
        {menuLinks.map(link => (
        <Box style={{ padding: "1rem" }} key={link.name}>
            <NavLink  href={link.Link}>
            {link.name}
            </NavLink >
        </Box>
        )
      )}
      <Box>
      <img src={search} style={{maxWidth: "70px"}} />
      </Box>
      <Box style={{ padding: "1.2rem", right: "0", position: "absolute" }} >
        <label class="switch">
          <input type="checkbox" onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }} />
         <span class="slider"></span>
      </label>
      </Box>
      </Grid>
    </Flex>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
