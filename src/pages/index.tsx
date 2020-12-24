import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Job } from "../types/jobs";
import { JobListing } from "../components/JobListing";

interface Props extends PageProps {
  data: {
    currentJobs: {
      nodes: Job[];
    }
    previousJobs: {
      nodes: Job[];
    }
  }
}

const Index: FC<Props> = ({ data }) => {
  const currentJobs = data.currentJobs.nodes;
  const previousJobs = data.previousJobs.nodes;

  return (
    <Layout>
      <SEO title="Home Page" />
      <div className="bio">
        <p>
          hello, I'm <span className="fc-orange">kevin</span>, a software
          engineer based in metro detroit. I specialize in javascript,
          reactjs, vuejs, nodejs, and graphql. more words will go in this
          paragraph once I figure out what I want to write.
        </p>
      </div>
      <section className="jobs">
        <h2>current</h2>
        {currentJobs.map((job, index) => <JobListing {...job} key={index} /> )}

        <h2>previous</h2>
        {previousJobs.map((job, index) => <JobListing {...job} key={index} /> )}
      </section>

    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    currentJobs: allJobs(filter: {current: {eq: true}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
    previousJobs: allJobs(filter: {current: {eq: false}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
  }
`
