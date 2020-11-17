const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { node } = require('prop-types')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPage {
            edges {
              node {
                title
                content
                date
                slug
                wordpress_id
                objectID:id
              }
            }
          }
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
            objectID:id
          }
        }
      }
      allWordpressWpBooks(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
            objectID:id
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPage.edges.forEach(({ node }) => {
        console.log(node.id)
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            id: node.wordpress_id
          },
        })
    }),

    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: `/essays/` +  node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
          slug: node.slug,
        },
      })
    }),
    result.data.allWordpressWpBooks.edges.forEach(({ node }) => {
      createPage({
        path: `/books/` + node.slug,
        component: path.resolve(`./src/templates/book-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          id: node.id,
          slug: node.slug,
        },
      })
    })
  })
}