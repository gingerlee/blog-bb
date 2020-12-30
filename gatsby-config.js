module.exports = {
  siteMetadata: {
    title: `gg's blog bb`,
    description: `Smol beacon to share words. :crystal_ball:`,
    author: `Ginger Lee Kretschmer`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
