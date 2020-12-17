import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const About = ({ data, location }: PageProps<Props>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout
      location={location}
      title={siteTitle}
    >
      <SEO title="About Kevin" />
      <section className="about">
        this is the about page
      </section>
    </Layout>
  )
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
