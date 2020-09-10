module.exports = {
  siteMetadata: {
    title: `Kenny DM`,
    description: `Kenny Norway professional site`,
    author: `@lenguyen`,
    menuLinks:[
      {
        name: 'home',
        Link: '/'
      },
      {
        name: 'about',
        Link: '/about'
      },
      {
        name: 'books',
        Link: '/books'
      },{
        name: 'blogs',
        Link: '/blogs'
      },{
        name: 'podcasts',
        Link: '/podcasts'
      }

    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: `http://192.168.33.10/kenny/`,
        // The protocol. This can be http or https.
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
        auth:{},
        verboseOutput: false,
        includedRoutes: [
          "**/posts",
          "**/media",
          "**/categories",
          "**/pages",
          "**/tags",
          "**/taxonomies",
          "**/users",
          // edit custom post type here
          "**/books",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk",
      },
    },
    `gatsby-plugin-lodash`,
  ],
}
