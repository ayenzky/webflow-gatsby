import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IndexView from "../controllers/IndexController"
import '../styles'
import '../scripts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexView/>
  </Layout>
)

export default IndexPage
