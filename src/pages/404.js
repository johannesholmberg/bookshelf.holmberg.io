import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="error-404">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      Go to the <Link to="/">start page</Link>
    </p>
  </div>
)

export default NotFoundPage
