import React from "react"
import Footer from "./footer"
import Helmet from "react-helmet"
import Header from "./header"
import useSiteMetadata from "../hooks/use-sitemetadata"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

const Container = styled(`div`)`
  background: #fff;
  margin-top: calc(67vh - ${gutter.default});
  padding: ${gutter.default};
  position: relative;
  ${mq.tablet} {
    background: #fff;
    margin-left: ${offset};
    margin-top: 0;
    max-width: 37.5rem;
    padding: ${gutter.tablet};
    position: relative;
  }
  ${mq.desktop} {
    padding: ${gutter.desktop};
    padding-top: ${gutter.tablet};
  }
  ${mq.xxl} {
    margin-left: ${offsetXxl};
  }
`

const Image = styled(Img)`
  bottom: 33vh;
  left: ${gutter.default};
  right: ${gutter.default};
  top: ${gutter.default};
  ${mq.tablet} {
    bottom: 0;
    left: 0;
    right: auto;
    top: 0;
    width: ${offset};
  }
  ${mq.xxl} {
    width: ${offsetXxl};
  }
`

const Main = styled(`main`)`
  background: #fff;
  padding-top: ${gutter.default};
  position: relative;
  z-index: ${elevation.overlay};
`

const Layout = ({ children, image, imageTitle, imageBackgroundColor }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍍</text></svg>"
        ></link>

        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        {image && (
          <Image
            fluid={image}
            style={{ position: `fixed` }}
            backgroundColor={
              imageBackgroundColor ? imageBackgroundColor : false
            }
            title={imageTitle}
          />
        )}
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
