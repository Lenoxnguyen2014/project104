import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { jsx } from "theme-ui"
import { useColorMode } from 'theme-ui'
import { Styled, Flex} from 'theme-ui'
import './switch-slider.css'
import logo from '../images/KennyDN.png'
import Img from "gatsby-image"

function Header({ siteTitle, menuLinks}) {
  const [colorMode, setColorMode] = useColorMode()
  return(
  <header >
  <Flex as='nav'>     
    <p>
        {/* <Styled.a as={Link} to="/">
          {siteTitle}
        </Styled.a> */}
        <img src={logo} style={{maxWidth: "70px"}} />
      </p>
        {menuLinks.map(link => (
        <p style={{ padding: "1rem" }} key={link.name}>
            <Styled.a as={Link} to={link.Link}>
            {link.name}
            </Styled.a>
        </p>
        )
      )}
      <p style={{ padding: "1rem"}}>
      <Styled.a as={Link} to="/">Quick Search </Styled.a>
      </p>
      <p style={{ padding: "1rem", right: "0", position: "relative" }} >
        <label class="switch">
          <input type="checkbox" onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }} />
         <span class="slider"></span>
      </label>
      </p>
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
