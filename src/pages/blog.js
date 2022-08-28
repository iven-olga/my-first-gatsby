import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog Page">
            <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                )) 
            }
            </ul>
        </Layout>
    )
}

export default BlogPage;

export const Head = () => <Seo title= "My Blog Posts" />