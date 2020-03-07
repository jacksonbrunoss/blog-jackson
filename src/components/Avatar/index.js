import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
