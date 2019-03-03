module.exports = {
  siteMetadata: {
    title: 'Gatsby/Firebase starter app',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/res/typography`,
      },
    },
  ],
}
