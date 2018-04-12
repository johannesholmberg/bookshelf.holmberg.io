import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Highlight from '../components/highlight'

export default function BookTemplate({ data }) {
  const { markdownRemark: post } = data
  const { title, author, poster, published } = post.frontmatter
  const { allDeepWorkYaml: highlight } = data

  return (
    <main className="main-container">
      <div className="book-cover">
        <header className="book-cover__header">
          <h1 className="book-cover__title">
            <span className="top">Highlights from </span>
            <span className="head">{title}</span>
          </h1>
          <div className="book-cover__meta">
            <span>by</span> {author}
          </div>
        </header>

        <Img
          sizes={poster.childImageSharp.sizes}
          className="book-cover__image"
        />

        <dl className="book-cover__list-item">
          <dt>Published:</dt>
          <dd>{published}</dd>
        </dl>
      </div>

      <div className="main-content c-book-highlights">
        {getHighlights(highlight)}
      </div>
    </main>
  )
}

function getHighlights(highlight) {
  const quotes = []
  highlight.edges.forEach(({ node }) => {
    quotes.push(<Highlight quote={node.quote} loc={node.loc} />)
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

    allDeepWorkYaml {
      edges {
        node {
          quote
          loc
        }
      }
    }
  }
`
