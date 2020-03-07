import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Home</h3>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
