import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'

import Header from '../components/header'
import '../assets/styles.scss'

const Layout = ({ children, data }) => (
  <div>
    <Typekit kitId="oar2wfu" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
