import React from 'react'
import Link from 'gatsby-link'
import Book from '../components/book'

const IndexPage = ({ data }) => (
  <main id="main" className="main-container c-book-list">
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Book node={node} key={node.id} />
    ))}
  </main>
)

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            poster {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
