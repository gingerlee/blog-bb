import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import { graphql, useStaticQuery } from "gatsby"
import usePosts from "../hooks/use-posts"

const IndexPage = () => {
  const posts = usePosts()
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
    <>
      <Layout image={image.sharp.fluid} imageBackgroundColor="#F0C450">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
