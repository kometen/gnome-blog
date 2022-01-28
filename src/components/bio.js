/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStackOverflow, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            stackoverflow
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
            {` `}
            <div style={{ textAlign: `center`, paddingTop: `15px` }}>
              <a
                style={{
                  fontSize: `1.75em`,
                  padding: `0em 0.5em`,
                  color: `#000`,
                  boxShadow: `none`,
                }}
                href={`https://twitter.com/${social.twitter}`}
              >
                <FontAwesomeIcon icon={faTwitter} title={'Twitter'}/>
              </a>
              <a
                style={{
                  fontSize: `1.75em`,
                  padding: `0em 0.5em`,
                  color: `#000`,
                  boxShadow: `none`,
                }}
                href={`https://github.com/${social.github}`}
              >
                <FontAwesomeIcon icon={faGithub} title={'GitHub'}/>
              </a>
              <a
                style={{
                  fontSize: `1.75em`,
                  padding: `0em 0.5em`,
                  color: `#000`,
                  boxShadow: `none`,
                }}
                href={`https://stackoverflow.com/${social.stackoverflow}`}
              >
                <FontAwesomeIcon icon={faStackOverflow} title={'StackOverflow'}/>
              </a>
            </div>
        </p>
      )}
    </div>
  )
}

export default Bio
