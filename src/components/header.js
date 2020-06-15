import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo"
import tw, { styled } from "twin.macro"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
