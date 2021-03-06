module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-nprogress`,
    //   options: {
    //     color: `#133BFE`,
    //     showSpinner: false,
    //     trickle: false,
    //     minimum: 0.1,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: 'https://gatsby-new.saprit.com/graphql',
    //     useACF: true,
    //     protocol: `https`,
    //     auth: {
    //       htaccess: {
    //         username: "admin",
    //         password: "123",
    //       },
    //     },
    //     develop: {
    //       hardCacheMediaFiles: true,
    //     },
    //     type: {
    //       Post: {
    //         limit: process.env.NODE_ENV === "development" ?
    //           50 :
    //           5000,
    //       },
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
