import React from 'react'
import Img from 'gatsby-image'
import Highlight from '../components/highlight'

export default function BookTemplate({ data }) {
  const { markdownRemark: post } = data
  const { title, author, poster, published } = post.frontmatter
  const { allHighlightsYaml: highlight } = data

  return (
    <main className="main-container book-template">
      <div className="book-cover">
        <h1 className="book-cover__title">
          <span className="head">{title}</span>
        </h1>
        <div className="book-cover__meta">
          <span>by</span> {author}
        </div>

        <Img
          sizes={poster.childImageSharp.sizes}
          className="book-cover__image"
        />

        {/* <dl className="book-cover__list-item">
          <dt>Published:</dt>
          <dd>{published}</dd>
        </dl> */}
      </div>

      <div className="main-content book-highlights">
        {getHighlights(title, highlight)}
      </div>
    </main>
  )
}

function getHighlights(title, highlight) {
  const quotes = []
  highlight.edges.forEach(({ node }) => {
    const quoteTitle = node.title

    if (title == quoteTitle) {
      node.quotes.forEach(quote => {
        quotes.push(<Highlight quote={quote} />)
      })
    }
  })

  return <div>{quotes}</div>
}

export const bookQuery = graphql`
  query bookQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        poster {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        author
        published
      }
    }

    allHighlightsYaml {
      edges {
        node {
          title
          quotes {
            quote
            loc
          }
        }
      }
    }
  }
`
