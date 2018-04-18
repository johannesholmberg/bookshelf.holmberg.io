import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'

import '../assets/styles.scss'

const Layout = ({ children, data }) => (
  <div className="layout-wrap">
    <Typekit kitId="oar2wfu" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <Link to="/" className="site-header">
      highlights.holmberg.io
    </Link>
    <main id="main">{children()}</main>
    <footer className="site-footer">
      <p>Highlights and covers are copyright to their respective authors.</p>
      <p>
        A pet project by <a href="https://holmberg.io">Johannes Holmberg</a>
      </p>
    </footer>
  </div>
)

export default Layout

export const query = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
