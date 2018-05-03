import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'

import Icons from '../components/icons'

import '../assets/styles.scss'

const Layout = ({ children, data }) => (
  <div className="layout-wrap">
    <Typekit kitId="fyg1ntw" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
    />
    <div
      style={{
        height: '0',
        width: '0',
        position: 'absolute',
        visibility: 'hidden',
      }}
    >
      <Icons />
    </div>
    <Link to="/" className="site-header">
      bookshelf.holmberg.io
    </Link>
    <main id="main">{children()}</main>
    <footer className="site-footer">
      <p>
        Highlights and covers are copyright to their respective
        authors.
      </p>
      <p>
        A pet project by{' '}
        <a href="https://holmberg.io">Johannes Holmberg</a>
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
