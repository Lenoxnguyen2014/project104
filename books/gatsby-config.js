const { object, node } = require("prop-types");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 
const booksQuery = `{
  allWordpressWpBooks{
    edges {
      node {
        objectID:id
        title
        content
        slug
      }
    }
  }
}`;

const essaysQuery = `{
  allWordpressPost{
    edges {
      node {
        objectID:id
        title
        content
        slug
      }
    }
  }
}`;

  const queries = [
    {
      query: booksQuery,
      transformer: ({ data }) => data.allWordpressWpBooks.edges.map(({node})=> node),
    },
    { 
      query: essaysQuery,
      transformer: ({ data }) => data.allWordpressPost.edges.map(({node})=>node)
    
    },
  ]; 
  

module.exports = {
  siteMetadata: {
    title: `Kenny DN`,
    description: `Kenny Norway`,
    author: `@lenguyen`,
    menuLinks:[
      {
        name: 'home',
        Link: '/'
      },
      {
        name: 'books',
        Link: '/books'
      },{
        name: 'essays',
        Link: '/essays'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
        concurrentQueries: false, // default: true
        skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
        matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
      },
    },
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
        baseUrl: `http://52.11.217.108/`,
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
          "**/stripe-payments"
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://workingwithle.us2.list-manage.com/subscribe/post?u=fd4c7c624580324de03b7fee2&amp;id=9fe25714db', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },
 {
  resolve: `gatsby-plugin-polyfill-io`,
  options: {
     features: [`Array.prototype.map`, `fetch`]
  },
},

  ],
}
