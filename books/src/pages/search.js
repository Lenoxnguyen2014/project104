import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectsPreview from "../components/projects-preview"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, HitsPerPage } from 'react-instantsearch-dom';
 
const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
const size={
  width: "70vw"
}

function Search(){
    return(
      <Layout>
        <div>
          <div>
          <div>
          <br/>
          <InstantSearch searchClient={searchClient} indexName="dev_books">
          <SearchBox style={{size}}/>
          <Hits hitComponent={ProjectsPreview} />
        </InstantSearch>
        </div>
        </div> 
        </div>
            </Layout>
    )
}

export const pageQuery = graphql `
query Books{
    allWordpressWpBooks(limit:2, sort: { fields: [date] }) {
        edges {
          node {
              title
              slug   
              content
              }
            }
      }
      allWordpressPost(limit:2, sort: { fields: [date] }) {
        edges {
          node {
              title
              slug   
              content
              }
            }
      }        
}`


export default Search