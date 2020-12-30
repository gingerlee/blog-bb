import React from 'react'
import Layout from '../components/layout'
import ReadLink from '../components/read-link';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts'

const IndexPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>bb home</h1>
      <p>This thing on?</p>
      <ReadLink to='/about/'>About me &rarr;</ReadLink>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
}

export default IndexPage
