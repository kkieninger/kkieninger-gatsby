import React, { FC } from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About: FC<PageProps> = () => {

  return (
    <Layout>
      <SEO title="About Kevin" />
      <section className="about">
        this is the about page
      </section>
    </Layout>
  )
}

export default About;
