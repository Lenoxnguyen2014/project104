import React, {useState} from "react"
import {Link, graphql } from "gatsby"
import Layout from "./layout"
import Img from "gatsby-image"
import SEO from "./seo"

const ProjectsPreview = ({hit})=>{
    return(
      <div className="columns">
      <div className="column">
      <Link to= {hit.slug} partiallyActive={true}
 >
      {hit.title}
      </Link>
      </div>
      </div>
    )
    }



export default ProjectsPreview