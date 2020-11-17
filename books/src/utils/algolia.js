const escapeStringRegexp = require("escape-string-regexp")
const { object, node } = require("prop-types")
 
const booksQuery = `query{
  allWordpressWpBooks{
    edges {
      node {
        objectID:id
        title
        content
        
      }
    }
  }
}`

const essaysQuery = `query{
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
}`

const pageQuery = `query{
  allWordpressPage{
    edges {
      node {
        objectID:id
        title
        content
        slug
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest
    
  }
}
  
  const queries = [
    {
      query: booksQuery,
      // transformer: ({ data }) => data.allWordpressWpBooks.edges.map(pageToAlgoliaRecord),
      transformer: ({ data }) => data.allWordpressWpBooks.edges.map(({ node }) => [node]),
      indexName: 'dev_books',
      matchFields: ['slug', 'books'],
    },
    {
      query: essaysQuery,
      // transformer: ({ data }) => data.allWordpressPost.edges.map(pageToAlgoliaRecord),
      transformer: ({ data }) => data.allWordpressPost.edges.map(({ node }) => [node]),
      indexName: 'dev_post',
      matchFields: ['slug', 'essays'],
    },
  ]; 
  
  module.exports = queries