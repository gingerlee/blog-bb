import React from "react"
import styled from "@emotion/styled"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    background: linear-gradient(
      94.23deg,
      #5374fa 12.41%,
      #fd9179 52.55%,
      #ff6969 89.95%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "sean-sinclair-C_NJKfnTR5A-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>gg's blog bb</h1>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
