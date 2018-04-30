import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Highlight from '../components/highlight'

export default function BookTemplate({ data }) {
  const { markdownRemark: post } = data
  const { title, author, poster } = post.frontmatter
  const { allHighlightsYaml: highlight } = data

  return (
    <article className="layout-book">
      <Helmet
        title={`${title} | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
        ]}
      />
      <div className="book-cover">
        {poster && (
          <Img
            sizes={poster.childImageSharp.sizes}
            className="book-cover__image"
          />
        )}
      </div>
      <div className="main-content">
        <div className="page-header">
          <h1 className="page-header__title">{title}</h1>
          <div className="page-header__meta">by {author}</div>
        </div>

        <div
          className="content-wrap"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        {getHighlights(title, highlight)}
      </div>
    </article>
  )
}

function getHighlights(title, highlight) {
  const quotes = []
  highlight.edges.forEach(({ node }) => {
    const quoteTitle = node.title

    if (title == quoteTitle) {
      let id = 0
      node.quotes.forEach(quote => {
        quotes.push(<Highlight quote={quote} key={id} />)
        id++
      })
    }
  })

  return quotes
}

export const bookQuery = graphql`
  query bookQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        poster {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    allHighlightsYaml {
      edges {
        node {
          title
          quotes {
            quote
            loc
            page
          }
        }
      }
    }
  }
`
