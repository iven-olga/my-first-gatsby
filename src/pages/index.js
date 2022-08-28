import * as React from "react"; 
import Layout from "../components/layout";
import  { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> From gatsby tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dogImage.jpg"
      />
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
