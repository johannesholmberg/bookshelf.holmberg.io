import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default class BookItem extends Component {
  render() {
    const { node: post } = this.props
    const { poster } = post.frontmatter

    return (
      <Link to={post.fields.slug} className="book-item">
        <div className="book-item__cover">
          {poster && <Img sizes={poster.childImageSharp.sizes} />}
        </div>
      </Link>
    )
  }
}
