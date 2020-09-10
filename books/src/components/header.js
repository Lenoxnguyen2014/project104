import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { jsx } from "theme-ui"
import { useColorMode } from 'theme-ui'
import { Styled } from 'theme-ui'

function Header({ siteTitle, menuLinks}) {
  const [colorMode, setColorMode] = useColorMode()
  return(
  <header >
    <div style={{display:"flex"}}>
      <h1 >
        <Styled.a as={Link} to="/">
          {siteTitle}
        </Styled.a>
      </h1>
        {menuLinks.map(link => (
        <p style={{ padding: "1rem" }} key={link.name}>
            <Styled.a as={Link} to={link.Link}>
            {link.name}
            </Styled.a>
        </p>
        )
      )}
          <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </div>

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
