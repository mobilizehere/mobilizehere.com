import '../../css/about.scss'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout.js'
import ShareYourStory from '../../components/partials/ShareYourStory.js'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

class About extends React.PureComponent {
  render() {
    const { data, path } = this.props
    const { html, frontmatter } = data.allMarkdownRemark.edges.map(
      ({ node }) => node
    )[0]
    const { image, contributors } = frontmatter
    const credits = contributors.split(',').map((s) => s.trim())

    return (
      <Layout path={path}>
        <Helmet title={'About'} />
        <h2 className="mobilize-heading">About</h2>
        <div className="about-container">
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt="Mobilize Logo"
            className="about-img"
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <ShareYourStory />
        <div className="lz-padding">
          <h3>Credits</h3>
          <div className="credits">
            {credits.map((name, i) => (
              <span key={`podcast-contrib-${i}`}>{name}</span>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

function StaticAbout() {
  const query = graphql`
    query Info {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/data/info/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              name
              email
              website
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
              }
              itunesArtwork
              contributors
            }
          }
        }
      }
    }
  `
  return <StaticQuery query={query} render={(data) => <About data={data} />} />
}

export default StaticAbout
