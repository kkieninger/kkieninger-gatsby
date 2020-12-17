const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exposes work history to the graphql data layer
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const jobs = [
    {
      title: "software engineer",
      company: "stockx",
      years: "2020-",
      current: true,
      description: "building and maintaining the services that power the stockx marketplace as a software engineer.",
    },
    {
      title: "senior software engineer",
      company: "bankrate.com",
      years: "2020",
      current: false,
      description: "helped build tools for people navigating their financial journeys at bankrate.com as a senior software engineer, supporting the deposits, advertiser platform, and known user experience teams.",
    },
    {
      title: "software engineer",
      company: "bankrate.com",
      years: "2018-2020",
      current: false,
      description: "helped build tools for people navigating their financial journeys at bankrate.com as a senior software engineer, supporting the deposits, advertiser platform, and known user experience teams.",
    },
    {
      title: "front-end web developer",
      company: "deep canvas",
      years: "2015-2018",
      current: false,
      description: "handcrafted marketing wordpress sites for small businesses across metro detroit as a front-end web developer with deep canvas.",
    },
  ];

  jobs.forEach(job => {
    const node = {
      title: job.title,
      company: job.company,
      current: job.current,
      description: job.description,
      years: job.years,
      id: createNodeId(`Job-${job.company.replace(' ', '-')}_${job.years}`),
      internal: {
        type: "Jobs",
        contentDigest: createContentDigest(job),
      },
    }
    actions.createNode(node)
  })
}
