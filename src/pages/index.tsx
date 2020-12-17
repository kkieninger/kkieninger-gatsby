// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const Index = ({ data, location }: PageProps<Props>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout
      location={location}
      title={siteTitle}
    >
      <SEO title="All posts" />
      <Bio />
      posts go in here
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
