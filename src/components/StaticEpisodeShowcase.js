import React from 'react'
import EpisodeShowcase from './EpisodeShowcase.js'
import { StaticQuery, graphql } from 'gatsby'

function StaticEpisodeShowcase() {
  const query = graphql`
    query LatestEpisode {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "podcast" } } }
        limit: 1
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              legacyURL
              templateKey
              title
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 600
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
              }
              description
              date
              episodeType
              episodeNumber
              url
              length
              duration
              explicit
            }
          }
        }
      }
    }
  `
  return (
    <StaticQuery
      query={query}
      render={(data) => <EpisodeShowcase data={data} />}
    />
  )
}

export default StaticEpisodeShowcase
