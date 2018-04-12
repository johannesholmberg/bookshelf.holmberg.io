import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="header-global">
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
