import React from 'react'

import BookItem from '../components/book-item'

const IndexPage = ({ data }) => (
  <div className="book-list">
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BookItem node={node} key={node.id} />
    ))}
  </div>
)

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            poster {
              childImageSharp {
                sizes(maxWidth: 400) {
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
