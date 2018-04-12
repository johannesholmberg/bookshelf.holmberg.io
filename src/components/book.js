import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default class Book extends Component {
  render() {
    const { node: post } = this.props
    const { title, poster } = post.frontmatter

    return (
      <Link to={post.fields.slug} className="book-item">
        <div className="book-item__cover">
          <Img sizes={poster.childImageSharp.sizes} />
        </div>
        <h3 className="book-item__title">
          <span className="head">{title}</span>
        </h3>
      </Link>
    )
  }
}
