module.exports = {
  siteMetadata: {
    title: 'Weekly Poem',
    author: 'Chris Swart',
    description: 'Hand picked weekly poem',
    gitOrg: 'swartchris8',
    gitRepo: 'poetry_weekly',
    siteUrl: 'https://kind-turing-936163.netlify.com/',
    social: {
      twitter: '@swartchris8',
    },
    feed: {
      rss: 'https://feeds.simplecast.com/9H3Jd25O',
      soundcloud: 'https://soundcloud.com/user-740510909/',
      google: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNzA0OS9yc3M%3D',
      apple: 'https://itunes.apple.com/us/podcast/hope-in-source/id1437677655',
      spotify: 'https://open.spotify.com/show/5EXwiyKzPrrucncKyrHy0B',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-152383042-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daily Green`,
        short_name: `Daily Green`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/poem_icon.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-twitter`
  ],
}
